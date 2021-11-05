package br.com.iem.model.usecase.register_entry;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class RegisterEntryInput {
	private String name;
	private String description;
	private BigDecimal value;
	private LocalDate date;
}
