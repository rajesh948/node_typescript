import User from "../../models/user";
import { Request, Response } from "express";

const setUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.findAll();
    return res.status(200).json(user);
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.userId,
      },
    });
    return user[0]
      ? res.status(200).json({ message: "User Update Successfully !!" })
      : res.status(404).json({ message: "User Not Found !!" });
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.userId,
      },
    });
    return user
      ? res.status(200).json({ message: "User Update Successfully !!" })
      : res.status(404).json({ message: "User Not Found !!" });
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

export default { setUser, getUser, deleteUser, updateUser };
