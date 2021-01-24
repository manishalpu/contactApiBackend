import { Document } from 'mongoose';

export interface Contact extends Document {
    name: string;
    phoneNumber: string;
    emailId: string;
}