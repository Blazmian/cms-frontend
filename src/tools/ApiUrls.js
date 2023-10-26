import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({
    //Events
    getOneEvent: host + 'event/one/',
    getUpcomingEvents: host + 'event/upcoming-events',
    createEvent: host + 'event/create-event/',

    //Attendance
    getInteressedPersonByEvent: host + 'attendance-event/interessed-person-by-event/',

    //Partners
    createPartner: host + 'partner',
    getAllPartners: host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartner: host + 'partner/delete/',
    editPartner: host + 'partner/update/',
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',

    //Sponsors
    createSponsor: host + 'sponsor',

})