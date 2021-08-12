package com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final LicenseRepository repository;

	@Autowired
	public DatabaseLoader(LicenseRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new License("Frodo", "Baggins", "ring bearer"));
		this.repository.save(new License("Bilbo", "Baggins", "burglar"));
		this.repository.save(new License("Gandalf", "the Grey", "wizard"));
		this.repository.save(new License("Samwise", "Gamgee", "gardener"));
	}
}