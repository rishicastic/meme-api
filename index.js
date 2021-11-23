const express = require ("express");
const cors = require ("cors");

const app = express ();
const port ="5000";

const userRouter = require('./routers/userRouter');
app.use(express.json());
app.use(cors({origin: ['http://localhost:3000']}));
app.use("/user",userRouter);

app.listen ( port, () => {
    console.log(" server started on port 5000");
});