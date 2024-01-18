import express from "express";
import ControllerJamaah from "../controller/contoler.jamaah.js";
import cors from "cors"
import upload from "../middleware/upload.js";
import auth from "../middleware/auth/auth.js";

const routerJamaah = express.Router();
routerJamaah.use(cors({
    origin: '*',
  }));
//ambil seluruh data Jamaah (wajib Login)
routerJamaah.get("/",auth,async(req,res)=>{
    ControllerJamaah.readAllJamaah(req,res);
})

//ambil seluruh data Jamaah by ID (wajib Login)
routerJamaah.get("/:id",auth,async(req,res)=>{
    ControllerJamaah.readJamaahById(req,res);
})

routerJamaah.post("/",upload.single('foto'),async(req,res)=>{
    ControllerJamaah.createJamaah(req,res);
})

//edit data Jamaah by id (wajib Login)
routerJamaah.put("/:id",auth,upload.single('foto'),async(req,res)=>{
    ControllerJamaah.updateJamaah(req,res);
})

//hapus data Jamaah (requre Login)
routerJamaah.delete("/:id",upload.none(),auth,async(req,res)=>{
    ControllerJamaah.deleteJamaah(req,res);
})

export default routerJamaah;