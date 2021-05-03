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
@Table(name = "usuario_pago")
@Data
public class UsuarioPago {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_usuario_pago;

    @Column(name = "tipo_pago")
    private String tipo_pago;

    @Column(name = "proveedor")
    private String proveedor;

    @Column(name = "nro_cuenta")
    private Integer nro_cuenta;

    @Column(name = "expiracion")
    private Date expiracion;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false)
    private Usuario usuario;
}
