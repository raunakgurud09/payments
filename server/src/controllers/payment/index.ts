import { Request, Response } from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import orderModel from "../../model/order";
import crypto from "crypto";

dotenv.config({
  path: "./.env",
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const checkout = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  try {
    // Create an entry for razorpay
    const order = await razorpay.orders.create({
      amount: Number(amount * 100),
      currency: "INR",
    });

    await orderModel.create({
      order_id: order.id,
      name: name,
      amount: amount,
    });

    return res.status(200).json({ order, message: `${amount} received` });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

export const verification = async (req: Request, res: Response) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const body_data = razorpay_order_id + "|" + razorpay_payment_id;

  const expect = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "")
    .update(body_data)
    .digest("hex");

  const isValid = expect === razorpay_signature;

  if (isValid) {
    console.log("payment is successful");

    await orderModel.findOneAndUpdate(
      { order_id: razorpay_order_id },
      {
        $set: { razorpay_payment_id, razorpay_order_id, razorpay_signature },
      }
    );
    res.redirect(
      `http://localhost:5173/success?payemnt_id=${razorpay_order_id}`
    );
    return;
  } else {
    res.redirect(
      `http://localhost:5173/failure?payemnt_id=${razorpay_order_id}`
    );
    return;
  }
};
