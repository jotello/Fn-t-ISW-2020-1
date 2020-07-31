package Fnt.SolRec.Service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;


import Fnt.SolRec.Model.Solicitud;
import Fnt.SolRec.Reposoitory.SolicitudRepository;

@Service
public class SolicitudService {
    
    @Autowired
    private SolicitudRepository solicitudRepository;
    
    public Solicitud saveOrUpdateSolicitud(Solicitud solicitud){
        return solicitudRepository.save(solicitud);
    }
    public Iterable<Solicitud> listAll() {
        return solicitudRepository.findAll();
    }

    public Iterable<Solicitud> listAllSol() {
        return solicitudRepository.findByEstado("Solicitado");
    }

    public Iterable<Solicitud> listAllRes() {
        return solicitudRepository.findByEstado("Reservado");
    }

    public Optional<Solicitud> getbyId(Long id){
        return solicitudRepository.findById(id);
    }

    public Iterable<Solicitud> getSolicitudByEstado(List<String> estado) {
        return solicitudRepository.findByEstadoIn(estado);
    }
	public void delete(Long id) {
		solicitudRepository.deleteById(id);
	}
}
    
