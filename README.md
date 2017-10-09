# Mongo queries

## Summary
Try your hand with extracting data from Mongo database (**v.3.2.4**).

## Goal
Implement functions with Mongo queries according to requirements below. You're working on **phone** collection.

*Returned data*
All functions should return a promise. The expected response format is found at each section.

### getAllPhones
Find all phones with all field from collection.

### getPhonesByOS
Find phones with specified operating system.

```json
{ "name": "Dell Venue"}
```

### getPhonesByNetwork
Find phones with at least one specified network from array given by the argument.

```json
{
"availability": [ "T-Mobile"],
"name": "Dell Streak 7"
},
{ "availability": [ "AT&T", "KT", "T-Mobile"],
"name": "Dell Venue"
}
```

### getPhonesWithConditions
Find phones that can withstand the 7 hours of talk time and have bluetooth 3.0 or infrared.

```json
{
"connectivity": {
"bluetooth": "Bluetooth 3.0",
"cell": "3G/CDMA : 850MHz/1900MHz\n",
"gps": true,
"infrared": false,
"wifi": "802.11 b/g"
},
"name": "Samsung Gem™"
}

```
### getPhonesWithWeightRange
Find phones with the weight between the specified range.

```json
{
"name": "Dell Venue",
"sizeAndWeight": {
"weight": 164
}
}
```

### countPhonesWithRadio
Count phones that have a radio.

```json
{"_id": "fmRadio", "count": 6}
```

### groupByTalkTime
Count and group phones according to talk time.

```json
{
"_id": "8 hours",
"count": 3
}
```

### searchInFeatures
Search for the **phrase** in the `additionalFeatures` field, pay attention to the case sensitive. Include text **score** information (represents the relevance of a document to a given text search query). Sort the result according to score.

```json
{
    "additionalFeatures": "Adobe Flash Player 10, QWERTY keyboard, Quadband GSM Worldphone, Advance Business Security, QWERTY keyboard, Complex Password Secure, QWERTY keyboard, Review & Edit Documents with Quick Office, Personal 3G Mobile Hotspot for up to 5 WiFi enabled Devices, Advanced Social Networking brings all social content into a single homescreen widget",
    "name": "DROID™ 2 Global by Motorola",
    "score": 1.878048780487805
}
```

## Example phone document

```json
 {
            "_id": "56d9bf92f9be48771d6fe511",
            "additionalFeatures": "Accessibility features: tactile qwerty trackpad.",
            "android": {
                "os": "Android 2.2",
                "ui": "Android"
            },
            "availability": [
                "T-Mobile"
            ],
            "battery": {
                "standbyTime": "420 hours",
                "talkTime": "7 hours",
                "type": "Lithium Ion (Li-Ion) (1300 mAH)"
            },
            "camera": {
                "features": [
                    "Flash",
                    "Video"
                ],
                "primary": "5.0 megapixels"
            },
            "connectivity": {
                "bluetooth": "Bluetooth 2.1",
                "cell": "GSM: 850, 900, 1800, 1900  UMTS: Yes",
                "gps": true,
                "infrared": true,
                "wifi": "802.11 b/g/n"
            },
            "description": "The T-Mobile G1 was the world's first Android-powered phone.",
            "display": {
                "screenResolution": "WVGA (800 x 480)",
                "screenSize": "3.7 inches",
                "touchScreen": true
            },
            "hardware": {
                "accelerometer": true,
                "audioJack": "3.5mm",
                "cpu": "800 MHz Qualcomm\u00ae Snapdragon\u2122 MSM7230",
                "fmRadio": true,
                "physicalKeyboard": true,
                "usb": "USB 2.0"
            },
            "name": "T-Mobile G2",
            "sizeAndWeight": {
                "dimensions": [
                    "60.4 mm (w)",
                    "119.0 mm (h)",
                    "14.2 mm (d)"
                ],
                "weight": 111.0
            },
            "storage": {
                "flash": "4000MB",
                "ram": "512MB"
            }
        }
```

## Setup
You need to have MongoDB. You can install it manually of if you have docker and docker-compose, run:

docker-compose up -d

To install dependencies from package.json:

yarn install

To run tests in development mode:

mocha --watch

To run verify jshint and tests:

yarn test

To run verify jshint and tests with human readable output:

grunt --force
