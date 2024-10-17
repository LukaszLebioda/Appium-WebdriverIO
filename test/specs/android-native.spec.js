describe.only("Android Native Feature elements", () => {
	it("Access an Activity directly", async () => {
		// package => overall name of our app
		// activity => particular screen or functionality
		// Appium Inspector / Commands / getCurrentPackage | getCurrentActivity
		await driver.startActivity(
			"io.appium.android.apis", // current package
			"io.appium.android.apis.app.AlertDialogSamples" // current packege with current activity appended
		);
		await driver.pause(3000);
		await expect($("//*[@text='App/Alert Dialogs']")).toExist();
	});
});
