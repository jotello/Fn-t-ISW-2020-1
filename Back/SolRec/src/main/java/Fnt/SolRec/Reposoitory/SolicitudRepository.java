package Fnt.SolRec.Reposoitory;

import Fnt.SolRec.Model.Solicitud;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitudRepository extends CrudRepository<Solicitud, Long> {
    Iterable<Solicitud> findByEstadoIn(List<String> estado);
    Iterable<Solicitud> findByEstado(String estado);
}