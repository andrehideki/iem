package br.com.iem.model.usecase.register_entry;

import br.com.iem.model.Entry;
import br.com.iem.model.repository.EntryRepository;
import br.com.iem.model.repository.RepositoryFactory;

public class RegisterEntry {

	private EntryRepository entryRepository;

	public RegisterEntry(RepositoryFactory repositoryFactory) {
		entryRepository = repositoryFactory.createEntryRepository();
	}
	
	public void execute(RegisterEntryInput input) {
		Entry entry = Entry.builder()
				.name(input.getName().trim())
				.description(input.getDescription().trim())
				.date(input.getDate())
				.value(input.getValue())
				.build();
		entryRepository.save(entry );
	}
}
