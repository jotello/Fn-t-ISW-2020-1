import { api } from '../helpers';

const basePath = 'quimioterapia';
const apii = api["sillones"]

function getAll() {
    return apii.get(`${basePath}/`);
}

const sillonService = {
    getAll,
};

export default sillonService;