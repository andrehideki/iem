package br.com.iem.infra.gui;

import javax.swing.JFrame;

public class Gui extends JFrame {

	private static final long serialVersionUID = 1L;
	
	public Gui() {
		this.init();
	}
	
	public void init() {
		this.setSize(600, 400);
		this.setVisible(true);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
	}
}
