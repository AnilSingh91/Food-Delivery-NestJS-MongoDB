import { Mongoose } from 'mongoose';
import { OrderSchema } from './schemas/order.schema';

export const orderProviders = [
  {
    provide: 'ORDER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Order', OrderSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];