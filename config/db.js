const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // handle warnings in the console
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        // console.log(conn.connection)
    } catch (err) {
        console.err(err);
        process.exit(1) // stop the process
    }
}

module.exports = connectDB