const e = require("express");
const asyncHandler = require("express-async-handler");
const Event = require("../models/EventModel");
const Volunteer = require("../models/VolunteerModal");
const { sendMail } = require("../utils/nodmailer");


//@desc Create new event
//@route POST /api/event
//@access private
const event = asyncHandler(async (req, res) => {
  try {
    const { type, name, description, date, place, financiers } = req.body;
    if (
      !financiers.length ||
      !description.en ||
      !date.from ||
      !date.to ||
      !type.en ||
      !name.en ||
      !place
    ) {
      throw new Error("All fields are required");
    }

    const createdEvent = await Event.create(req.body);
    if (createdEvent) {
      res.status(201).json({
        success: true,
        data: {
          result: null,
          message: "Event created successfully",
        },
        error: null,
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});


//@desc Get all events
//@route GET /api/event/get
//@access public
const get = asyncHandler(async (req, res) => {
  try {
    const events = await Event.find();

    if (!events) {
      throw new Error("Events not found");
    }

    res.status(200).json({
      success: true,
      data: { result: events, message: null },
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@desc Delete current events
//@route DELETE /api/event/get
//@access private
const remove = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete({ _id: id });

    if (!event) {
      throw new Error("The event was not found");
    }

    res.status(200).json({
      success: true,
      data: {
        result: null,
        message: "The event was deleted successfully",
        error: null,
      },
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@desc Submit to events
//@route POST /api/event/voluntarily
//@access public
const applyAnEvent = asyncHandler(async (req, res) => {
  const {
    name,
    surname,
    eventId,
    email,
    age,
    gender,
    phoneNumber,
    previouslyApplied,
  } = req.body;

  try {
    const isVolunteer = await Volunteer.find({ email });

    if (!isVolunteer.length) {
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
        throw new Error("Something went wrong");
      }
      const event = await Event.findById({ _id: eventId });

      if (!event) {
        throw new Error("Event not found");
      }

      event.volunteers.push(volunteer._id);

      const newEventApply = await Event.updateOne(
        { _id: eventId },
        { $set: { volunteers: event.volunteers } }
      );

      if (newEventApply) {
        sendMail({ name, surname, email });
        res.status(200).json({
          success: true,
          data: {
            result: null,
            message: "You successfully applied for event",
            error: null,
          },
        });
      }
    } else {
      const event = await Event.findById({ _id: eventId });

      if (!event.volunteers.includes(isVolunteer[0]._id)) {
        event.volunteers.push(isVolunteer[0]._id);

        const newEventApply = await Event.updateOne(
          { _id: eventId },
          { $set: { volunteers: event.volunteers } }
        );

        if (!newEventApply) {
          throw new Error("You have already applied to this event");
        }

        sendMail({ name, surname, email });
        res.status(200).json({
          success: true,
          data: {
            result: null,
            message: "You successfully applied for event",
            error: null,
          },
        });
      }
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

module.exports = {
  get,
  event,
  remove,
  applyAnEvent,
};
