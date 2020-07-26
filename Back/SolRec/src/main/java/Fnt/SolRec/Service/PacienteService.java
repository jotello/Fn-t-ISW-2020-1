package Fnt.SolRec.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Fnt.SolRec.Model.Paciente;
import Fnt.SolRec.Reposoitory.PacienteRepository;

@Service
public class PacienteService{

	@Autowired
	private PacienteRepository pacienteRepository;

	public Paciente saveOrUpdatePaciente(Paciente paciente){
        return pacienteRepository.save(paciente);
    }
    public Iterable<Paciente> listAll() {
        return pacienteRepository.findAll();
    }

    public Optional<Paciente> getbyId(Long id){
        return pacienteRepository.findById(id);
    }
	public void delete(Long id) {
		pacienteRepository.deleteById(id);
	}
}
