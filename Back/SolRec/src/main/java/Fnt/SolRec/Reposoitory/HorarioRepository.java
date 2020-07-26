package Fnt.SolRec.Reposoitory;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Fnt.SolRec.Model.Horario;

@Repository
public interface HorarioRepository extends CrudRepository<Horario, Long> {
    List<Horario> findByHorarioIn(List<String> horario);
}