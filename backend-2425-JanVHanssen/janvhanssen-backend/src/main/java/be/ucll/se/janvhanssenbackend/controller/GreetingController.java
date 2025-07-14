package be.ucll.se.janvhanssenbackend.controller;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import be.ucll.se.janvhanssenbackend.service.GreetingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello")
@CrossOrigin(origins = "https://frontend-2425-janvhanssen.vercel.app", methods = { RequestMethod.GET,
        RequestMethod.OPTIONS }, // Voeg OPTIONS toe voor preflight
        allowedHeaders = "*", maxAge = 3600)
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