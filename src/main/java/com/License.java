package com;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class License {

	private @Id @GeneratedValue Long id;
	private String name;
	private String expiresAt;
	private String queriedAt;

	private License() {}

	public License(String name, String expiresAt, String queriedAt) {
        // Dates managed as Str for now (No Java Dates experience)
        
		this.name = name;
		this.expiresAt = expiresAt;
		this.queriedAt = queriedAt;
	}

	@Override
	public boolean equals(Object o) {
        if (this == o) return true;
        
        if (o == null || getClass() != o.getClass()) return false;
        
		License license = (License) o;
		return Objects.equals(id, license.id) &&
			Objects.equals(name, license.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, name, expiresAt, queriedAt);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getname() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}

	public String getexpiresAt() {
		return expiresAt;
	}

	public void setexpiresAt(String expiresAt) {
		this.expiresAt = expiresAt;
	}

	public String getqueriedAt() {
		return queriedAt;
	}

	public void setqueriedAt(String queriedAt) {
		this.queriedAt = queriedAt;
	}

	@Override
	public String toString() {
		return "com.example.demo.License{" +
				"id=" + id +
				", name='" + name + '\'' +
				", expiresAt='" + expiresAt + '\'' +
				", queriedAt='" + queriedAt + '\'' +
				'}';
	}
}