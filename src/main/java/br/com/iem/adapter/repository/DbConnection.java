package br.com.iem.adapter.repository;

import java.sql.Connection;
import java.sql.PreparedStatement;

public interface DbConnection {

	PreparedStatement prepareStatement(String sql);
	Connection getConnection();
}
