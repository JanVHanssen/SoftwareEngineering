package be.ucll.se.janvhanssenbackend.controller;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import be.ucll.se.janvhanssenbackend.service.GreetingService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod; // Deze import toevoegen

@RestController
@RequestMapping("/hello")
public class GreetingController {

    private final GreetingService service;

    public GreetingController(GreetingService service) {
        this.service = service;
    }

    @GetMapping
    public Greeting getGreeting() {
        return service.getGreetingById(1L);
    }
}