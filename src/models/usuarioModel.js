import conectarAoBanco from "../config/dbConfig.js"

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosUsuarios(){
  const db = conexao.db("Imersao-instabytes")
  const colecao = db.collection("usuarios")
  return colecao.find().toArray()
}