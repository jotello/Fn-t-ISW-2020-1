import { api } from '../helpers';

const basePath = 'paciente';

function getAll() {
    return api.get(`${basePath}`);
}

function show(pacienteId) {
    console.log(pacienteId);
    return api.get(`${basePath}/${pacienteId}`)
}

function create(data) {
    return api.post(`${basePath}`, data);
}
function remove(id) {
    return api.delete(`${basePath}/${id}`);
}

const reservaService = {
    getAll,
    show,
    create,
    remove,
};

export default reservaService;