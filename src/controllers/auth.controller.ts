import { Request, Response } from "express";
import * as authService from "../service/auth.service";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const result = await authService.login(email, password);
  if (!result) {
    res.status(401).json({ message: "Credenciais inválidas" });
    return;
  }

  res.json(result);
};

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  const userExists = await authService.findByEmail(email);
  if (userExists) {
    res.status(400).json({ message: "Email já está em uso" });
    return;
  }

  const user = await authService.register(name, email, password);
  res.status(201).json(user);
};
