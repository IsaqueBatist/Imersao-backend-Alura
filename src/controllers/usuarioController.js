import { getTodosUsuarios } from "../models/usuarioModel.js"

export async function listarUsuarios(req,res){
  const resultado = await getTodosUsuarios()
  res.status(200).json(resultado)
}
