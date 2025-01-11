# basic explanation

- tests are written in WebdriverIO framework (which is an Appium client),
- tests are run in android emulator (provided by Android Studio),
- tests are run with the help of Appium (server),
- and with the help of Appium Inspector (selector / locator finder),

- Appium Server: http server built on node.js (npm install -g appium)
- Appium Client: libraries to create automation tests (like WebdriverIO);

- Appium Client sends requests to Appium Server,
- Appium Server sends those requests to the mobile device,
- for that mobile native drivers are needed,
- like UI Automator (Android) or XCUIest (iOS);

- desired capabilities: JSON objects sent within requests to and by Appium Server with info (name of the device, the platform name (e.g. Android), the version (e.g. 11.0) etc.),

- WebdriverIO => framework for browser and mobile automation testing; in our case it's a client that sends requests to Appium Server;

- run separate emulator in Android Studio (e.g. Pixel 4), with desired capabilities declared in wdio.conf.js (to run npx wdio and write/run tests);
- run separate emulator for Appium Inspector (e.g. Pixel 7), with desired capabilities saved as default set in Appium Inspector (to use Appium Inspector and get locators);

- terminal => appium -p 4724 (to run appium server for Appium Inspector),
- terminal => appium -p 4723 (to run appium server for Appium Inspector),
- terminal => appium (to run appium on default port, whis is 4723),
- terminal => npx wdio (to run tests),
- terminal => adb devices (to see if there's an emulator running);

# prerequisites: node + Java JDK + Android Studio + VS Code

- node.js (eg. vith nvm - node version manager);
- Java JDK 17 (from java.sun.com; choose ARM64 DMG Installer) + setting up JAVA_HOME path (all paths are here, in the environment variables file: terminal => vim ~/.zshenv)
- Android Studio (from https://developer.android.com/studio) + setting up ANDROID_HOME path / Android Emulator setup: Android Studio / AVD Manager / Create virtual device / select Phone / download S (Android 12.0) or R (Android 11.0) or Q (Android 10.0) (one version for Android Emulator, one for Appium Inspector) / select S, R or Q / name AVD (Android Virtual Device) / run emulator
- VS Code: create project folder, run => npm init -y;

# Appium installation & configuration

- install Appium 2.0 Server => npm install -g appium (in case of errors => sudo npm install -g appium --unsafe-perm=true --allow-root);

- Appium Desktop Inspector (download from https://github.com/appium/appium-inspector/releases);
- desired capabilities:
  {
  "platformName": "Android",
  "appium:platformVersion": "10",
  "appium:deviceName": "Pixel 7",
  "appium:app": "/Users/llebioda/Desktop/Private/WebdriverIO, Appium/app/android/ApiDemos-debug.apk",
  "appium:automationName": "UIAutomator2"
  }

- Appium drivers:
- terminal => appium driver install xcuitest (for iOS),
- terminal => appium driver install uiautomator2 (for android),
- terminal => appium driver list (or --installed) (to check drivers)

- install appium-doctor => sudo npm install appium-doctor -g (DEPRECATED!);

# WebdriverIO installation & configuration

- WebdriverIO setup:
- go to any folder, e.g. => cd ~/Desktop/Private/WebdriverIO - Appium;
- run => npm init wdio webdriverio-appium-v8 to install WebdriverIO CLI (this ‘webdriverio-appium-v8’ will just generate a folder for our project);
- answer bunch of questions; e.g. test will run locally, on local machine, using framework mocha.js, don’t need a compiler for a moment, no automatically generated test files, default reporter - spec, no plugins, service for test setup - appium, no base url, npm install - yes,
- WebdriverIO configuration is here => wdio.conf.js (inside this webdrioverio-appium-v8 folder we generated previously); thanks to wdio cli and answering those questions, the config file is mostly filled, but still there are some options to provide there (e.g. capabilities);
- WdIO desired cababilities:
  capabilities: [
  {
  // capabilities for local Appium web tests on an Android Emulator
  // platformName: "Android",
  // browserName: "Chrome",
  "appium:platformName": "Android",
  "appium:platformVersion": "12.0",
  "appium:deviceName": "Pixel 4",
  "appium:automationName": "UIAutomator2",
  // "appium:app": path.join(
  // process.cwd(),
  // "webdriverio-appium-v8/app/android/ApiDemos-debug.apk"
  // ),
  "appium:app":
  "/Users/llebioda/Desktop/Private/WebdriverIO, Appium/app/android/ApiDemos-debug.apk",
  },
  ],
