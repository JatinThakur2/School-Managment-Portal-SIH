package app;

import static java.util.concurrent.TimeUnit.SECONDS;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import javafx.application.Platform;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.Pane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;

public class UserInterface {

	final ScheduledExecutorService monitor = Executors.newScheduledThreadPool(1);
	String id, pass;

	/**
	 * Login Scene
	 */
	private Label label_loginHead = new Label("Sikkim Student Management Portal");
	private Label label_userID = new Label("User ID");
	private Label label_pass = new Label("Password");
	private TextField text_userID = new TextField();
	private TextField text_pass = new TextField();
	private Button submitLogin = new Button("Submit");
	private Alert alert = new Alert(AlertType.INFORMATION);

	private double verticalGap = Main.WINDOW_HEIGHT / 10;

	/**
	 * Dashboard
	 */
	private Label label_headTD = new Label("Welcome to SSMP");
	private Button stuData = new Button("Manage Students");
	private Button facultyData = new Button("Manage Faculty");
	private Button schoolData = new Button("School Data");
	private Button logout = new Button("🠔 Logout");
	private Button syncStatus = new Button("Sync is Off");
	private Label netStatus = new Label("**************************************");

	public boolean connected = false;

	public UserInterface(Pane theRoot) {

		/**
		 * Login Scene Elements
		 */
		setupLabelUI(label_loginHead, "Verdana", 44, Main.WINDOW_WIDTH, Pos.BASELINE_CENTER, 0, verticalGap);
		setupLabelUI(label_userID, "Calibri", 20, Main.WINDOW_WIDTH / 5, Pos.BASELINE_LEFT, Main.WINDOW_WIDTH / 3,
				verticalGap * 3);

		setupTextUI(text_userID, "Calibri", 20, Main.WINDOW_WIDTH / 5, Pos.BASELINE_LEFT, Main.WINDOW_WIDTH / 2,
				verticalGap * 3 - 5, true);

		setupLabelUI(label_pass, "Calibri", 20, Main.WINDOW_WIDTH / 5, Pos.BASELINE_LEFT, Main.WINDOW_WIDTH / 3,
				verticalGap * 4);

		setupTextUI(text_pass, "Calibri", 20, Main.WINDOW_WIDTH / 5, Pos.BASELINE_LEFT, Main.WINDOW_WIDTH / 2,
				verticalGap * 4 - 5, true);

		setupButtonUI(submitLogin, "Calibri", 28, 100, Pos.BASELINE_CENTER, Main.WINDOW_WIDTH / 2 - 50,
				verticalGap * 6);

		submitLogin.setOnAction(ev -> {
			try {
				if (checkInput()) {
					if (DriveLogic.connectDrive()) {
						alert.showAndWait();
						loginSuccess();
					}
				} 
			} catch (IOException | GeneralSecurityException e) {
				System.out.println(e);
			}
		});

		double BUTTON_WIDTH = Main.WINDOW_WIDTH / 4;

		/**
		 * Dashboard Elements
		 */
		setupLabelUI(label_headTD, "Verdana", 44, Main.WINDOW_WIDTH, Pos.CENTER, 0, verticalGap);

		setupButtonUI(stuData, "Calibri", 22, BUTTON_WIDTH, Pos.BASELINE_CENTER, (Main.WINDOW_WIDTH - BUTTON_WIDTH) / 2,
				verticalGap * 3);
		stuData.setOnAction(ev -> {
			BusinessLogic.openSheet();
		});

		setupButtonUI(facultyData, "Calibri", 22, BUTTON_WIDTH, Pos.BASELINE_CENTER,
				(Main.WINDOW_WIDTH - BUTTON_WIDTH) / 2, verticalGap * 5);
		facultyData.setOnAction(ev -> {
			BusinessLogic.openSheet();
		});

		setupButtonUI(schoolData, "Calibri", 22, BUTTON_WIDTH, Pos.BASELINE_CENTER,
				(Main.WINDOW_WIDTH - BUTTON_WIDTH) / 2, verticalGap * 7);
		schoolData.setOnAction(ev -> {
			BusinessLogic.openSheet();
		});

		setupButtonUI(logout, "Calibri", 22, BUTTON_WIDTH / 3, Pos.BASELINE_LEFT, (Main.WINDOW_WIDTH / 15),
				verticalGap / 3);
		logout.setOnAction(ev -> {
			Main.window.setScene(Main.login);
			Main.window.show();
		});

		setupButtonUI(syncStatus, "Calibri", 22, BUTTON_WIDTH / 3, Pos.BASELINE_LEFT,
				Main.WINDOW_WIDTH - (Main.WINDOW_WIDTH / 5), verticalGap / 3);
		syncStatus.setTextFill(Color.RED);

		syncStatus.setOnAction(ev -> {
			syncStatus.setTextFill(Color.GREEN);
			syncStatus.setText("Sync is On");
			syncStatus.setDisable(true);
		});

		setupLabelUI(netStatus, "Calibri", 22, Main.WINDOW_WIDTH, Pos.CENTER, 0, verticalGap * 9);

		alert.setTitle("Download");
		alert.setHeaderText("Downloading the sheets linked with your account.");
		alert.setContentText("Please wait!");

		/**********************************************************************************************
		 * 
		 */
		theRoot.getChildren().addAll(label_loginHead, label_userID, label_pass, text_userID, text_pass, submitLogin);
	}

