import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
/**
 * @description  This middleware is used to verify the token
 * @param {object} req - The request object
 * @param {object} res - The response object
 */
export function isAuthorized(req,res, next){
    // Get auth header value
    const token = req.header("x-auth-token");
    // Check if not token
    if(!token) res.status(401).json({message: "authorized failed"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token
        req.user = decoded.user; 
        next(); // move to next middleware
    } catch(err) {
        console.error(err.message);// catch error
        throw (err.message); // throw error
    }

}
