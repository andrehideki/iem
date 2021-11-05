package br.com.iem.domain.usecase.register_entry;

import br.com.iem.domain.Entry;
import br.com.iem.domain.repository.EntryRepository;
import br.com.iem.domain.repository.RepositoryFactory;

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
