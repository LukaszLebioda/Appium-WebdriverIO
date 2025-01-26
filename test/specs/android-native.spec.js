//------------------------------------------------------------------
// terminal -> appium -p 4724 (start server for Appium Inspector)
// terminal? -> appium -p 4723 (start server for Android Studio)

/* 
Pixel 4 (Android Studio) -> compatible with desired capabilities declared in wdio.conf.js (to run npx wdio and write/run tests);
Pixel 7 (Appium Inspector) -> compatible with desired capabilities saved in Appium Inspector (to use Appium Inspector and get locators);
*/

// run tests => npx wdio
//------------------------------------------------------------------

describe("Android native feature elements", () => {
	it.skip("Access an activity (screen) directly", async () => {
		// package (appPackage) -> full name of the app, e.g. com.google.android.youtube for YouTube app,
		// activity (appActivity) -> particular screen or functionality,

		// Appium Inspector / Commands / getCurrentPackage
		// Appium Inspector / Commands / getCurrentActivity
		await driver.startActivity(
			"io.appium.android.apis", // current package
			"io.appium.android.apis.app.AlertDialogSamples" // current package with current activity appended
		);
		// pause for demonstation only
		// await driver.pause(3000);
		await expect($("//*[@text='App/Alert Dialogs']")).toExist();
	});

	// alert boxes
	it.only("Dialog / Alert boxes (cancel, OK)", async () => {
		// navigate to particular activity
		await driver.startActivity(
			"io.appium.android.apis",
			"io.appium.android.apis.app.AlertDialogSamples"
		);

		// get element and click on it to display alert box
		const buttonToDisplayDialogBox = $(
			"//*[@resource-id='io.appium.android.apis:id/two_buttons']"
		);
		await buttonToDisplayDialogBox.click();

		// get text of alert
		console.log("Alert text: ", await driver.getAlertText());

		// option 1: accept alert
		await driver.acceptAlert();

		// option 2: dismiss alert
		// await driver.dismissAlert();

		// option 3 / 4: click OK / Cancel button
		// await $("//*[resource-id='android:id/button1']").click();

		// assertion - dialog box no longer visible
		await expect("//*[resource-id='android:id/alertTitle']").not.toExist;
	});
});
