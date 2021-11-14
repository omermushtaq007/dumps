import {
  validationResult
} from "express-validator";
import Vendor from "../../model/Vendor.js";

// findOne vendor
export async function singleVendor(req, res) {
  console.log(req.id)
  try {
    const vendor = await Vendor.findOne({
      _id: req.id
    });
    if(!vendor) {
      return res.status(404).json({
        message: "Vendor not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: vendor
    });
  } catch (err) {
    // error handling
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
}

// find vendors
export async function findVendors(req, res) {
  try {
    const vendors = await Vendor.find();
    res.status(200).json({
      status: "success",
      data: vendors
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
}

// create a new vendor function
export async function createVendor(req, res) {

  // validate request
  const errors = validationResult(req);

  // if not required fields
  if (!errors.isEmpty()) res.status(400).json({
    errors: errors.array()
  });
  try {
    let vendor = await Vendor.findOne(req.body); // find if vendor already exists

    // vendor exists return error
    if (vendor) return res.status(400).json({
      errors: [{
        msg: 'Vendor already exists'
      }]
    });

    // if vendor does not exist create new vendor 
    vendor = new Vendor(req.body);

    await vendor.save(); // save vendor
    res.send("success").status(200);
  } catch (err) {
    console.error(err.message); // console error
    res.status(500).send('Server Error'); // server error
  }
}

// destroy a vendor
export async function deleteVendor(req, res) {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({
      errors: [{
        msg: 'Vendor not found'
      }]
    });
    await vendor.remove();
    res.json({
      status: "success",
      data: {}
    });
  } catch (err) {
    console.error(err.message);
    throw (err.message);
  }
}

// update a vendor
export async function updateVendor(req, res) {
  // validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) res.status(400).json({
    errors: errors.array()
  });
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({
      errors: [{
        msg: 'Vendor not found'
      }]
    });
    await vendor.update(req.body);
    res.json({
      status: "success",
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
}

export async function findSingleVendor(req,res) {
  try {
    const vendor = await Vendor.findOne({
      _id: req.params.id
    });
    if(!vendor) {
      return res.status(404).json({
        message: "Vendor not found"
      });
    }
    res.status(200).json({
      status: "success",
      data: vendor
    });
  } catch (err) {
    // error handling
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
}