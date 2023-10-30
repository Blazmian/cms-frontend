import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({
    //Events
    getUpcomingEvents: host + 'event/upcoming-events',

    //Assitants
    createAssitant: host + 'assistant',
    getAllAssistant : host + 'assistant/all',
    getOneAssitant: host + 'assistant/one/',

    //Partners
    createPartner: host + 'partner',
    getAllPartner : host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartners: host + 'partner/delete/',
    editPartner: host + 'partner/update/',
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',
})