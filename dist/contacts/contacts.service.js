"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants/constants");
let ContactsService = class ContactsService {
    constructor(contactModel) {
        this.contactModel = contactModel;
    }
    async create(createContactDto) {
        const createdContact = new this.contactModel(createContactDto);
        return await createdContact.save();
    }
    async findAll() {
        return await this.contactModel.find().exec();
    }
    async findByName(name) {
        const dataFromDB = await this.findAll();
        for (const data of dataFromDB) {
            if (data && data.name && data.name === name) {
                return data;
            }
        }
        return undefined;
    }
    async findByEmail(emailId) {
        const dataFromDB = await this.findAll();
        for (const data of dataFromDB) {
            if (data && data.emailId && data.emailId === emailId) {
                return data;
            }
        }
        return undefined;
    }
    async deleteByName(name) {
        const dataFromDB = await this.findAll();
        for (const data of dataFromDB) {
            if (data && data.name && data.name === name) {
                const deletedData = data;
                data.remove();
                return deletedData;
            }
        }
        return undefined;
    }
    async updateByName(name, body) {
        const dataFromDB = await this.findAll();
        for (const data of dataFromDB) {
            if (data && data.name && data.name === name) {
                if (body.name)
                    data.name = body.name;
                if (body.phoneNumber)
                    data.phoneNumber = body.phoneNumber;
                if (body.emailId)
                    data.emailId = body.emailId;
                return data;
            }
        }
        return undefined;
    }
};
ContactsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.CONTACT_MODEL_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ContactsService);
exports.ContactsService = ContactsService;
//# sourceMappingURL=contacts.service.js.map