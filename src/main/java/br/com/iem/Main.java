package br.com.iem;

import br.com.iem.adapter.GuiController;
import br.com.iem.infra.gui.Gui;

public class Main {
	
	public static void main(String[] args) {
		GuiController guiController = new GuiController();
		new Gui(guiController);
	}
}
