//------------------------------------------------------------------
// appium server => appium -p 4724 (for Appium Inspector)
// appium server => appium -p 4723 (for Android Studio, used by default)

/* Android Studio / Virtual Device Manager / run emulator:
Pixel 4 -> compatible with desired capabilities declared in wdio.conf.js (to run npx wdio and write/run tests);
Pixel 7 -> compatible with desired capabilities saved as default set in Appium Inspector (to use Appium Inspector and get locators);
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

	it.only("find multiple elements", async () => {
		const expectedList = ["API Demos", "Action Bar", "Activity"];
		const actualList = [];
		// find multiple elements
		const textList = await $$("android.widget.TextView");
		// loop through all elements
		for (const element of textList) {
			actualList.push(await element.getText());
		}
		// compare both lists (I used one element only, because otherwise it wouldn't work)
		await expect(actualList).toContain(expectedList[1]);
	});
});
