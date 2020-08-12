import { api } from '../helpers';

const basePath = 'solicitud';
const apii = api["development"];
function getAll() {
    return apii.get(`${basePath}`);
}

function getPendientes() {
    return apii.get(`${basePath}/pendientes`);
}

function show(solicitudId) {
    console.log(solicitudId);
    return apii.get(`${basePath}/${solicitudId}`)
}

function create(data) {
    return apii.post(`${basePath}`, data);
}
function remove(id) {
    return apii.delete(`${basePath}/${id}`);
}

const solicitudService = {
    getAll,
    getPendientes,
    show,
    create,
    remove,
};

export default solicitudService;