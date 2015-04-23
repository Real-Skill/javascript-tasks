# Exercise 5

### JS Assessments test basic JavaScript knowledge. Please read instructions carefully to ensure that you understand each task.

Each exercise consist of few simple tasks. You are supposed to implement functions, having provided only the function name and purpose.
Your solutions should be placed inside **impl/day5.js** file(inside window.day5 object).

#### Before you start...

Resolve provided dependencies by typing in console:

    npm install
    bower install

To test your solution locally, type:

    npm start
    
or

    npm test

JavaScript basic functions:

    http://www.w3schools.com/jsref/
Javascript EcmaScript5 tutorials and more:

    https://developer.mozilla.org/en-US/docs/Web/JavaScript



## Part I:

Create an **ARMORY** object that contain two private variables:

    availableWeapon
    availableArmory

Both of them should have initial value of array with String '123' as first element.
In the next tasks you will be asked to extend functionality of the **ARMORY** by adding appropriate
methods to modify or view those variables outside.

## Part II:

Add **addArmory** function to the **ARMORY**. It should accept a String or an array of Strings as a parameter:

    addArmory(armor)

Given that any of the Strings passed from the **armor** parameter is equal to:

    Heavy Armor
or

    Light Armor

... function should add it to the **availableArmory** array and return 0. Otherwise, function should return -1.

## Part III:

Add **addWeapon** function to the **ARMORY**. It should accept a String or an array of Strings as a parameter:

    addWeapon(armor)

Given that any of the Strings passed from the **armor** parameter is equal to:

    M-16
or

    M-22

... function should add it to the **availableWeapon** array and return 0. Otherwise, function should return -1.

## Part IV:

Add **getWeapon** function to the **ARMORY**. It should accept a String as a parameter:

    getWeapon(weapon)

The **weapon** String should be searched through **availableWeapon** array. First occurrence counting
from the beginning of the array should be removed from **availableWeapon** array and returned. If there
would be no such weapons in **ARMORY** it should return undefined.

## Part V:

Add **getArmory** function to the **ARMORY**. It should accept a String as a parameter:

    getArmory(armor)

The **armor** String should be searched through **availableArmory** array. First occurrence counting
from the beginning of the array should be removed from **availableArmory** array and returned. If there
would be no such weapons in **ARMORY** it should return undefined.

## Part VI:

The war is about to begin and general need a complete list of armories in **ARMORY**.
Add a **writeAllArmory** function to **ARMORY** that will return all the elements in **availableArmory**.

## Part VII:

The war is about to begin and general need a complete list of weapons in **ARMORY**.
Add a **writeAllWeapon** function to **ARMORY** that will return all the elements in **availableWeapon**.

## Part VIII:

Your position is lost and your army need a fast means to dispose of unused armories left in **ARMORY**.
Add **flushArmory** function to **ARMORY** to destroy all the **availableArmory** elements. Function
should also return 0.

## Part VIII:

Your position is lost and your army need a fast means to dispose of unused weapons left in **ARMORY**.
Add **flushWeapon** function to **ARMORY** to destroy all the **availableWeapon** elements. Function
should also return 0.

## Part IX:

Create a **PetrolStation** object with three private properties:

    gasoline95
    gasoline98
    oil

They should not have any initial value. In the next few tasks you will be asked to extend PetrolStation
functionality by adding few new functions that modify those values.

## Part X:

As a employee you need to be able to check fuel status at **PetrolStation**. Add **getFuel** function
to the station that given the fuel type String will return you amount of fuel in tank (ex. 'oil' -> oil)

## Part XI:

As a employee you need to be able to adjust fuel status manually at **PetrolStation**. Add **setFuel** function
to the station that given the fuel type String(ex. 'oil' -> oil) and amount Number will set remaining status
of the fuel in tank.

## Part XII:

When client buy fuel from your station you need to adjust every fuel type by a certain value depending
on the order. For this case, add **tankFuel** to your **PetrolStation** that would accept all the fuel types:

    tankFuel(gas95, gas98, diesel)

This function should subtract proper amount of the fuel to all the tanks depending on the property name
(ex. diesel -> oil). Below you can find the actual prices of the fuel:

    gas95 -> 5.35
    gas98 -> 5.56
    diesel -> 5.61

**tankFuel** should return the bill to the customer(price Number for all the fuel he bought).
