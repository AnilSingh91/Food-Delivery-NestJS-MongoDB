import { Document } from 'mongoose';

export interface Order extends Document {
    readonly orderId: string;
    readonly foodId: string;
    readonly quantity: number;
    readonly customerName: string;
    readonly customerEmail: string;
    readonly customerAddress: string;
    readonly customerMobile: string;
}
