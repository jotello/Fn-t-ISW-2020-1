import { api } from '../helpers';

const basePathS = 'api/recuperacion';
const basePathP = 'api/pabellon';
const apii = api["PabSal"]

function getAllSalas() {
    return apii.get(`${basePathS}/`);
}

function getAllPabellones() {
    return apii.get(`${basePathP}/`);
}

const pabsalService = {
    getAllSalas,
    getAllPabellones
};

export default pabsalService;