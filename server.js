import express, { urlencoded } from 'express'
import mongoose from 'mongoose';
import { shortUrl, getOriginalUrl} from './Controllers/url.js'


const app = express();
app.use(express.urlencoded({extended: true}));


mongoose.connect(
    "mongodb+srv://prateeksingh6125:prateek12345@cluster0.p3zs3.mongodb.net/", 
    { 
        dbName: "NodeJS_Mastery_Course"
    } 
).then(() => console.log("MongoDB Connected...!"))
.catch((error) => console.log(error));

// rendering the ejs file
app.get('/', (req, res)=> {
    res.render("index.ejs", {shortUrl: null})
})

//shorting url
app.post('/short', shortUrl)

// dynamic routing || redirect to original url 
app.get('/:shortCode', getOriginalUrl)

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})