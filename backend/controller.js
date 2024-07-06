import referModel from "./model.js";
import fs from "fs";

// add refer data

const addRefer = async (req, res) => {
    try {
        const refer = new referModel({
            email: req.body.email,
            code: req.body.code
        });
        await refer.save();
        res.json({ success: true, message: "referral data added" });
    } catch (error) {
        console.error("Error saving refer document:", error);
        res.json({ success: false, message: "Error" });
    }
};


export {addRefer}