Appium & WebdriverIO
#Dilpreet code repository:
https://github.com/dilpreetj/webdriverio-appium-course

#prerequisites

- node.js (eg. vith nvm - node version manager);
- Java JDK 17 (from java.sun.com; choose ARM64 DMG Installer) + setting up JAVA_HOME path (all paths are here, in the environment variables file: terminal => vim ~/.zshenv)
- Android Studio (from https://developer.android.com/studio) + setting up ANDROID_HOME path / Android Emulator setup: Android Studio / AVD Manager / Create virtual device / select Phone / download R (Android 11.0) and Q (Android 10.0) / select R or Q / run emulator
- Appium Desktop Inspector (from https://github.com/appium/appium-inspector/releases); later we will be connecting emulator with appium server;
- Appium 2.0 (npm install -g appium / or in case of errors => sudo npm install -g appium --unsafe-perm=true --allow-root);
- install Appium drivers => 1) appium driver install xcuitest / 2) appium driver install uiautomator2; check drivers => 3) appium driver list;
- install appium-doctor => sudo npm install appium-doctor -g (DEPRECATED!);

#WebdriverIO setup and configuration:

- WebdriverIO setup:
  - go to any folder, e.g. => cd ~/Desktop/Private/WebdriverIO - Appium;
  - run => npm init wdio webdriverio-appium-v8 to install WebdriverIO CLI (this ‘webdriverio-appium-v8’ will just generate a folder for our project);
  - answer bunch of questions; e.g. test will run locally, on local machine, using framework mocha.js, don’t need a compiler, no automatically generated test files, default reporter - spec, no plugins, service for test setup - appium, no base url, npm install - yes,
- WebdriverIO configuration is here => wdio.conf.js (inside this webdrioverio-appium-v8 folder we generated previously);
