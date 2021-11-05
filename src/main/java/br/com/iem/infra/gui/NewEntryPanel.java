package br.com.iem.infra.gui;

import java.awt.Component;
import java.awt.FlowLayout;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class NewEntryPanel extends JPanel {

	private static final long serialVersionUID = 1L;

	private JTextField name, description, value, date;
	private JButton addEntryButton;
	
	public NewEntryPanel() {
		this.setLayout(new FlowLayout());
		this.name = new JTextField(20);
		this.description = new JTextField(20);
		this.date = new JTextField(10);
		this.value = new JTextField(10);
		this.addEntryButton = new JButton("Add");
		addEntryButton.addActionListener(e -> {
			
		});
		this.add(createFieldWithLabel("Nome", name));
		this.add(createFieldWithLabel("Descri��o", description));
		this.add(createFieldWithLabel("Data", date));
		this.add(createFieldWithLabel("Valor", value));
		this.add(addEntryButton);
	}
	
	private Component createFieldWithLabel(String label, JTextField textField) {
		JPanel panel = new JPanel(new GridLayout(2, 1));
		panel.add(new JLabel(label));
		panel.add(textField);
		return panel;
	}
}
