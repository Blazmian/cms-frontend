import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({
    //Events
    getUpcomingEvents: host + 'event/upcoming-events',

    //Partners
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',
})