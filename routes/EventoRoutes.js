const express = require('express');
const router = express.Router();
const EventController = require('../controllers/EventoController');


router.get('/', (req, res) => EventController.obtenerEventos(req, res));


router.post('/', (req, res) => EventController.crearEvento(req, res));


router.put('/:id', (req, res) => EventController.actualizarEvento(req, res));


router.delete('/:id', (req, res) => EventController.eliminarEvento(req, res));


router.post('/:eventId/inscribir', (req, res) => EventController.inscribirUsuario(req, res));


router.delete('/:eventId/cancelar-inscripcion', (req, res) => EventController.cancelarInscripcion(req, res));


router.get('/:eventId/inscritos', (req, res) => EventController.obtenerInscritos(req, res));

module.exports = router;
