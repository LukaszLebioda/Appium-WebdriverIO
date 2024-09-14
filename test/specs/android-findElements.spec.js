/*
we are writing a webdriverIO test
and run it in android emulator
with the help of appium inspector & appium server
*/

// appium -p 4724 (for Appium Inspector)
// Pixel 4 => npx wdio
// Pixel 7 => Appium Inspector

describe("Android - Find element tests", () => {
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

  it("find element by class name", async () => {
    const className = await $("android.widget.TextView");
    // console.log(await className.getText());
    await expect(className).toHaveText("API Demos");
  });

  it("find elemend with Xpath", async () => {
    // xpath - (//tagname[@attribute=value])
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();
    await $('//android.widget.TextView[@text="Command two"]').click();

    const textAssertion = await $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });
});
