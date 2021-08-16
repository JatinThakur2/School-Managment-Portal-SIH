package app;

import java.awt.Desktop;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class BusinessLogic {

	public static void openSheet() {
		File xlsxFile = new File("C:\\Users\\Predator\\Documents\\FEE.xlsx");
		if (xlsxFile.exists()) {
			if (Desktop.isDesktopSupported()) {
				try {
					Desktop.getDesktop().open(xlsxFile);
				} catch (IOException e) {

					e.printStackTrace();
				}
			} else {
				System.out.println("Cannot open file!");
			}
		} else {
			System.out.println("File does not exist!");
		}
	}

	public static boolean testNetwork() throws IOException {
		String host = "www.google.com";
		try {
			InetAddress net = InetAddress.getByName(host);
			boolean reachable = net.isReachable(2000);
			if (reachable) {
				return true;
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return false;
	}

}
