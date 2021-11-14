import { validationResult } from "express-validator";
import Certificate from "../../model/Certificate.js";
import Vendor from "../../model/Vendor.js";

// find single certificate
export async function findCertificate(req, res) {
    try {
        // find certificate by id
        const id = req.params.id;
        const certificate = await Certificate.findById(id);
        // if not found return 404
        if (!certificate) {
            return res.status(404).json({
                message: "Certificate not found"
            });
        }
        // return certificate
        return res.status(200).json(certificate);
    } catch (err) {
        // error handling
        console.error(err.message);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// find all of certificate a vendor
export async function findCertification(req, res) {
    try {
        // find all certificates by slug id
        const certificates = await Certificate.findOne({slug_id: req.params.id});
        // if not found return 404
        if (!certificates) {
            return res.status(404).json({
                status: 404,
                error: "Certificate not found"
            });
        }
        // return certificates
        return res.status(200).json({
            status: 200,
            data: certificates
        });
    } catch (error) {
        // error handling
        console.error(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}
// create new certificate
export async function createCertification(req, res) {
    // request validation
     const errors = validationResult(req);

    // if not required fields
    if (!errors.isEmpty()) {
       return res.status(400).json({
            errors: errors.array()
        });
    }
    try {
        //check req params exist or not
        const slug = await Vendor.findOne({_id: req.params.id});
        if(!slug || slug === null) {
            res.status(404).json({
                status: "error",
                message: "Vendor not found"
            });
        }
        // find a certificate
        const certificate = await Certificate.findOne({certificateName: req.body.certificate});
        if(certificate){
           res.status(400).json({
                status: "bad request",
                message: "Certificate already exists"
            });
        }
        // create a new certificate
        const newCertificate = new Certificate({
            slug_Id: req.params.id,
            certificateName: req.body.certificate,
            status: req.body.status,
        });
        // save certificate
        await newCertificate.save();
        // return certificate
        res.status(201).json({
            status: "success",
        });
    } catch (error) {
        // error handler
        console.error(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

// delete a certificate

export async function deleteCertificate(req, res) {
    try {
        // find certificate by id
        const id = req.params.id;
        const certificate = await Certificate.findById(id);
        // if not found return 404
        if (!certificate) {
            res.status(404).json({
                status: "error",
                message: "Certificate not found"
            });
        }
        // delete certificate
        await certificate.remove();
        // return certificate
        res.status(200).json({
            status: "success",
            message: "Certificate deleted"
        });
    } catch (error) {
        // error handler
        console.error(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

// update a certificate

export async function updateCertificate(req, res) {
     // request validation
    const errors = validationResult(req);

    // if not required fields
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    try {
        // find certificate by id
        const id = req.params.id;
        const certificate = await Certificate.findById(id);
        // if not found return 404
        if (!certificate) {
            res.status(404).json({
                status: "error",
                message: "Certificate not found"
            });
        }
        // update certificate
        await Certificate.findByIdAndUpdate(id, {
            $set: {
                certificateName: req.body.certificate,
            }});
        // return certificate
        res.status(200).json({
            status: "success",
            message: "Certificate updated",
        });
    } catch (error) {
        // error handler
        console.error(error.message);
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}