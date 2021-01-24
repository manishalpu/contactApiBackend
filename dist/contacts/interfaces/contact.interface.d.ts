import { Document } from 'mongoose';
export interface Contact extends Document {
    readonly name: string;
    readonly phoneNumber: string;
    readonly emailId: string;
}
