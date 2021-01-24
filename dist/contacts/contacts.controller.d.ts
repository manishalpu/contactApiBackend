import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsService } from './contacts.service';
import { Contact as ContactInterface } from './interfaces/contact.interface';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    create(createContactDto: CreateContactDto): Promise<void>;
    findAll(): Promise<ContactInterface[]>;
    findByName(name: string): Promise<ContactInterface>;
    deleteByName(name: string): Promise<void>;
    updateByName(name: string, body: any): Promise<ContactInterface>;
}
