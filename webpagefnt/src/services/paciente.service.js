import { api } from '../helpers';

const basePath = 'paciente';
const apii = api["development"];
function getAll() {
    return apii.get(`${basePath}`);
}

function show(pacienteId) {
    return apii.get(`${basePath}/${pacienteId}`)
}

function create(data) {
    return apii.post(`${basePath}`, data);
}
function update(data) {
    console.log(data);
    return apii.put(`${basePath}/${data.id}`, data);
}
function remove(id) {
    return apii.delete(`${basePath}/${id}`);
}

const pacienteService = {
    getAll,
    show,
    create,
    update,
    remove,
};

export default pacienteService;