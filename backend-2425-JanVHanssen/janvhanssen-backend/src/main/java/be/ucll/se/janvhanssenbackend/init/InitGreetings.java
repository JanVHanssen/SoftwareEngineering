package be.ucll.se.janvhanssenbackend.init;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import be.ucll.se.janvhanssenbackend.repository.GreetingRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class InitGreetings {

    @Autowired
    private GreetingRepository greetingRepository;

    @PostConstruct
    public void insertGreeting() {
        if (greetingRepository.findById(1L).isEmpty()) {
            Greeting greeting = new Greeting("Hello World!");
            greeting.setId(1L);
            greetingRepository.save(greeting);
        }
    }
}
