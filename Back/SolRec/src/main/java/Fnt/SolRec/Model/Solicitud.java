package Fnt.SolRec.Model;

import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Solicitud {
    @Id
    private int id;
    private int paciente;
    private int id_personal;
    private int id_equipamento;
    private String tipo_personal;
    private String tipo_equipamento;
    private int sillon;
    private int sala_rec;
    private int pabellon;
    private String descripcion;
    private String estado="Solicitado";
    private ArrayList<Integer> horarios;


    

    /**
     * @return int return the id
     */
    public int getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return int return the paciente
     */
    public int getPaciente() {
        return paciente;
    }

    /**
     * @param paciente the paciente to set
     */
    public void setPaciente(int paciente) {
        this.paciente = paciente;
    }

    /**
     * @return int return the id_personal
     */
    public int getId_personal() {
        return id_personal;
    }

    /**
     * @param id_personal the id_personal to set
     */
    public void setId_personal(int id_personal) {
        this.id_personal = id_personal;
    }

    /**
     * @return int return the id_equipamento
     */
    public int getId_equipamento() {
        return id_equipamento;
    }

    /**
     * @param id_equipamento the id_equipamento to set
     */
    public void setId_equipamento(int id_equipamento) {
        this.id_equipamento = id_equipamento;
    }

    /**
     * @return String return the tipo_personal
     */
    public String getTipo_personal() {
        return tipo_personal;
    }

    /**
     * @param tipo_personal the tipo_personal to set
     */
    public void setTipo_personal(String tipo_personal) {
        this.tipo_personal = tipo_personal;
    }

    /**
     * @return String return the tipo_equipamento
     */
    public String getTipo_equipamento() {
        return tipo_equipamento;
    }

    /**
     * @param tipo_equipamento the tipo_equipamento to set
     */
    public void setTipo_equipamento(String tipo_equipamento) {
        this.tipo_equipamento = tipo_equipamento;
    }

    /**
     * @return int return the sillon
     */
    public int getSillon() {
        return sillon;
    }

    /**
     * @param sillon the sillon to set
     */
    public void setSillon(int sillon) {
        this.sillon = sillon;
    }

    /**
     * @return int return the sala_rec
     */
    public int getSala_rec() {
        return sala_rec;
    }

    /**
     * @param sala_rec the sala_rec to set
     */
    public void setSala_rec(int sala_rec) {
        this.sala_rec = sala_rec;
    }

    /**
     * @return int return the pabellon
     */
    public int getPabellon() {
        return pabellon;
    }

    /**
     * @param pabellon the pabellon to set
     */
    public void setPabellon(int pabellon) {
        this.pabellon = pabellon;
    }

    /**
     * @return String return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return ArrayList<Integer> return the horarios
     */
    public ArrayList<Integer> getHorarios() {
        return horarios;
    }

    /**
     * @param horarios the horarios to set
     */
    public void setHorarios(ArrayList<Integer> horarios) {
        this.horarios = horarios;
    }


    /**
     * @return String return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

}