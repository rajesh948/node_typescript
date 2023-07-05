import InstaAccount from "../../models/insta-account";
import User from "../../models/user";
import { Request, Response } from "express";

const setInstaAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.status(404).json({ message: "User not Found !!" });
    const instaAccount = await user.createInstaAccount(req.body);
    return res.status(201).json(instaAccount);
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const getInstaAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const instaAccount = await User.findByPk(req.params.userId, {
      include: InstaAccount,
    });
    if (!instaAccount)
      return res.status(404).json({ message: "User not Found !!" });
    return res.status(200).json(instaAccount);
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const updateInstaAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const instaAccount = await InstaAccount.update(req.body, {
      where: {
        id: req.params.accountId,
      },
    });
    return instaAccount[0]
      ? res.status(200).json({ message: "instaAccount Update Successfully !!" })
      : res.status(404).json({ message: "instaAccount Not Found !!" });
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

const deleteInstaAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const instaAccount = await InstaAccount.destroy({
      where: {
        id: req.params.accountId,
      },
    });
    return instaAccount
      ? res.status(200).json({ message: "instaAccount Update Successfully !!" })
      : res.status(404).json({ message: "instaAccount Not Found !!" });
  } catch (error: any) {
    console.log(error);
    return res.json({ message: error.message });
  }
};

export default {
  setInstaAccount,
  getInstaAccount,
  deleteInstaAccount,
  updateInstaAccount,
};
