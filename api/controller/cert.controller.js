import { validationResult } from "express-validator";
import Certificate from "../../model/Certificate.js";
import Vendor from "../../model/Vendor.js";
import { singleVendor } from "./vendor-controller.js";
export function findCertification(req, res) {
    try {
        
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}

export async function createCertification(req, res) {
    // request validation
     const errors = validationResult(req);

    // if not required fields
    if (!errors.isEmpty()) res.status(400).json({
        errors: errors.array()
    });
    try {
        //check req params exist or not
        const slug = await Vendor.findOne({_id: req.params.id});
        if(!slug || slug === null) {
            return res.status(404).json({
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
        console.log(newCertificate);
        await newCertificate.save();
        res.status(201).json({
            status: "success",
        });
    } catch (error) {
        // error handler
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}