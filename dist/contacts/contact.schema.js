"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactSchema = void 0;
const mongoose = require("mongoose");
exports.ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: false,
    },
    emailId: {
        type: String,
        required: true,
    }
});
//# sourceMappingURL=contact.schema.js.map