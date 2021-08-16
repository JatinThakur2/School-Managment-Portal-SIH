package app;

import java.awt.AWTException;
import java.awt.MenuItem;
import java.awt.PopupMenu;
import java.awt.SystemTray;
import java.awt.TrayIcon;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import javafx.application.Application;
import javafx.application.Platform;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.layout.Pane;
import javafx.stage.Screen;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;

public class Main extends Application {
	UserInterface theGUI;
	public static Stage window;
	private boolean firstTime = true;
	public static TrayIcon trayIcon;
	public static Scene login;

	public static final double WINDOW_WIDTH = Screen.getPrimary().getBounds().getMaxX() / 2;
	public static final double WINDOW_HEIGHT = Screen.getPrimary().getBounds().getMaxY() / 2;

	@Override
	public void start(Stage primaryStage) throws Exception {
		window = primaryStage;
		window.setTitle("SSMP");
		window.resizableProperty().setValue(false);
		Pane theRoot = new Pane();
		
		theGUI = new UserInterface(theRoot);
		login = new Scene(theRoot, WINDOW_WIDTH, WINDOW_HEIGHT);
		window.setScene(login);
		window.show();

		// Minimize the application to system tray
		Platform.setImplicitExit(false);
		createTrayIcon(window);

	}

	public void createTrayIcon(final Stage stage) {
		if (SystemTray.isSupported()) {
			// get the SystemTray instance
			SystemTray tray = SystemTray.getSystemTray();
			// load an image
			java.awt.Image image = null;
			try {
				image = ImageIO.read(new File("logo.png"));
			} catch (IOException ex) {
				System.out.println(ex);
			}

			window.setOnCloseRequest(new EventHandler<WindowEvent>() {
				public void handle(WindowEvent t) {
					hide(stage);
				}
			});

			// create a action listener to listen for default action executed on the tray
			// icon
			final ActionListener closeListener = new ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					System.exit(0);
				}
			};

			ActionListener showListener = new ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent e) {
					Platform.runLater(new Runnable() {
						public void run() {
							stage.show();
						}
					});
				}
			};
			// create a popup menu
			PopupMenu popup = new PopupMenu();

			MenuItem showItem = new MenuItem("Show");
			showItem.addActionListener(showListener);
			popup.add(showItem);

			MenuItem closeItem = new MenuItem("Close");
			closeItem.addActionListener(closeListener);
			popup.add(closeItem);

			// construct a TrayIcon
			trayIcon = new TrayIcon(image, "SSMP", popup);
			// set the TrayIcon properties
			trayIcon.addActionListener(showListener);

			// add the tray icon
			try {
				tray.add(trayIcon);
			} catch (AWTException e) {
				System.err.println(e);
			}

		}
	}

	public void showProgramIsMinimizedMsg() {
		if (firstTime) {
			trayIcon.displayMessage("SSMP", "The application is minimized to the tray.", TrayIcon.MessageType.INFO);
			firstTime = false;
		}
	}

	private void hide(final Stage stage) {
		Platform.runLater(new Runnable() {
			public void run() {
				if (SystemTray.isSupported()) {
					stage.hide();
					showProgramIsMinimizedMsg();
				} else {
					System.exit(0);
				}
			}
		});
	}

	public static void main(String args[]) {
		launch(args);
	}
}
