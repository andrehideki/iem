package br.com.iem.adapter.repository;

import java.sql.Date;
import java.sql.PreparedStatement;

import br.com.iem.model.Entry;
import br.com.iem.model.repository.EntryRepository;

public class EntryRepositoryJdbc implements EntryRepository {
	
	private DbConnection dbConnection;

	public EntryRepositoryJdbc(DbConnection dbConnection) {
		this.dbConnection = dbConnection;
	}
	
	public void save(Entry entry) {
		try {
			PreparedStatement statement = dbConnection.prepareStatement(new StringBuilder("INSERT INTO entry ")
							.append(" (name, description, value, date) ")
							.append(" VALUES ")
							.append(" (?, ?, ?, ?) ")
							.toString());
			int i = 1;
			statement.setString(i++, entry.getName());
			statement.setString(i++, entry.getDescription());
			statement.setBigDecimal(i++, entry.getValue());
			statement.setDate(i++, Date.valueOf(entry.getDate()));
			statement.executeUpdate();
			statement.close();
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
