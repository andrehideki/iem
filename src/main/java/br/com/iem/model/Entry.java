package br.com.iem.model;

import java.time.LocalDate;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class Entry {
	private Long id;
	private String name;
	private String description;
	private LocalDate date;
	private BigDecimal value;
}
