package ma.ensa.backend.repository;
import ma.ensa.backend.model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
