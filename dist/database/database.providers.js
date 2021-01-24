"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants/constants");
exports.databaseProviders = [
    {
        provide: constants_1.DB_PROVIDER,
        useFactory: async () => {
            mongoose.Promise = global.Promise;
            return await mongoose.connect('mongodb://localhost:27017/phoneDirectory');
        },
    },
];
//# sourceMappingURL=database.providers.js.map