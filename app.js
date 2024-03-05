const express = require("express");
 require("./connection");
const SongsApi = require("./models/songs");
const router = require("./routers/server")

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post("/song",async (req,res)=>{
    try{
      const addingSongsApiRecords = new SongsApi(req.body)
      console.log(req.body);
        const insertSongs = await addingSongsApiRecords.save();
        res.status(201).send(insertSongs);
    }catch(e){
        res.status(400).send(e);
    }
})


app.get("/song",async (req,res)=>{
    try{
      const getsongs = await SongsApi.find({});
        res.send(getsongs);
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
