const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const Organisation = require("../models/OrganizationModel");
const Admin = require("../models/AdminModel");
const bcrypt = require("bcryptjs");

//@desc Register new admin
//@route POST /api/admin
//@access public
const registration = asyncHandler(async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    if (!name || !surname || !email || !password) {
      throw new Error("All fields are required");
    }

    const dataa = { name, surname, email, password };
    const adminExist = await Admin.findOne({ email });

    if (!adminExist) {
      throw new Error("Admin already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = new Admin({
      name,
      surname,
      email,
      password: hashedPassword,
      verify: true,
    });
    await admin.save();

    if (!admin) {
      throw new Error("Admin account nnot created");
    }

    const token = generateToken(admin.id);

    res.status(200).json({
      success: true,
      data: {
        token,
        result: null,
        message: "Admin added successfully",
      },
      error: null,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@desc Login admin
//@route POST /api/admin/login
//@access public
const login = asyncHandler(async (req, res) => {
  try {
    console.log(req.body.email, req.body.password);
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!(admin && (await bcrypt.compare(password, admin.password)))) {
      throw new Error("Invalid credentials");
    }
    if (!admin.verify) {
      throw new Error("Invalid credentials");
    }

    const data = {
      id: admin._id,
      name: admin.name,
      surname: admin.surname,
      email: admin.email,
      token: generateToken(admin._id),
    };

    res.status(200).json({
      success: true,
      data: { result: data, message: null },
      error: null,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@desc Get Admin details
//@route GET /api/admin/me
//@access private

const me = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      result: req.admin,
      message: null,
    },
    error: null,
  });
});

module.exports = {
  registration,
  login,
  me,
};
