import express from "express";
import livrosRouter from "./livrosRoutes.js";
import autoresRouter from "./autoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Estudo de node"})
    })

    app.use(
        express.json(),
        livrosRouter,
        autoresRouter
    )
}

export default routes
