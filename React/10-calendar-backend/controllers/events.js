const {response} = require('express');
const Event = require('../models/Event')

const getEvents = async(req,res = response)=>{
    const events = await Event.find().populate('user','name');
    res.json({
        ok: true,
        msg: 'Eventos',
        events
    })
};

const createEvent = async(req,res = response)=>{
    const event = new Event(req.body);

    try {

        event.user = req.uid;
        const eventDB = await event.save();

        res.json({
            ok: true,
            msg: 'Evento guardado exitosamente',
            eventDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error, intenta de nuevo'
        });
    }


};

const updateEvent = async(req,res = response)=>{
    const eventId = req.params.id;
    const uid = req.uid;

    try {
        const event = await Event.findById(eventId);
        if(!event) {
            res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
            return false;
        }


        if(event.user.toString() !== uid){
            res.status(401).json({
                ok: false,
                msg: 'El evento no puede ser editado porque no te pertenece',
            });
            return false;
        }

        const updateEvent = {
            ...req.body,
            user: uid
        }

        const eventDB = await Event.findByIdAndUpdate(eventId, updateEvent, {new:true});

        res.json({
            ok: true,
            msg: 'Evento actualizado con exito', 
            evento: eventDB
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error, intenta de nuevo'
        });
    }

};

const deleteEvent = async(req,res = response)=>{
    res.json({
        ok: true,
        msg: 'deleteEvent'
    })
};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};