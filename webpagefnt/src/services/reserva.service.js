import { api } from '../helpers';

const basePath = 'paciente';
const apii = api["development"];
function getAll() {
    return apii.get(`${basePath}`);
}

function show(pacienteId) {
    console.log(pacienteId);
    return apii.get(`${basePath}/${pacienteId}`)
}

function create(data) {
    return apii.post(`${basePath}`, data);
}
function remove(id) {
    return apii.delete(`${basePath}/${id}`);
}

const reservaService = {
    getAll,
    show,
    create,
    remove,
};

export default reservaService;