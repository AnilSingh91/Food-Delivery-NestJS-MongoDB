import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
        const connect = await mongoose.connect('<YOUR_CONNECTION_URI>'); 
        return connect; 
    }
      },
];