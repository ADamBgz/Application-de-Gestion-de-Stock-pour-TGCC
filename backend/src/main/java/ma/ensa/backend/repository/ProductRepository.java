package ma.ensa.backend.repository;
import ma.ensa.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProductRepository extends JpaRepository<Product, Long> {

}
