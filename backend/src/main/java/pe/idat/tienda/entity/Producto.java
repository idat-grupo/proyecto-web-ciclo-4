package pe.idat.tienda.entity;

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
	@Column(name="id")
	private Long id;
	
	@Column(name = "nombre_producto",nullable=false)
	private String nombre_prod;
	
	@Column(name = "descuento")
	private String descuento;
	
	@Column(name = "SKU",nullable=false)
	private String SKU;
	
	@ManyToOne
	@JoinColumn(name = "categoria_id",nullable=false)
	private ProductoCategoria categoriaId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "inventario_id")
	private ProductoInventario productoInventario;
	
	@Column(name = "precio")
	private double precio;
	
	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;
	
	@Column(name = "fecha_modificacion")
	@UpdateTimestamp
	private Date fechaModificacion;
	
	@Column(name = "fecha_eliminacion")
	@CreationTimestamp
	private Date fechaEliminacion;
	
	@OneToOne(mappedBy = "producto", cascade = CascadeType.ALL)
	private OrdenItem ordenItem;

	public Producto(Long id, String nombre_prod, String descuento, String sKU, 
			ProductoCategoria categoriaId, ProductoInventario productoInventario,
			double precio, Date fechaCreacion, Date fechaModificacion, 
			Date fechaEliminacion, OrdenItem ordenItem) {
		this.id = id;
		this.nombre_prod = nombre_prod;
		this.descuento = descuento;
		SKU = sKU;
		this.categoriaId = categoriaId;
		this.productoInventario = productoInventario;
		this.precio = precio;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
		this.fechaEliminacion = fechaEliminacion;
		this.ordenItem = ordenItem;
	}

	public Producto() {
	}
	
	
}
