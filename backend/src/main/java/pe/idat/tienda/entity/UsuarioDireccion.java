package pe.idat.tienda.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

import lombok.Data;

@Entity
@Table(name = "usuario_direccion")
@Data
public class UsuarioDireccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario_direccion")
    private Long id_usuario_direccion;

    @Column(name = "direccion_linea_1")
    private String direccion_linea_1;

    @Column(name = "direccion_linea_2")
    private String direccion_linea_2;

    @Column(name = "ciudad")
    private String ciudad;

    @Column(name = "codigo_postal")
    private String codigo_postal;

    @Column(name = "pais")
    private String pais;

    @Column(name = "telefono")
    private Date telefono;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;

}