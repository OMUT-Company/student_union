const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminModel");

const protect = asyncHandler(async (req, res, next) => {
  try {
    const { headers } = req;
    if (!headers.authorization || !headers.authorization.startsWith("Bearer")) {
      throw new Error("No authorized, no token");
    }

    const token = headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decode.id).select("-password");

    if (!req.admin) {
      throw new Error("Admin account not found");
    }

    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

module.exports = { protect };
