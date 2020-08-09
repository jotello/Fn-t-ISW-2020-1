import { api } from '../helpers';

const basePath = 'paciente';

function getAll() {
    return api.get(`${basePath}`);
}

function show(pacienteId) {
    return api.get(`${basePath}/?id=${pacienteId}`)
}

function create(data) {
    return api.post(`${basePath}`, data);
}
function remove(id) {
    return api.delete(`${basePath}/${id}`);
}

const pacienteService = {
    getAll,
    show,
    create,
    remove,
};

export default pacienteService;