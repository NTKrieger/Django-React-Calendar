const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:8080/events',
  timeout: 8000,
  headers: { 
    'Content-Type': 'application/json'
  },
});

/**
* getEvents() - retrieve the event list
* @return {Event[]}
*/
export const getEvents = () => {
  return instance
    .get()
    .then((response) => {
      console.log(response);
      console.info('getEvents: ', response.status)
      if (response.status === 200) {
        const eventArray = JSON.parse(response.data);
        return eventArray;
      }
    })
    .catch((error) => {
      console.error(error)
      return error;
    })
};
    
/**
* createEvent() - adds an event to the database.  
* @return {Event} returns the created event with the auto generated ID
*/
export const createEvent = (event) => {
  return instance
    .post(event)
    .then((response) => {
      console.log(response);
      console.info('createEvent: ', response.status);
      if (response.status === 201) {
        const eventWithId = JSON.parse(response.data);
        return eventWithId;
      }
    })
    .catch((error) => {
      console.error(error);
      return error;
    })
}

/**
* updateEvent() - edit an existing event.
* @return {Event} returns the updated event
*/
export function updateEvent(event){
  return instance
    .put(`/${event.id}`, event)
    .then((response) => {
      console.info('updateEvent: ', response.status)
      if (response.status === 200) {
        const eventArray = JSON.parse(response.data);
        return eventArray;
      }
    })
    .catch((error) => {
      console.error(error)
      return error;
    })
}

/**
* deleteEvents() - retrieve the event list
# @return {Event} return the event in case of an error so that it can be replaced in state
*/
export function deleteEvent(event) {
  return instance
    .delete(`/${event.id}`)
    .then((response) => {
      console.log(response);
      console.info('deleteEvent: ', response.status);
    })
    .catch((error) => {
      console.error(error);
      return event;
    })
}
