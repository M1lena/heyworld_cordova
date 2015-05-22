make sure run the following commands from www/

webdriver-manager start
http-server


In a separate tab do:
android (this opens up the android SDK)

In SDK go to manage ADVs, select phone, and click "start..."


** Optional (with the above...) to run app on your android phone:

plug your own phone in with USB, go to Settings (and perhaps Developer Tools) and turn on "debugging mode"

THEN from the command line do:

cordova run android  **OR**  cordova run android --device