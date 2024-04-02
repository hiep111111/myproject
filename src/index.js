import express from "express";
import configViewEngine from "./viewEngine";
import initWebRoutes from "./routes/web";
require ("dotenv").config()

const app = express();

configViewEngine(app);
initWebRoutes(app);

const PORT = process.env.PORT ;

app.listen(PORT, () => {
    console.log("runnnniig on PORT:"+ PORT);
})




