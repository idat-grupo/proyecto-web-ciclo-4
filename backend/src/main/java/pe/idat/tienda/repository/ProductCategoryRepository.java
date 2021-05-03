package pe.idat.tienda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.idat.tienda.entity.ProductoCategoria;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductoCategoria, Long> {

}
