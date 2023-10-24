import { createContext } from "react";

const host = 'http://localhost:8000/'

export const ApiUrls = createContext({
    createEvent: host + 'event/create-event/',
    addRegister: host + 'interessed-person/register-event/',

    //Events
    getUpcomingEvents: host + 'event/upcoming-events',

    //Providers
    getAllProviders: host + 'provider/all',
    createProvider: host + 'provider',
    getOneProvider: host + 'provider/one/',

    //Partners
    createPartner: host + 'partner',
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',
    getAllPartners: host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartner: host + 'partner/delete/',
    editPartner: host + 'partner/update/'

})