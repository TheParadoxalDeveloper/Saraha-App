import express from 'express'
import { dbConnection } from "./database/dbConnection.js";
import homeRouter from './src/modules/home/home.routes.js';
import messageRouter from './src/modules/message/message.routes.js';
import loginRouter from './src/modules/login/login.routes.js';
import registerRouter from './src/modules/register/register.routes.js';
import userRouter from './src/modules/user/user.routes.js';
import session from 'express-session'
import mongoSession from 'connect-mongodb-session'
import cors from 'cors'
import path from 'path';
let MongoDBStore = mongoSession(session)



var store = new MongoDBStore({
    uri: 'mongodb://127.0.0.1:27017/mvc_sarahaApp',
    collection: 'mySessions'
});

const app = express()
const port = process.env.PORT || 3980
app.use(express.json());
app.set('views', path.resolve() + "/views")
app.use(express.urlencoded({ extended: true })); /*3shan el undefined bta3t el data ely f el req.body */
app.use(express.static(path.join(path.resolve(), "public"))); /*3shan el files ely f el /public zy el js w el css */

app.use(session({
    secret: 'keyboardOn',
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        maxAge: 7200000
    }
}))

app.use(cors())
app.use(homeRouter)
app.use(loginRouter)
app.use(registerRouter)
app.use(messageRouter)
app.use(userRouter)
app.use('*', (req, res) => {
    res.render("error.ejs", { session: null })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))