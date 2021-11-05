package br.com.iem.domain.usecase.get_entries;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
public class GetEntriesOutput {
	
	private List<EntryOutput> entries;
	
	@Data
	@Builder
	public static class EntryOutput {
		private Long id;
		private String name;
		private BigDecimal value;
		private LocalDate date;
	}
}
