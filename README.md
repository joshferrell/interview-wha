# Whasome Interview

## Problem

Please read the entire problem before commencing.

### In this scenario
* We are writing an application that displays a list of doctors to the user.
* We have access to a Location API with a number of methods:
  * `fetchDoctors()`
  * `getDistance( pointA, pointB )`
  * `getCurrentLocation()`
* Each Doctor contains a list of one or more Locations where they practice.
* Each Location contains a Point that includes `lat` and `long` coordinates.
* Further documentation of the Location API is available below.

### Your assignment
Use this starter project to:
1. Retrieve the list of doctors
2. Retrieve the user's location
3. Write a function `sortDoctorsByDistance` that returns a sorted list of doctors based on which doctor has the closest location to the user.
    * The sorted list of doctors should also include a `distance` property in each doctor's `location` property. The distance property should be the value returned by `getDistance`.

#### Additional Notes
* You do not need to provide a user interface. `console.log()` is just fine.
* You may use ES6 and ES7 syntax, if you wish.
* You may create as many, or as few helper functions as you like.
* We have included a JSON file that contains the correct solution for `sortDoctorsByDistance`. You may use it to clarify the final data structure, and to compare your answer.
* You may ask as many questions as you wish.
* You do not need to finish the project. We just want to observe your thought process.


## Location API

### Data Types
```js
POINT_OBJECT = { lat: NUMBER, long: NUMBER }
DOCTOR_OBJECT = {
    name: STRING,
    locations: [ LOCATION_OBJECT ]
}
LOCATION_OBJECT = {
    address: STRING,
    coordinates: POINT_OBJECT
}
```

### `fetchDoctors`

Fetch multiple people with location information and name

* Input Params: None
* Returns `Promise <[DOCTOR_OBJECT]>`

### `getDistance`

Determines distance between two coordinate object points,
returns distance in miles

* Input Params: `( POINT_OBJECT, POINT_OBJECT )`
* Returns `NUMBER`

***Example***
```js
const pointA = { lat: 38.6093425, long: -121.5148304}
const pointB = { lat: 38.5769468, long: -121.48017379999999 }
const distance = getDistance( pointA, pointB );
console.log( distance ); // 2.92
```

### `getCurrentLocation`

Gets the user's current location

* Input Params: None
* Returns `Promise <POINT_OBJECT>`
