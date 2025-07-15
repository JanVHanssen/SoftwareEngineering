package be.ucll.se.janvhanssenbackend.controller;

import be.ucll.se.janvhanssenbackend.model.Greeting;
import be.ucll.se.janvhanssenbackend.service.GreetingService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hello")
@CrossOrigin(origins = "*")
public class GreetingController {
    private final GreetingService service;

    public GreetingController(GreetingService service) {
        this.service = service;
    }

    @GetMapping
    public Greeting getGreeting() {
        System.out.println("HELLO endpoint aangeroepen");
        return service.getGreetingById(1L);
    }

    @PostMapping("/api/cronjob")
    public ResponseEntity<String> handleCronJob(@RequestHeader("Authorization") String authHeader) {
        if (!authHeader.equals("Bearer " + System.getenv("CRON_SECRET"))) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        return ResponseEntity.ok("Cron job executed successfully");
    }
}