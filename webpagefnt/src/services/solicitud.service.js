import { api } from '../helpers';

const basePath = 'solicitud';

function getAll() {
    return api.get(`${basePath}`);
}

function getPendientes() {
    return api.get(`${basePath}/pendientes`);
}

function show(solicitudId) {
    console.log(solicitudId);
    return api.get(`${basePath}/${solicitudId}`)
}

function create(data) {
    return api.post(`${basePath}`, data);
}
function remove(id) {
    return api.delete(`${basePath}/${id}`);
}

const solicitudService = {
    getAll,
    getPendientes,
    show,
    create,
    remove,
};

export default solicitudService;