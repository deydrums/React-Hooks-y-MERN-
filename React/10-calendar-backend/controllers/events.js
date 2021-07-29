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
            ok: true,
            msg: 'Ha ocurrido un error, intenta de nuevo'
        });
    }


};

const updateEvent = async(req,res = response)=>{
    res.json({
        ok: true,
        msg: 'updateEvent'
    })
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