# basic explanation

- we are writing a WebdriverIO tests and run them in android emulator with the help of appium inspector (to get locators), appium libraries (client) (in our case: WebdriverIO) & appium server

- Appium Server: http server built on node.js (npm install -g appium)
- Appium Client: libraries for a particular language (e.g. JS), that can be downloaded to create automation framework (project); eg. WebdrivedIO;

- Appium Client sends requests to Appium Server, with the help of w3c protocol that translates requests into restful API format understood by the Appium server;
- Appium Server sends those requests (also with w3c protocol) to the mobile device, where the action is performed (for that mobile native drivers are needed, like UI Automator for Android or XCUIest for iOS);
- desired capabilities: JSON objects (sets of key / value pairs) sent within requests to and by Appium Server with info on: name of the device, the platform name (e.g. Android), the version (e.g. 11.0) etc.

- WebdriverIO => framework for browser and mobile automation testing; in our case it's a client that sends requests to appium server;

# prerequisites: node + Java JDK + Android Studio + VS Code

- node.js (eg. vith nvm - node version manager);
- Java JDK 17 (from java.sun.com; choose ARM64 DMG Installer) + setting up JAVA_HOME path (all paths are here, in the environment variables file: terminal => vim ~/.zshenv)
- Android Studio (from https://developer.android.com/studio) + setting up ANDROID_HOME path / Android Emulator setup: Android Studio / AVD Manager / Create virtual device / select Phone / download S (Android 12.0) or R (Android 11.0) or Q (Android 10.0) / select S, R or Q / run emulator
- VS Code: create project folder, run => npm init -y;

# Appium

- install Appium 2.0 Server => npm install -g appium (in case of errors => sudo npm install -g appium --unsafe-perm=true --allow-root);

- to run Appium Server on default port (4723) => appium
- to run Appium Server on a specific port => appium -p 4724

- Appium Desktop Inspector (from https://github.com/appium/appium-inspector/releases); later we will be connecting emulator with appium server;

- install Appium drivers => 1) appium driver install xcuitest / 2) appium driver install uiautomator2; check drivers => 3) appium driver list (or with flag --installed);

- install appium-doctor => sudo npm install appium-doctor -g (DEPRECATED!);

# WebdriverIO setup and configuration:

- WebdriverIO setup:
  - go to any folder, e.g. => cd ~/Desktop/Private/WebdriverIO - Appium;
  - run => npm init wdio webdriverio-appium-v8 to install WebdriverIO CLI (this ‘webdriverio-appium-v8’ will just generate a folder for our project);
  - answer bunch of questions; e.g. test will run locally, on local machine, using framework mocha.js, don’t need a compiler for a moment, no automatically generated test files, default reporter - spec, no plugins, service for test setup - appium, no base url, npm install - yes,
- WebdriverIO configuration is here => wdio.conf.js (inside this webdrioverio-appium-v8 folder we generated previously); thanks to wdio cli and answering those questions, the config file is mostly filled, but still there are some options to provide there (e.g. capabilities);

# final installation of Appium:

- install appium => npm install appium --save-dev;

# terminal commands:

- adb devices (to see if there's an emulator running);
- npx wdio (to run tests);
- appium -p 4724 (to set up appium server port);
