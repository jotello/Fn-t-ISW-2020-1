package Fnt.SolRec.Model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Horario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String horario;
    private int reservas = 0;
    private ArrayList<Long> paciente = new ArrayList<Long>();
    private ArrayList<Integer> idEquipo = new ArrayList<Integer>();
    private ArrayList<Integer> idEquipamiento = new ArrayList<Integer>();
    private ArrayList<Integer> sillon = new ArrayList<Integer>();
    private ArrayList<Integer> salaRecuperacion = new ArrayList<Integer>();
    private ArrayList<Integer> pabellon = new ArrayList<Integer>();

    public String getHorario() {
        return horario;
    }

    public ArrayList<Integer> getPabellon() {
        return pabellon;
    }

    public void setPabellon(ArrayList<Integer> pabellon) {
        this.pabellon = pabellon;
    }

    public void addPabellon(Integer pabellon) {
        if(pabellon != null){
            this.pabellon.add(pabellon);
        }
    }

    public void remPabellon(Integer pabellon) {
        if(pabellon != null){
            this.pabellon.remove((Integer) pabellon);
        }
    }

    public ArrayList<Integer> getSalaRecuperacion() {
        return salaRecuperacion;
    }

    public void setSalaRecuperacion(ArrayList<Integer> salaRecuperacion) {
        this.salaRecuperacion = salaRecuperacion;
    }

    public void addSalaRecuperacion(Integer salaRecuperacion) {
        if(salaRecuperacion != null){
            this.salaRecuperacion.add(salaRecuperacion);
        }
    }

    public void remSalaRecuperacion(Integer salaRecuperacion) {
        if(salaRecuperacion != null){
            this.salaRecuperacion.remove((Integer) salaRecuperacion);
        }
    }

    public ArrayList<Integer> getSillon() {
        return sillon;
    }

    public void setSillon(ArrayList<Integer> sillon) {
        this.sillon = sillon;
    }

    public void addSillon(Integer sillon) {
        if(sillon != null){
            this.sillon.add(sillon);
        }
    }

    public void remSillon(Integer sillon) {
        if(sillon != null){
            this.sillon.remove((Integer) sillon);
        }
    }    

    public ArrayList<Integer> getIdEquipamiento() {
        return idEquipamiento;
    }

    public void setIdEquipamiento(ArrayList<Integer> idEquipamiento) {
        this.idEquipamiento = idEquipamiento;
    }

    public void addIdEquipamiento(List<Integer> idEquipamiento) {
        if(idEquipamiento != null){
            this.idEquipamiento.addAll(idEquipamiento);
        }
    }

    public void remIdEquipamiento(List<Integer> idEquipamiento) {
        if(idEquipamiento != null){
            this.idEquipamiento.removeAll(idEquipamiento);
        }
    } 

    public ArrayList<Integer> getIdEquipo() {
        return idEquipo;
    }

    public void setIdEquipo(ArrayList<Integer> idEquipo) {
        this.idEquipo = idEquipo;
    }

    public void addIdEquipo(Integer idEquipo) {
        if(idEquipo != null){
            this.idEquipo.add(idEquipo);
        }
    }

    public void remIdEquipo(Integer idEquipo) {
        if(idEquipo != null){
            this.idEquipo.remove((Integer) idEquipo);
        }
    }

    public ArrayList<Long> getPaciente() {
        return paciente;
    }

    public void setPaciente(ArrayList<Long> paciente) {
        this.paciente = paciente;
    }

    public void addPaciente(Long paciente) {
        if(paciente != null){
            this.paciente.add(paciente);
        }
    }

    public void remPaciente(Long paciente) {
        if(paciente != null){
            this.paciente.remove((Long) paciente);
        }
    }

    public int getReservas() {
        return reservas;
    }

    public void setReservas(int reservas) {
        this.reservas = reservas;
    }

    public void masUno(){
        this.reservas+=1;
    }

    public void menosUno(){
        this.reservas-=1;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

}