import app from './src/app.js'
import env from './src/config/env.js'
import { connectDB } from './src/config/db.js'

const port = env.port

const start = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`school-api Service running on port ${port}`);

        })

    } catch (error) {
        console.log(`server ${error}`);
    }

}

start();



