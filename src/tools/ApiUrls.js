import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({
    //Events
    getOneEvent: host + 'event/one/',
    getUpcomingEvents: host + 'event/upcoming-events',
    createEvent: host + 'event/create-event/' ,

    //Partners
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',
})