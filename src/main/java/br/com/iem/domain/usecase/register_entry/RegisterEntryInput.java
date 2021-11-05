package br.com.iem.domain.usecase.register_entry;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class RegisterEntryInput {
	private String name;
	private String description;
	private BigDecimal value;
	private LocalDate date;
}
