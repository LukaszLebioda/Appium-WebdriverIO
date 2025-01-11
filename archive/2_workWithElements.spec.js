describe("Android - Working with elements", () => {
	it("text input field", async () => {
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
