import dailies from "./dailies"

const API_URL = "/API"

const routes = app => {
    app.use(`${API_URL}/dailies`, dailies)

    app.use("*", (req, res) => {
        res.status(404).json({
            error: "Route not found."
        })
    })
}

export default routes