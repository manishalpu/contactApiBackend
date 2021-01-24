import { Mongoose } from "mongoose";
import { Connection } from 'mongoose';

import { ContactSchema } from './contact.schema';
import { CONTACT_MODEL_PROVIDER, DB_PROVIDER } from '../constants/constants';

export const contactProviders = [
    {
        provide: CONTACT_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Contact',ContactSchema),
        inject: [DB_PROVIDER],
    }
];