package br.com.iem.domain.repository;

import java.util.List;

import br.com.iem.domain.Entry;

public interface EntryRepository {

	void save(Entry entry);
	List<Entry> getAll();
}
