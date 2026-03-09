import "dotenv/config";

export default {
  secret: process.env.COOKIES,
  expiresIn: "7d",
};
