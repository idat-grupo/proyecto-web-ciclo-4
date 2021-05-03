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

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "carrito_item")
@Data
public class CarritoItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "carrito_id",nullable=false)
	private Carrito carritoId;
	
	@Column(name = "producto_id")
	private long producto_id;
	
	@Column(name = "cantidad")
	private int cantidad;
	
	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;
	
	@Column(name = "fecha_modificacion")
	@UpdateTimestamp
	private Date fechaModificacion;
}
