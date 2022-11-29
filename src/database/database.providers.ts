import * as mongoose from 'mongoose';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: (): Promise<typeof mongoose> =>
            mongoose.connect('mongodb+srv://JehanCVeracierta:1234@cluster0.er1tt.mongodb.net/?retryWrites=true&w=majority'),
    },
];