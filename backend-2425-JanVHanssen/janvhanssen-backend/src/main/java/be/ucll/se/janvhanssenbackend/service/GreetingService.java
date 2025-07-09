package be.ucll.se.janvhanssenbackend.service;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import be.ucll.se.janvhanssenbackend.repository.GreetingRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GreetingService {

    private final GreetingRepository repository;

    public GreetingService(GreetingRepository repository) {
        this.repository = repository;
    }

    public Greeting getGreetingById(long id) {
        Optional<Greeting> greeting = repository.findById(id);
        return greeting.orElse(null);
    }
}
