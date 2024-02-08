module.exports = {
  secretKey: process.env.SECRET_KEY || "nitin",
  port: process.env.PORT || 5000,
  mongoURI:
    process.env.MONGODB_URI || "mongodb://localhost:27017/driving-license",
};
