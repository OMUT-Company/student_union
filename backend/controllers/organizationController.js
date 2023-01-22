const asyncHandler = require("express-async-handler");

const Organisation = require("../models/OrganizationModel");
const OrganizationOffer = require("../models/OrganizationOfferModal");

//@des Adding funding organization
//@route POST /api/organization/create
//@access private
const create = asyncHandler(async (req, res) => {
  try {
    const { name, director, address, email, number } = req.body;

    if (!name || !director || !address || !number || !email) {
      throw new Error("All fields are required");
    }

    const financierExist = await Organisation.findOne({ name });

    if (financierExist) {
      throw new Error("Organization already exist");
    }

    const organization = await Organisation.create(req.body);

    if (!organization) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      success: true,
      data: {
        result: null,
        message: "Organisation added successfully",
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

//@des Get funding organization
//@route GET /api/organization/get
//@access private
const get = asyncHandler(async (req, res) => {
  try {
    const organizations = await Organisation.find();

    if (!organizations) {
      throw new Error("Organization not found");
    }

    res.status(200).json({
      success: true,
      data: {
        result: organizations,
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

//@des Update current funding organization
//@route PUT /api/organization/update
//@access private
const update = asyncHandler(async (req, res) => {
  const { id, name, director, address, number } = req.body;

  try {
    const organization = await Organisation.findOne({ _id: id });

    if (!organization) {
      throw new Error("No such organization was found");
    }

    Organisation.updateOne(
      { _id: id },
      {
        $set: {
          name: name ? name : organization.name,
          director: director ? director : organization.director,
          address: address ? address : organization.address,
          number: number ? number : organization.number,
        },
      }
    ).then((organization) => {
      if (!organization) {
        throw new Error("Organization not updated");
      }

      Organisation.findOne({ id }).then((result) => {
        res.status(200).json({
          success: true,
          data: {
            result: result,
            message: "Organization's details have been successfully updated",
          },
        });
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@des Delete current funding organization
//@route DELETE /api/organization/delete
//@access private
const deleted = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("The Organization not found");
    }

    Organisation.findByIdAndDelete({ _id: id }).then((result) => {
      res.status(200).json({
        success: true,
        data: {
          result: null,
          message: "The Organization successfully deleted",
        },
        error: null,
      });
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: null,
      error: { message: err.message },
    });
  }
});

//@des The offer to become funder
//@route POST /api/organization/offer
//@access public
const offer = asyncHandler(async (req, res) => {
  const { name, director, address, number, message, email, poxos } = req.body;

  console.log(name, director, address, number, email, message, poxos);

  try {
    if (!name || !director || !address || !number || !message || !email) {
      throw new Error("All fields are required");
    }

    const organizationExist = await OrganizationOffer.findOne({ name });

    if (organizationExist) {
      throw new Error("The same name offer already exist");
    }

    const newOrganization = await OrganizationOffer.create(req.body);

    if (newOrganization) {
      throw new Error("The offer was not added");
    }

    res.status(201).json({
      success: true,
      data: {
        result: null,
        message: "Your offer added successfully",
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

//@des Get organization's offers
//@route GET /api/organization/offer/get
//@access private
const getOffers = asyncHandler(async (req, res) => {
  try {
    const organizations = await OrganizationOffer.find();

    if (!organizations) {
      throw new Error("Organizations not found");
    }

    res.status(200).json({
      success: true,
      data: {
        result: organizations,
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

//@des Confirm organization's offer
//@route POST /api/organization/offer/confirm
//@access private
const confirmOffer = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("The Organization id is required");
    }

    const organization = await OrganizationOffer.findById({ _id: id });
    const { name, director, email, address, number } = organization;

    if (!organization) {
      throw new Error("The Organization offer was not found");
    }

    const newOrganization = await Organisation.create({
      name,
      email,
      number,
      address,
      director,
    });

    if (!newOrganization) {
      throw new Error("The new Organization was not added");
    }

    await OrganizationOffer.findByIdAndDelete({ _id: id });

    res.status(201).json({
      success: true,
      data: {
        result: null,
        message: "The new Organization added successfully",
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

//@des Refuse organization's offer
//@route DELETE /api/organization/offer/refuse
//@access private
const refuseOffer = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("The Organization's id is required");
    }

    await OrganizationOffer.findByIdAndDelete({ _id: id });

    res.status(200).json({
      success: true,
      data: {
        result: null,
        message: "The Organization offer successfully refused",
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
  get,
  offer,
  create,
  update,
  deleted,
  getOffers,
  refuseOffer,
  confirmOffer,
};
