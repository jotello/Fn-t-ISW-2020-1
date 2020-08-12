import { api } from '../helpers';

const basePath = 'equipamiento';
const apii = api["equipamientos"]

function getAll() {
    return apii.get(`${basePath}/`);
}

const equipamientoService = {
    getAll,
};

export default equipamientoService;