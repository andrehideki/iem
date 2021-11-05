package br.com.iem.infra.h2;

import java.io.File;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import org.h2.tools.RunScript;

import br.com.iem.adapter.repository.DbConnection;

public class H2Connection implements DbConnection {
	
	@Override
	public Connection getConnection() {
		try {
			Class.forName("org.h2.Driver");
			Connection connection = DriverManager.getConnection("jdbc:h2:file:./data/db", "sa","");
			RunScript.execute(connection, new FileReader(new File(getClass().getClassLoader().getResource("schema.sql").toURI())));
			return connection;
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	@Override
	public PreparedStatement prepareStatement(String sql) {
		try {
			Connection connection = getConnection();
			return connection.prepareStatement(sql);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
	
	public static void main(String[] args) {
		new H2Connection().getConnection();
	}
}
