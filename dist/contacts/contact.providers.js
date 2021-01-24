"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactProviders = void 0;
const contact_schema_1 = require("./contact.schema");
const constants_1 = require("../constants/constants");
exports.contactProviders = [
    {
        provide: constants_1.CONTACT_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Contact', contact_schema_1.ContactSchema),
        inject: [constants_1.DB_PROVIDER],
    }
];
//# sourceMappingURL=contact.providers.js.map