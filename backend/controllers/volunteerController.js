const asyncHandler = require("express-async-handler");
const Volunteer = require("../models/VolunteerModal");
const { sendMail } = require("../utils/nodmailer");

//@des user apply for volunteer
//@route POST /api/volunteer
//@access public
const applyForVolunteer = asyncHandler(async (req, res) => {
  const { name, surname, age, email, phoneNumber, previouslyApplied, gender } =
    req.body;

  try {
    if (!name || !surname || !age || !email || !phoneNumber) {
      throw new Error("All fields are required");
    }

    const isVolunteer = await Volunteer.findOne({ email });
    if (isVolunteer) {
      throw new Error("You have already applied");
    }

    const volunteer = await Volunteer.create({
      name,
      surname,
      email,
      age,
      gender,
      phoneNumber,
      previouslyApplied,
    });

    if (!volunteer) {
      throw new Error("something went wrong, try applying again");
    }

    sendMail({ name, surname, email });
    res.status(200).json({
      success: true,
      data: {
        result: null,
        message: "You successfully applied",
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

//@des get volunteers
//@route GET /api/ volunteer/see
//@access private
const getVolunteers = asyncHandler(async (req, res) => {
  try {
    const volunteers = await Volunteer.find();

    if (!volunteers) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      success: true,
      data: {
        result: volunteers,
        message: null,
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

//@des get volunteers
//@route DELETE /api/ volunteer/see
//@access private
const removeVolunteer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await Volunteer.findByIdAndDelete({ _id: id });
    console.log(volunteer);

    if (!volunteer) {
      throw new Error("Volunteer not found");
    }

    res.status(200).json({
      success: true,
      data: {
        result: null,
        message: "Volunteer deleted successfully",
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

//@des update volunteers
//@route UPDATE /api/volunteer/update
//@access private
const updateVolunteer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await Volunteer.findById({ _id: id });

    if (!volunteer) {
      throw new Error("Volunteer not found");
    }

    await Volunteer.findByIdAndUpdate({ _id: id }, { $set: { new: false } });

    res.status(200).json({
      success: true,
      data: {
        result: null,
        message: "Data updated successfully",
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

module.exports = {
  getVolunteers,
  removeVolunteer,
  updateVolunteer,
  applyForVolunteer,
};
