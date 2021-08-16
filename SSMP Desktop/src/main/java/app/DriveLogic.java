package app;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;

import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Collections;
import java.util.List;

public class DriveLogic {

	private static Alert alertFile = new Alert(AlertType.INFORMATION);

	private static final String APPLICATION_NAME = "SSMP";

	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();

	// Directory to store user credentials for this application.
	private static final java.io.File CREDENTIALS_FOLDER //
			= new java.io.File(System.getProperty("user.home"), "credentials");

	private static final String CLIENT_SECRET_FILE_NAME = "client_secret.json";

	//
	// Global instance of the scopes required by this quickstart. If modifying these
	// scopes, delete your previously saved credentials/ folder.
	//
	private static final List<String> SCOPES = Collections.singletonList(DriveScopes.DRIVE);

	private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {

		java.io.File clientSecretFilePath = new java.io.File(CREDENTIALS_FOLDER, CLIENT_SECRET_FILE_NAME);

		if (!clientSecretFilePath.exists()) {
			alertFile.setTitle("Drive Credentials");
			alertFile.setHeaderText("Please copy " + CLIENT_SECRET_FILE_NAME + " to folder: ");
			alertFile.setContentText(CREDENTIALS_FOLDER.getAbsolutePath());
			alertFile.showAndWait();
		}

		// Load client secrets.
		InputStream in = new FileInputStream(clientSecretFilePath);
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,
				clientSecrets, SCOPES).setDataStoreFactory(new FileDataStoreFactory(CREDENTIALS_FOLDER))
						.setAccessType("offline").build();

		return new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
	}

	public static boolean connectDrive() throws IOException, GeneralSecurityException {

		System.out.println("CREDENTIALS_FOLDER: " + CREDENTIALS_FOLDER.getAbsolutePath());

		// 1: Create CREDENTIALS_FOLDER
		if (!CREDENTIALS_FOLDER.exists()) {
			CREDENTIALS_FOLDER.mkdirs();
			alertFile.setTitle("Drive Credentials");
			alertFile.setHeaderText("Created Folder: " + CREDENTIALS_FOLDER.getAbsolutePath());
			alertFile.setContentText("Copy file " + CLIENT_SECRET_FILE_NAME + " into this above created folder.");
			alertFile.showAndWait();
			System.out.println("Created Folder: " + CREDENTIALS_FOLDER.getAbsolutePath());
			System.out.println("Copy file " + CLIENT_SECRET_FILE_NAME + " into above folder");
			return false;
		}

		// 2: Build a new authorized API client service.
		final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();

		// 3: Read client_secret.json file & create Credential object.
		Credential credential = getCredentials(HTTP_TRANSPORT);

		// 5: Create Google Drive Service.
		Drive service = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME)
				.build();

		// Print the names and IDs of spreadsheets.
		String pageToken = null;

		do {
			FileList result = service.files().list().setQ("mimeType='application/vnd.google-apps.spreadsheet'")
					.setSpaces("drive").setFields("nextPageToken, files(id, name)").setPageToken(pageToken).execute();
			for (File file : result.getFiles()) {
				System.out.printf("Found file: %s (%s)\n", file.getName(), file.getId());
			}
			pageToken = result.getNextPageToken();
		} while (pageToken != null);

		return true;
	}
}