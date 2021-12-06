const { fetchCoordsByIP, fetchMyIP, fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("SOmething went wrong, ERROR: ", error);
//     return;
//   }

//   console.log("it worked. My IP: ", ip);
// });

// fetchCoordsByIP('162.245..188', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

fetchISSFlyOverTimes(
  { latitude: "49.27670", longitude: "-123.13000" },
  false,
  false,
  (error, flyOverTimes) => {
    nextISSTimesForMyLocation((error, passTimes) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
        return console.log("It didn't work!", error);
      }
      // success, print out the deets!
      printPassTimes(passTimes);
    });
  }
);
