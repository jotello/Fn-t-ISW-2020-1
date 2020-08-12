import axios from 'axios';

const endpoints = {
    development: 'https://iso-solrec.herokuapp.com',
    equipos: 'https://chopinhauer.herokuapp.com',
};

export const api = {development: axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
}),
equipos: axios.create({
    baseURL: endpoints['equipos'],
    timeout: 20000,
})}