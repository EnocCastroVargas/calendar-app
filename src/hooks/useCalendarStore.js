import { useSelector, useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { convertEventsToDateEvents } from '../helpers';
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

    const startLoadingEvents = async() => {
        try {

            const { data } = await calendarApi.get('events');
            const events = convertEventsToDateEvents( data.eventos );
            console.log(events);

        } catch (error) {
            console.log('Erro cargando eventos');
            console.log(error);
        }
    }

    return {
        //* Propiedades
        activeEvent,
        events,
        hasEventSelected: !!activeEvent, //* si es null -> regresa un false || si tiene un objeto -> regresa true

        //* Métodos
        setActiveEvent,
        startDeletingEvent,
        startLoadingEvents,
        startSavingEvent,

    };
};
