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

    public List<Integer> getPabellon() {
        return pabellon;
    }

    public void setPabellon(ArrayList<Integer> pabellon) {
        this.pabellon = pabellon;
    }

    public void addPabellon(Integer pabellon) {
        this.pabellon.add(pabellon);
    }

    public void remPabellon(Integer pabellon) {
        this.pabellon.remove((Integer) pabellon);
    }

    public List<Integer> getSalaRecuperacion() {
        return salaRecuperacion;
    }

    public void setSalaRecuperacion(ArrayList<Integer> salaRecuperacion) {
        this.salaRecuperacion = salaRecuperacion;
    }

    public void addSalaRecuperacion(Integer salaRecuperacion) {
        this.salaRecuperacion.add(salaRecuperacion);
    }

    public void remSalaRecuperacion(Integer salaRecuperacion) {
        this.salaRecuperacion.remove((Integer) salaRecuperacion);
    }

    public List<Integer> getSillon() {
        return sillon;
    }

    public void setSillon(ArrayList<Integer> sillon) {
        this.sillon = sillon;
    }

    public void addSillon(Integer sillon) {
        this.sillon.add(sillon);
    }

    public void remSillon(Integer sillon) {
        this.sillon.remove((Integer) sillon);
    }    

    public List<Integer> getIdEquipamiento() {
        return idEquipamiento;
    }

    public void setIdEquipamiento(ArrayList<Integer> idEquipamiento) {
        this.idEquipamiento = idEquipamiento;
    }

    public void addIdEquipamiento(List<Integer> idEquipamiento) {
        this.idEquipamiento.addAll(idEquipamiento);
    }

    public void remIdEquipamiento(List<Integer> idEquipamiento) {
        this.idEquipamiento.removeAll(idEquipamiento);
    } 

    public List<Integer> getIdEquipo() {
        return idEquipo;
    }

    public void setIdEquipo(ArrayList<Integer> idEquipo) {
        this.idEquipo = idEquipo;
    }

    public void addIdEquipo(Integer idEquipo) {
        this.idEquipo.add(idEquipo);
    }

    public void remIdEquipo(Integer idEquipo) {
        this.idEquipo.remove((Integer) idEquipo);
    }

    public List<Long> getPaciente() {
        return paciente;
    }

    public void setPaciente(ArrayList<Long> paciente) {
        this.paciente = paciente;
    }

    public void addPaciente(Long paciente) {
        this.paciente.add(paciente);
    }

    public void remPaciente(Long paciente) {
        this.paciente.remove((Long) paciente);
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