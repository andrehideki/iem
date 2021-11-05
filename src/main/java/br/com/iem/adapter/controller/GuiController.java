package br.com.iem.adapter.controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Map;

import br.com.iem.domain.repository.RepositoryFactory;
import br.com.iem.domain.usecase.register_entry.RegisterEntry;
import br.com.iem.domain.usecase.register_entry.RegisterEntryInput;

public class GuiController {

	private RepositoryFactory repositoryFactory;
	
	public GuiController(RepositoryFactory repositoryFactory) {
		this.repositoryFactory = repositoryFactory;
	}

	public void addNewEntry(Map<String, Object> params) {
		new RegisterEntry(repositoryFactory).execute(RegisterEntryInput.builder()
				.name(params.get("name").toString())
				.description(params.get("description").toString())
				.value(new BigDecimal(params.get("value").toString()))
				.date(LocalDate.now())
				.build());
	}
}
