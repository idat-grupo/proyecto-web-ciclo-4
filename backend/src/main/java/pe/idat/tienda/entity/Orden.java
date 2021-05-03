package pe.idat.tienda.entity;

import java.math.BigDecimal;
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
import lombok.NoArgsConstructor;

@Entity
@Table(name = "orden")
@Data
@NoArgsConstructor
public class Orden {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_orden;

    @Column(name = "total")
    private BigDecimal total;

    @Column(name = "creado_en")
    private Date creado_en;

    @Column(name = "modificado_en")
    private Date modificado_en;

    @ManyToOne
    @JoinColumn(name = "id_usuario", nullable = false /*
                                                       * referencedColumnName = "id_usuario", foreignKey
                                                       * = @ForeignKey(name = "usuario_fk")
                                                       */)
    private Usuario usuario;
}
