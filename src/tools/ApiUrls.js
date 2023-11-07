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


    //Sponsors
    createSponsor: host + 'sponsor',
    getAllSponsors: host + 'sponsor/all',
    getOneSponsor: host + 'sponsor/one/',
    deleteSponsor: host + 'sponsor/delete/',
    editSponsor: host + 'sponsor/update/',

})