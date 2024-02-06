import { Request, Response } from "express";

const healthcheck = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Health check passed" });
};

export { healthcheck };
