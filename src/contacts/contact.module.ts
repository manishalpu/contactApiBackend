import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { contactProviders } from './contact.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports:[DatabaseModule],
    controllers: [ContactsController],
    providers:[ContactsService, ...contactProviders,],

})
export class ContactsModule{}