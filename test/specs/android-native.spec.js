//------------------------------------------------------------------
// terminal -> appium server => appium -p 4724 (for Appium Inspector)
// terminal (not needed) -> appium server => appium -p 4723 (for Android Studio, used by default)

/* Android Studio / Virtual Device Manager / run emulator:
Pixel 4 (Android Studio) -> compatible with desired capabilities declared in wdio.conf.js (to run npx wdio and write/run tests);
Pixel 7 (Appium Inspector) -> compatible with desired capabilities saved as default set in Appium Inspector (to use Appium Inspector and get locators);
*/
// run tests => npx wdio
//------------------------------------------------------------------

describe("Android Native Feature elements", () => {
	it.skip("Access an Activity directly", async () => {
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

	it.only("text input field", async () => {
		// navigate to text input field scrren
		const viewButton = await $("~Views"); // accesibility id
		await viewButton.click();
		await $("~Auto Complete").click(); // accessibility id
		await $("~1. Screen Top").click(); // accessibility id
		// work with txt input field
		const countryInputField = await $(
			"//*[@resource-id='io.appium.android.apis:id/edit']"
		); // xpath
		await countryInputField.addValue("Canada"); // or setValue()
		await expect(countryInputField).toHaveText("Canada");
		// await driver.pause(3000);
	});
});
