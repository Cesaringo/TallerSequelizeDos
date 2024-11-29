let Event = require('../models/EventoModels');

class EventoService{
    async obtenerEventos(){
        try {
            return await Event.findAll();
        } catch (error) {
            console.error('Error al obtener los eventos: ', error);
            console.log("error");
        }
    }
    async crearEvento(data){
        try {
            return await Event.create(data)
        } catch (error) {
            console.error('Error al crear libro:', error);
            throw new Error("Error al crear evento")
        }
    }

    async actualizarEvento(id, data){
        try {
            let evento = await Event.findByPk(id);
            if (evento){
                return await Event.update(data);
            } else {
                throw new Error('evento no encontrado');
            }
        } catch (error) {
            console.error('Error al actualizar evento ', error);
            throw new Error("Error al actualizar el evento: ", error)
        }
    }

    async eliminarEvento(id){
        try {
            let evento = await Event.findByPk(id);
            if(evento){
                await evento.destroy();
                return { mensaje: 'Evento eliminado correctamente'};
            } else {
                throw new Error ('Evento no encontrado');
            }
        } catch (error) {
            console.error('Error al eliminar el evento: ', error)
            throw new Error('Error al eliminar evento: ', error);
        }
    }

    async inscribirUsuario(eventId) {
        const event = await Event.findByPk(eventId);
        if (event && event.inscritos < event.capacidadMaxima) {
          event.inscritos += 1;
          await event.save();
          return { mensaje: 'Usuario inscrito con éxito' };
        } else {
          throw new Error('Capacidad máxima alcanzada o evento no encontrado');
        }
      }
    
      async cancelarInscripcion(eventId) {
        const event = await Event.findByPk(eventId);
        if (event && event.inscritos > 0) {
          event.inscritos -= 1;
          await event.save();
          return { mensaje: 'Inscripción cancelada' };
        } else {
          throw new Error('Evento no encontrado o no hay inscritos');
        }
      }
      async inscribirUsuario(eventId) {
        try {
            const event = await Event.findByPk(eventId);
            if (event && event.inscritos < event.capacidadMaxima) {
                event.inscritos += 1;
                await event.save();
                return { mensaje: 'Usuario inscrito con éxito' };
            } else {
                throw new Error('Capacidad máxima alcanzada o evento no encontrado');
            }
        } catch (error) {
            console.error('Error al inscribir usuario: ', error);
            throw new Error("Error al inscribir usuario");
        }
    }
}

module.exports = new EventoService();