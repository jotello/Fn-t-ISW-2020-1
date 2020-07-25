package Fnt.SolRec.Reposoitory;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Fnt.SolRec.Model.Paciente;

@Repository
public interface PacienteRepository extends CrudRepository<Paciente,Long>{
	
}
