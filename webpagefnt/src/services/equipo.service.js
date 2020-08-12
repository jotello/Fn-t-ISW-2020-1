import { api } from '../helpers';

const basePath = 'team';
const apii = api["equipos"]

function getAll() {
    return apii.get(`${basePath}/all`);
}

const equipoService = {
    getAll,
};

export default equipoService;