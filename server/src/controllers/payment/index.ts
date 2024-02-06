import { Request, Response } from "express";

export const checkout = (req: Request, res: Response) => {
  const { amount } = req.body;

  res.status(200).json({ message: `${amount} received` });
};

export const verification = (req: Request, res: Response) => {
  const { amount } = req.body;

  res.status(200).json({ message: `${amount} received` });
};
