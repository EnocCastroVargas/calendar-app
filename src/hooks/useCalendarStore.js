import { useSelector, useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from '../store';


export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const { user } = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) );
    };

    const startSavingEvent = async( calendarEvent ) => {        
        // TODO: Update event
        if ( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({...calendarEvent}) );
        } else {
            // Creando
            const { data } = await calendarApi.post( 'events', calendarEvent );
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
        };

    };

    const startDeletingEvent = () => {
        // TODO: llegar al backend


        dispatch( onDeleteEvent() );
    };

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, //* si es null -> regresa un false || si tiene un objeto -> regresa true

        //* Métodos
        setActiveEvent,
        startDeletingEvent,
        startSavingEvent,

    };
};
