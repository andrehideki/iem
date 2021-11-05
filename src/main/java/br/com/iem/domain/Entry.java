package br.com.iem.domain;

import java.time.LocalDate;

import java.math.BigDecimal;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Entry {
	private Long id;
	private String name;
	private String description;
	private LocalDate date;
	private BigDecimal value;
}
