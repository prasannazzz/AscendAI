
export const DB_NAME = "AscendAI"; 

export const COOKIE_OPTIONS = {
  httpOnly: true, 
  secure: process.env.NODE_ENV === "production",
  maxAge: 24 * 60 * 60 * 1000, 
  sameSite: "strict", 
};
