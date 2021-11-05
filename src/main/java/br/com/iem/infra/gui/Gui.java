package br.com.iem.infra.gui;

import java.awt.BorderLayout;
import java.awt.Container;

import javax.swing.JFrame;

import br.com.iem.adapter.GuiController;

public class Gui extends JFrame {

	private static final long serialVersionUID = 1L;
	private GuiController guiController;
	
	public Gui(GuiController guiController) {
		this.guiController = guiController;
		this.init();
	}
	
	public void init() {
		this.getContentPane().setLayout(new BorderLayout());
		this.setSize(800, 400);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.initComponents();
		this.setVisible(true);
	}

	private void initComponents() {
		Container contentPane = getContentPane();
		NewEntryPanel newEntryPanel = new NewEntryPanel(guiController);
		contentPane.add(newEntryPanel, BorderLayout.NORTH);
	}
}
