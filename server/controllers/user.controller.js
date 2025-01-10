import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { COOKIE_OPTIONS } from "../constants/config.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, learning_style, interest } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      learning_style,
      interest,
    });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, COOKIE_OPTIONS);

    res.status(200).json({ message: "Login successful", token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.userId); 
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const { password, ...userDetails } = user.toObject();
  
      res.status(200).json(userDetails); 
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };