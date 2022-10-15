// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function stringsThatAreIn(a1, a2) {
    const stringsThatAreIn = [];
  
    for (const strToTest of a1) {
      for (const str of a2) {
        if (str.includes(strToTest)
          && !stringsThatAreIn.includes(strToTest)) {
          stringsThatAreIn.push(strToTest);
          break;
        }
      }
    }
  
    return stringsThatAreIn.sort();
  }
  
  console.log(
    stringsThatAreIn(
      ["arp", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  );
  
  console.log(
    stringsThatAreIn(
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"],
    ),
  );