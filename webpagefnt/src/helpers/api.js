import axios from 'axios';

const endpoints = {
    development: 'https://iso-solrec.herokuapp.com',
    equipos: 'https://chopinhauer.herokuapp.com',
    equipamientos: 'https://equipment-service.herokuapp.com',
    sillones: 'https://opelcorsa-bd.herokuapp.com',
    PabSal: 'https://inventory-is-full-back.herokuapp.com'
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
}),
sillones: axios.create({
    baseURL: endpoints['sillones'],
    timeout: 20000,
}),
PabSal: axios.create({
    baseURL: endpoints['PabSal'],
    timeout: 20000,
})}