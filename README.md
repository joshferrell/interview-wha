# Whasome Interview

Given the Whasome Location API, get an array of doctors and sort all doctors by shortest distance using the user's current location (found using the `getCurrentLocation` method).

We have created tests that you can run using `npm` to make sure doctors are sorted properly.

You must use JavaScript. We have included babel-env, and babel-stage-3, you are not required to use this.

It is not required to finish the project, we just want to see what your thought process is 🙂

## Location API

### Data Types
```
POINT_OBJECT = { lat: NUMBER, long: NUMBER }
DATA_OBJECT = {
    name: STRING,
    location: {
        address: STRING,
        coordinates: POINT_OBJECT
    }
}
```

### `fetchDoctors`

Fetch multiple people with location information and name

* Input Params: None
* Returns `Promise <[DATA_OBJECT]>`

### `getDistance`

Determines distance between two coordinate object points,
returns distance in miles

* Input Params: `(POINT_OBJECT, POINT_OBJECT)`
* Returns `NUMBER`

***Example***
```
const pointA = { lat: 38.6093425, long: -121.5148304}
const pointB = { lat: 38.5769468, long: -121.48017379999999 }
const distance = getDistance(pointA, pointB);
console.log(distance); // Prints 2.92
```

### `getCurrentLocation`

Gets the user's current location

* Input Params: None
* Returns `Promise <PointObject>`
