import * as mongoose from 'mongoose';
import { sequenceEqual } from 'rxjs';

export const OrderSchema = new mongoose.Schema({
    orderId: String,
    orderTime: String,
    orderStatus: String,
    orderRating: String,
    orderFeedback: String,
    foodId: String,
    customerName: String,
    customerAddress: String,
    customerMobile: String,
    customerEmail: String,
    deliveryTime: String,
    quantity: Number,
    sequenceId: Number
});