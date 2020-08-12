import axios from 'axios';

const endpoints = {
    development: 'https://iso-solrec.herokuapp.com',
    equipos: 'https://chopinhauer.herokuapp.com',
    equipamientos: 'https://equipment-service.herokuapp.com',
};

export const api = {development: axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
}),
equipos: axios.create({
    baseURL: endpoints['equipos'],
    timeout: 20000,
}),
equipamientos: axios.create({
    baseURL: endpoints['equipamientos'],
    timeout: 20000,
})}