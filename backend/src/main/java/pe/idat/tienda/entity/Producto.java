package pe.idat.tienda.entity;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "producto")
@Data
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "producto_id")
	private Long producto_id;

	@ManyToOne
	@JoinColumn(name = "id_categoria", nullable = false)
	private ProductoCategoria categoria;

	@Column(name = "SKU", nullable = false)
	private String SKU;

	@Column(name = "nombre_producto", nullable = false)
	private String nombre_prod;

	@Column(name = "descripcion")
	private String descripcion;

	@Column(name = "precio_unidad")
	private BigDecimal precio_unidad;

	@Column(name = "imagen_url")
	private String imageUrl;

	@Column(name = "active")
	private boolean active;

	@Column(name = "units_in_stock")
	private Integer unitsInStock;

	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;

	@Column(name = "ultima_modificacion")
	@UpdateTimestamp
	private Date ultimaModificacion;

	@Column(name = "fecha_eliminacion")
	private Date fechaEliminacion;

	// @Column(name = "descuento")
	// private String descuento;

	// @ManyToOne
	// @JoinColumn(name = "categoria_id",nullable=false)
	// private ProductoCategoria categoriaId;

	// @OneToOne(cascade = CascadeType.ALL)
	// @JoinColumn(name = "inventario_id")
	// private ProductoInventario productoInventario;

	// @Column(name = "fecha_creacion")
	// @CreationTimestamp
	// private Date fechaCreacion;

	// @Column(name = "fecha_modificacion")
	// @UpdateTimestamp
	// private Date fechaModificacion;

	// @Column(name = "fecha_eliminacion")
	// @CreationTimestamp
	// private Date fechaEliminacion;

	// @OneToOne(mappedBy = "producto", cascade = CascadeType.ALL)
	// private OrdenItem ordenItem;

}
