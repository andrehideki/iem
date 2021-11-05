package br.com.iem;

import br.com.iem.adapter.controller.GuiController;
import br.com.iem.adapter.factory.RepositoryFactoryJdbc;
import br.com.iem.domain.repository.RepositoryFactory;
import br.com.iem.infra.gui.Gui;
import br.com.iem.infra.h2.H2Connection;

public class Main {
	
	public static void main(String[] args) {
		RepositoryFactory repositoryFactory = new RepositoryFactoryJdbc(new H2Connection());
		GuiController guiController = new GuiController(repositoryFactory);
		new Gui(guiController);
	}
}
