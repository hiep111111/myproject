import express from "express";
import homeController from "../controllers/homeController.js"

const router = express.Router();

/**
 * 
 * @param {*} app :  express app
 */

const initWebRoutes = (app) => {
    router.get("/",homeController.handleHelloworld ),
    router.get("/user",homeController.handleUserPage ),
    router.get("/about", (req,res) => {
        return res.send("about");
    })
    return app.use("/", router)
}

export default initWebRoutes;