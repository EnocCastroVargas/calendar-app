

export const events = [
    {
        id: '1',
        start: new Date('2022-10-21 13:00:00'),
        end: new Date('2022-10-21 15:00:00'),
        title: 'Cumpleaños de Enoc',
        notes: 'Alguna nota',
    },
    {
        id: '2',
        start: new Date('2022-12-23 13:00:00'),
        end: new Date('2022-12-23 15:00:00'),
        title: 'Cumpleaños de Alisson',
        notes: 'Alguna nota de Alisson',
    },

];

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
};

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
};
export const calendarWithActiveEventState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: { ...events[0] }
};

