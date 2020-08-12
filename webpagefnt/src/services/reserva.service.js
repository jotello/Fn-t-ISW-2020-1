import { api } from '../helpers';

const basePath = 'reserva';
const apii = api["development"];
function getAll() {
    return apii.get(`${basePath}`);
}



function show(solicitudId) {
    console.log(solicitudId);
    return apii.get(`${basePath}/`)
}


function remove(id) {
    return apii.delete(`${basePath}/${id}`);
}
function finalizar(id){
    console.log(id);
    return apii.put(`${basePath}/${id}/finalizar`);
}

const reservaService = {
    getAll,
    show,
    finalizar,
    remove,
};

export default reservaService;