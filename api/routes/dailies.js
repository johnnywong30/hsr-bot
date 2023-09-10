import { Router } from "express"
import { HonkaiStarRail } from "hoyoapi"

const router = Router()



router.post("/", async (req, res) => {
    // req body needs to pass the cookie in
    const client = HonkaiStarRail(req.body)
    const daily = client.daily
    // daily.     

})

export default router