package app;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.log4j.BasicConfigurator;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.Query;
import com.google.firebase.database.ValueEventListener;

public class Firebase {
	static boolean loginValid;
	static FirebaseOptions options = null;
	final static String CREDENTIAL_FILE = "./firebaseSDK.json";
	private static String fileID;

	/**
	 * 
	 * @param id   The userid stored in database
	 * @param pass Password stored in database
	 * @throws IOException
	 */
	public static void connectDB(String id, String pass) {

		BasicConfigurator.configure();
		initializeDB();

		// Create a DB instance
		DatabaseReference ref = FirebaseDatabase.getInstance().getReference();

		// Query to verify the account with entered email
		Query queryMail = ref.child("schoolAdmins").orderByChild("email").equalTo(id);
		queryMail.addListenerForSingleValueEvent(new ValueEventListener() {
			@Override
			public void onDataChange(DataSnapshot dataSnapshot) {
				if (dataSnapshot.exists()) {
					loginValid = true;
					System.out.println("Account Exist");

					for (DataSnapshot issue : dataSnapshot.getChildren())
						fileID = issue.child("sheetID").getValue().toString();

				} else {
					System.out.println("Account Doesn't exist");
					loginValid = false;
				}
			}

			@Override
			public void onCancelled(DatabaseError databaseError) {
			}
		});
	}

	public static void initializeDB() {
		try {
			// Fetch the service account key JSON file contents
			FileInputStream serviceAccount = new FileInputStream(CREDENTIAL_FILE);

			// Initialize the app with a service account, granting admin privileges
			options = new FirebaseOptions.Builder().setCredentials(GoogleCredentials.fromStream(serviceAccount))
					.setDatabaseUrl("https://ssmp-a8fac.firebaseio.com/").build();
			FirebaseApp.initializeApp(options);

			System.out.println("DB Connected");
		} catch (IOException e) {
			System.out.println(e);
		}
	}

	public static String getFileID() {
		return fileID;
	}

}