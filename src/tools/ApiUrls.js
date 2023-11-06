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

    //Attendance
    getInteressedPersonByEvent: host + 'attendance-event/interessed-person-by-event/',

    //Providers
    getAllProviders: host + 'provider/all',
    createProvider: host + 'provider',
    getOneProvider: host + 'provider/one/',
    deleteProvider: host + 'provider/delete/',
    editProvider: host + 'provider/update/',

    //Products
    createProduct: host + 'provider_product',
    editProduct: host + 'provider_product/update',
    getProduct: host + 'provider_product/all',

    //Partners
    createPartner: host + 'partner',
    getAllPartners: host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartner: host + 'partner/delete/',
    editPartner: host + 'partner/update/',
    getPartnersBySocialReason: host + 'partner/partners-by-comercial-name/',
    getAllPartners: host + 'partner/all',
    getOnePartner: host + 'partner/one/',
    deletePartner: host + 'partner/delete/',
    editPartner: host + 'partner/update/'

})