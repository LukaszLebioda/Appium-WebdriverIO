describe("Android - Find element tests", () => {
	// the same accesibilityId can be used both for android and iOS
	// that's why it's the best wayt to find elements
	it("Find element by accessibility id", async () => {
		// await driver.pause(5000);
		// arrange => find element by accessibility id (~)
		const appOption = await $("~App");
		// act => click on that element
		await appOption.click();
		// assert => make sure that link was clicked and another screen is displayed
		const actionBar = await $("~Action Bar");
		await expect(actionBar).toBeExisting();
	});

	// class is often not unique and the same className
	// can be found multiple times throughout the application
	// in example below first element with that class is returned
	it("find element by class name (or any tag name)", async () => {
		const className = await $("android.widget.TextView");
		// console.log(await className.getText());
		await expect(className).toHaveText("API Demos");
	});

	// it("find multiple elements", async () => {
	// 	const expectedList = ["API Demos", "Action Bar", "Activity"];
	// 	const actualList = [];
	// 	// find multiple elements
	// 	const textList = await $$("android.widget.TextView");
	// 	// loop through all elements
	// 	for (const element of textList) {
	// 		actualList.push(await element.getText());
	// 	}
	// 	// compare both lists (I used one element only, because otherwise it wouldn't work)
	// 	await expect(actualList).toContain(expectedList[1]);
	// });

	// xit === it.skip
	// xpath - (//tagname[@attribute=value])
	xit("find elemend with Xpath", async () => {
		await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
		await $(
			'//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
		).click();
		await $('//*[@text="Command two"]').click(); // star used to shorten the selector (only the remaining part is unique)

		const textAssertion = await $("//android.widget.TextView");
		await expect(textAssertion).toHaveText("You selected: 1 , Command two");
	});

	// it("Find element with UIAutomator", async () => {
	// 	await $('android=new UiSelector().textContains("Alert")').click();
	// });

	// it("working with text input field", async () => {
	// 	const viewButton = await $("~Views");
	// 	await viewButton.click();
	// 	await $("~Auto Complete").click();
	// 	await $("~1. Screen Top").click();

	// 	const countryInputField = await $(
	// 		"//*[@resource-id='io.appium.android.apis:id/edit']"
	// 	);
	// 	await countryInputField.addValue("Canada"); // or setValue()
	// 	await expect(countryInputField).toHaveText("Canada");
	// 	// await driver.pause(3000);
	// });
});
