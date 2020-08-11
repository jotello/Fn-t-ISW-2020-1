import { api } from '../helpers';

const basePath = 'paciente';

function getAll() {
    return api.get(`${basePath}`);
}

function show(pacienteId) {
    return api.get(`${basePath}/${pacienteId}`)
}

function create(data) {
    return api.post(`${basePath}`, data);
}
function update(data) {
    console.log(data);
    return api.put(`${basePath}/${data.id}`, data);
}
function remove(id) {
    return api.delete(`${basePath}/${id}`);
}

const pacienteService = {
    getAll,
    show,
    create,
    update,
    remove,
};

export default pacienteService;