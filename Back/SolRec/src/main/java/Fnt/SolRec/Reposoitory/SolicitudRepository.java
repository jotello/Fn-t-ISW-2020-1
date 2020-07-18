package Fnt.SolRec.Reposoitory;

import Fnt.SolRec.Model.Solicitud;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SolicitudRepository extends CrudRepository<Solicitud, Long> {
    
}