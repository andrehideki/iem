package br.com.iem.adapter.repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.com.iem.domain.Entry;
import br.com.iem.domain.repository.EntryRepository;

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

	@Override
	public List<Entry> getAll() {
		try {
			PreparedStatement statement = dbConnection.prepareStatement("SELECT * FROM entry");
			ResultSet resultSet = statement.executeQuery();
			List<Entry> entries = new ArrayList<>();
			while (resultSet.next()) {
				entries.add(Entry.builder()
						.id(resultSet.getLong("id"))
						.name(resultSet.getString("name"))
						.description(resultSet.getString("description"))
						.date(resultSet.getDate("date").toLocalDate())
						.value(resultSet.getBigDecimal("value"))
						.build());
			}
			return entries;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
