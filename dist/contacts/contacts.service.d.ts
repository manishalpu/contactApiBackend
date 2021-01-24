import { Model } from 'mongoose';
import { Contact } from './interfaces/contact.interface';
import { CreateContactDto } from './dto/create-contact.dto';
export declare class ContactsService {
    private readonly contactModel;
    constructor(contactModel: Model<Contact>);
    create(createContactDto: CreateContactDto): Promise<Contact>;
    findAll(): Promise<Contact[]>;
    findByName(name: string): Promise<Contact>;
    deleteByName(name: string): Promise<Contact>;
    updateByName(name: string, body: any): Promise<Contact>;
}
