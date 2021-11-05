package br.com.iem.domain.usecase.get_entries;

import java.util.List;
import java.util.stream.Collectors;

import br.com.iem.domain.Entry;
import br.com.iem.domain.repository.EntryRepository;
import br.com.iem.domain.repository.RepositoryFactory;
import br.com.iem.domain.usecase.get_entries.GetEntriesOutput.EntryOutput;

public class GetEntries {

	private EntryRepository entryRepository;

	public GetEntries(RepositoryFactory repositoryFactory) {
		entryRepository = repositoryFactory.createEntryRepository();
	}
	
	public GetEntriesOutput execute() {
		List<Entry> entries = entryRepository.getAll();
		return new GetEntriesOutput(entries.stream()
					.map(entry -> EntryOutput.builder()
								.id(entry.getId())
								.name(entry.getName())
								.date(entry.getDate())
								.value(entry.getValue())
							.build())
					.collect(Collectors.toList()));
	}
}
