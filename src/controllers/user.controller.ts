import { Request, Response } from "express";
import * as userService from "../service/user.service";

export const getAllUsers = async (_req: Request, res: Response) => {
  const users = await userService.getAllUsers();
  const formattedUsers = users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
  }));
  res.status(200).json(formattedUsers);
};

export const findUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const id = Number(req.params.id);
  const user = await userService.findUserById(id);
  if (!user) {
    res.status(404).json({ message: "Usuário não encontrado" });
    return;
  }
  res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const id = Number(req.params.id);
  const user = await userService.updateUser(id, name, email);
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await userService.deleteUser(id);
  res.status(204).send();
};
