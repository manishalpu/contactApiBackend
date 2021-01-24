import { Model } from 'mongoose';
import { Provider, Inject, Injectable } from '@nestjs/common';

import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
import { CONTACT_MODEL_PROVIDER } from '../constants/constants';

@Injectable()
export class ContactsService{
    constructor(
        @Inject(CONTACT_MODEL_PROVIDER) private readonly contactModel: Model<Contact> ){   }
    
    async create(createContactDto: CreateContactDto): Promise<Contact>{
        const createdContact = new this.contactModel(createContactDto);
        return await createdContact.save();
    }

    async findAll(): Promise<Contact[]>{
        return await this.contactModel.find().exec();
    }

    async findByName(name: string){
        const dataFromDB = await this.findAll();
        for(const data of dataFromDB)
        {
            if(data && data.name && data.name === name)
            {
                return data;
            }
        }
        return undefined;
    }
    async deleteByName(name: string){
        const dataFromDB = await this.findAll();
        for(const data of dataFromDB)
        {
            if(data && data.name && data.name === name)
            {
                const deletedData = data;
                data.remove();
                return deletedData;
            }
        }
        return undefined;
    }

    async updateByName(name: string)
    {
        const dataFromDB = await this.findAll();
        for(const data of dataFromDB)
        {
            if(data && data.name && data.name === name)
            {
                return data;
            }
        }
        return undefined;
    }
}