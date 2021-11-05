package br.com.iem.adapter.factory;

import br.com.iem.adapter.repository.DbConnection;
import br.com.iem.adapter.repository.EntryRepositoryJdbc;
import br.com.iem.model.repository.EntryRepository;
import br.com.iem.model.repository.RepositoryFactory;

public class RepositoryFactoryJdbc implements RepositoryFactory {

	private DbConnection dbConnection;

	public RepositoryFactoryJdbc(DbConnection dbConnection) {
		this.dbConnection = dbConnection;
	}
	
	@Override
	public EntryRepository createEntryRepository() {
		return new EntryRepositoryJdbc(dbConnection);
	}

}
