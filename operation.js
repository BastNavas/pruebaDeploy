import { Router } from "express"
import {saludo} from "./saludo.js"

const router=Router()
router.get("/api/usuario",saludo)
export default router