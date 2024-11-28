import express from 'express';
import { listarUsuarios } from '../controllers/usuarioController.js';

const routes = (app) => {
  app.use(express.json());

  app.get("/usuarios", listarUsuarios)
}

export default routes;