	private boolean checkInput() {
		Alert loginError = new Alert(AlertType.WARNING);
		loginError.setTitle("Login Error");
		loginError.setHeaderText("There is some problem with your login input.");
		id = text_userID.getText().toString();
		pass = text_pass.getText().toString();
		int lenID = id.length(), lenPass = pass.length();
		if (lenID <= 0 && lenPass <= 0) {
			loginError.setContentText("The input fields are empty. Please enter ID and Password properly.");
			loginError.showAndWait();
			return false;
		} else if (lenID <= 0 && lenPass > 0) {
			loginError.setContentText("Please enter the ID properly.");
			loginError.showAndWait();
			return false;
		} else if (lenID > 0 && lenPass <= 0) {
			loginError.setContentText("Please enter the Password properly.");
			loginError.showAndWait();
			return false;
		} else
			return true;

	}

	/**********
	 * Private local method to initialize the standard fields for a label
	 */
	private void setupLabelUI(Label l, String ff, double f, double w, Pos p, double x, double y) {
		l.setFont(Font.font(ff, f));
		l.setMinWidth(w);
		l.setAlignment(p);
		l.setLayoutX(x);
		l.setLayoutY(y);
	}

	/**********
	 * Private local method to initialize the standard fields for a text field
	 */
	private void setupTextUI(TextField t, String ff, double f, double w, Pos p, double x, double y, boolean e) {
		t.setFont(Font.font(ff, f));
		t.setMinWidth(w);
		t.setMaxWidth(w);
		t.setAlignment(p);
		t.setLayoutX(x);
		t.setLayoutY(y);
		t.setEditable(e);
	}

	/**********
	 * Private local method to initialize the standard fields for a button
	 */
	private void setupButtonUI(Button b, String ff, double f, double w, Pos p, double x, double y) {
		b.setFont(Font.font(ff, f));
		b.setMinWidth(w);
		b.setAlignment(p);
		b.setLayoutX(x);
		b.setLayoutY(y);
	}

	private void loginSuccess() {
		Pane Dashboard = new Pane();
		Dashboard.getChildren().addAll(label_headTD, facultyData, schoolData, stuData, logout, syncStatus, netStatus);
		Scene dash = new Scene(Dashboard, Main.WINDOW_WIDTH, Main.WINDOW_HEIGHT);
		Main.window.setScene(dash);
		Main.window.show();
		createNetworkMonitorThread();
	}

	private void createNetworkMonitorThread() {
		// Thread to test the network availability
		final Runnable tester = new Runnable() {
			public void run() {
				// JavaFX thread to change UI elements
				Platform.runLater(new Runnable() {
					@Override
					public void run() {
						try {
							connected = BusinessLogic.testNetwork();
							if (connected) {
								netStatus.setText("Internet Access");
								netStatus.setTextFill(Color.GREEN);
							} else {
								netStatus.setText("Network Not Connected");
								netStatus.setTextFill(Color.RED);
							}
						} catch (Exception e) {
							System.out.println("Network Exception:\n" + e);
						}
					}
				});
			}
		};

		final ScheduledFuture<?> threadHandle = monitor.scheduleAtFixedRate(tester, 1, 1, SECONDS);
		monitor.schedule(new Runnable() {
			public void run() {
				threadHandle.cancel(true);
			}
		}, 365, TimeUnit.DAYS);

	}

}
