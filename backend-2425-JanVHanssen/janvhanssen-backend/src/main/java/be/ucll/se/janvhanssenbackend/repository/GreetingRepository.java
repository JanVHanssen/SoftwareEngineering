package be.ucll.se.janvhanssenbackend.repository;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GreetingRepository extends JpaRepository<Greeting, Long> {
}
