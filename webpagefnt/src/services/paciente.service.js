import { api } from '../helpers';

const basePath = 'v1/paciente';

function getAll() {
    return api.get(`${basePath}/pacientes`);
}

function show(pacienteId) {
    return api.get(`${basePath}/?id=${pacienteId}`)
}

function create(data) {
    return api.post(`${basePath}/`, data);
}

const pacienteService = {
    getAll,
    show,
    create,
};

export default pacienteService;