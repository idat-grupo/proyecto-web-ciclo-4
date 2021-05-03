package pe.idat.tienda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import pe.exceptions.ResourceNotFoundException;
//import pe.idat.tienda.entity.Producto;
import pe.idat.tienda.entity.ProductoCategoria;
import pe.idat.tienda.repository.ProductCategoryRepository;

@RestController
public class ProductCategoryController {
    private ProductCategoryRepository prodCatRepository;

    @Autowired // inyeccion de dependencias
    public ProductCategoryController(ProductCategoryRepository prodCatRepository) {
        this.prodCatRepository = prodCatRepository;
    }

    @PostMapping("/product_category/save")
    public ProductoCategoria saveProducto(@RequestBody ProductoCategoria prodCategoria) {
        return this.prodCatRepository.save(prodCategoria);
    }

    @GetMapping("/product_category/list")
    public ResponseEntity<List<ProductoCategoria>> getCategorias() {
        return ResponseEntity.ok(this.prodCatRepository.findAll());
    }

    @GetMapping("/product_category/{id}")
    public ResponseEntity<ProductoCategoria> getCategoria(@PathVariable(value = "id") Long id) {
        ProductoCategoria prodCategoria = this.prodCatRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found."));

        return ResponseEntity.ok().body(prodCategoria);
    }

    @PutMapping("/prod_category/{id}")
    public ProductoCategoria updateCategoria(@RequestBody ProductoCategoria nuevaCategoria, @PathVariable(value = "id") Long id){
        return this.prodCatRepository.findById(id)
                .map(cat -> {
                    cat.setNombre(nuevaCategoria.getNombre());
                    //cat.setProductos(nuevaCategoria.getProductos());
                    return this.prodCatRepository.save(cat);
                }).orElseGet(() -> {
                	nuevaCategoria.setIdCategoriaProducto(id);
                	return this.prodCatRepository.save(nuevaCategoria);
                });
    }
    
    //poner delete logico, no fisico
}
