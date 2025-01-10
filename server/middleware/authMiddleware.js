import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "No token provided, authorization denied" });
  }

  try {
    const jwtToken = token.split(" ")[1];

    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.userId = decoded.userId;

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
