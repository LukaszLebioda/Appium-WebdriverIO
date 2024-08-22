/*
we are writing a webdriverIO test
we are going to run it in android emulator
with the help of appium
*/

describe("Android Elemen Tests", () => {
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
});
