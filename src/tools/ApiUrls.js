import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({

    //Frontend Host
    getFrontendHost: 'http://localhost:3000/',

    //CanceledEvents
    cancelEvent: host + 'canceled-event/create',
    getCanceledEvents: host + 'canceled-event/all',

    //Events
    getOneEvent: host + 'event/one/',
    getUpcomingEvents: host + 'event/upcoming-events',
    createEvent: host + 'event/create-event/',
    updateEvent: host + 'event/update-event/',

    //Attendance
    getInteressedPersonByEvent: host + 'attendance-event/interessed-person-by-event/',

    //Assitants
    createAssitant: host + 'assistant',
    getAllAssistant : host + 'assistant/all',
    getOneAssitant: host + 'assistant/one/',

    //Detail Assistants
    getAssistantsFromEvent: host + 'detail-assistant/assistant-event/',

    //Partners
    createPartner: host + 'partner',
    getAllPartners: host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartner: host + 'partner/delete/',
    editPartner: host + 'partner/update/',
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',

    //Detail Sponsors
    getSponsorsFromEvent: host + 'detail-sponsor/sponsors-from-event/',
})