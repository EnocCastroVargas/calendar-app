import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';


const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños del jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Enoc'
    }
};


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
            tempEvent
        ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: (state, { payload } ) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: (state, { payload }) => {
            state.events.push( payload );
            state.activeEvent = null; //se limpia el evento activo
        },
        onUpdateEvent: (state, { payload }) => {
            state.events = state.events.map( event => {
                if ( event._id === payload._id ){
                    return payload;
                }
                                
                return event;
            });
        },
        onDeleteEvent: (state) => {
            if ( state.activeEvent ) {
                //* Se regresa todos los eventos cuyo id sea diferente al de la nota activa
                //* Entonces físicamente se elimina del arreglo
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );
                state.activeEvent = null;
            };
        },
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;