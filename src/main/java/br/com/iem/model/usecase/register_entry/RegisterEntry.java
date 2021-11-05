package br.com.iem.model.usecase.register_entry;

import br.com.iem.model.repository.EntryRepository;
import br.com.iem.model.repository.RepositoryFactory;

public class RegisterEntry {

	private EntryRepository createEntryRepository;

	public RegisterEntry(RepositoryFactory repositoryFactory) {
		createEntryRepository = repositoryFactory.createEntryRepository();
	}
	
	public void execute(RegisterEntryInput input) {
		
	}
}
