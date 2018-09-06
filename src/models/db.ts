import mongoose from "mongoose";

export class Db {
    constructor() {
        let dbURI = "mongodb://localhost/z-module";

        if (process.env.NODE_ENV === 'production') {
            dbURI = "mongodb://heroku_2j0vkft9:4fvs4b87u9fr1t843inb7l3eru@ds245762.mlab.com:45762/heroku_2j0vkft9";
        }
        mongoose.connect( dbURI );

        mongoose.connection.on('connected', _ => {
            console.info('Mongoose connected to ' + dbURI);    
        });

        mongoose.connection.on('error', (error) => {
            console.error('Mongoose connection error: ' + error);
        });

        mongoose.connection.on('disconnected', _ => {
            console.info('Mongoose disconnected');
        });
    }
}