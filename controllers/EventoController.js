const EventService = require('../services/EventoServices');

class EventController {
 
  async obtenerEventos(req, res) {
    try {
      const eventos = await EventService.obtenerEventos();
      res.json(eventos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener eventos' });
    }
  }

  
  async crearEvento(req, res) {
    try {
      const nuevoEvento = await EventService.crearEvento(req.body);
      res.json(nuevoEvento);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear evento' });
    }
  }

 
  async actualizarEvento(req, res) {
    try {
      const { id } = req.params;
      const eventoActualizado = await EventService.actualizarEvento(id, req.body);
      res.json(eventoActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar evento' });
    }
  }

 
  async eliminarEvento(req, res) {
    try {
      const { id } = req.params;
      const resultado = await EventService.eliminarEvento(id);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar evento' });
    }
  }


  async inscribirUsuario(req, res) {
    try {
      const { eventId } = req.params;
      const resultado = await EventService.inscribirUsuario(eventId);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Error al inscribir usuario' });
    }
  }

 
  async cancelarInscripcion(req, res) {
    try {
      const { eventId } = req.params;
      const resultado = await EventService.cancelarInscripcion(eventId);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Error al cancelar inscripción' });
    }
  }


  async obtenerInscritos(req, res) {
    const { eventId } = req.params;
    try {
      const inscritos = await EventService.obtenerInscritos(eventId);
      res.status(200).json({ inscritos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new EventController();
