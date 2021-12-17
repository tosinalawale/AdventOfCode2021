
const caveTypeEnum = Object.freeze({
  Small: 0,
  Big: 1
});

function buildCaveSystem(input) {
  let caves = {};

  for (let i = 0; i < input.length; i++) {
    const splitInputLine = input[i].split("-");
    const startCaveName = splitInputLine[0];
    const linkedCaveName = splitInputLine[1];

    if (!caves[startCaveName]) {
      caves[startCaveName] = {
        name: startCaveName,
        linkedCaveNames: [],
        visited: false
      }
    }

    if (!caves[linkedCaveName]) {
      caves[linkedCaveName] = {
        name: linkedCaveName,
        linkedCaveNames: [],
        visited: false
      }
    }

    caves[startCaveName].linkedCaveNames.push(linkedCaveName);
    caves[startCaveName].type = (startCaveName === startCaveName.toLowerCase()) ? caveTypeEnum.Small : caveTypeEnum.Big;

    caves[linkedCaveName].linkedCaveNames.push(startCaveName);
    caves[linkedCaveName].type = (linkedCaveName === linkedCaveName.toLowerCase()) ? caveTypeEnum.Small : caveTypeEnum.Big;
  }

  return caves;
}

// function findPathsFromCave(caveName, caves) {
//   const cave = caves[caveName];
//   let path = [ caveName ];
//   cave.visited = true;

//   let pathsToEnd = [];



//   const linkedCaves = cave.linkedCaves;  
//   if (linkedCaves.length > 0) {
//     linkedCaves.forEach(linkedCave => {

//       if (linkedCave.name === "end") { 
//         pathsToEnd.push(path);
//         return pathsToEnd;
//       }

//       if (!(cave.type === caveTypeEnum.Small && visited === true)) {
//         let newPathSection = [caveName, linkedCave.name ];
//         paths.push( [caveName, linkedCave.name ] );
//         for (let i = 0; i < paths.length; i++) {
//           let cavePreviouslyVisitedInPath = paths[i].includes(linkedCave.name);
//           if (!cavePreviouslyVisitedInPath) {
//             paths[i].
//           }
//         }
//         path = path.concat(findBasinAroundPoint(grid, v.row, v.col, height, width));
//     });
//   }

//   return pathsToEnd;

// }

function noSmallCavesAppearTwiceInPath(cavesInPath) {
  let namesOfSmallCavesInPath = cavesInPath.filter(c => c.type === caveTypeEnum.Small).map(c => c.name);
  let pathSet = new Set(namesOfSmallCavesInPath);
  return pathSet.size === namesOfSmallCavesInPath.length;
}

function isCaveEligible(cave, cavesInPath, path) {

  if (cave.name === "start") {
    return false;
  }

  if (cave.type === caveTypeEnum.Big) {
    return true;
  }

  if (cave.type === caveTypeEnum.Small) {

    if (!path.includes(cave.name)) {
      return true;
    }
    else return noSmallCavesAppearTwiceInPath(cavesInPath);
  }

  return false;
}

function buildPathsFrom(caveName, pathToCave, caves) {
  const cave = caves[caveName];
  let path = [...pathToCave, caveName];

  let pathsToEnd = [];

  if (caveName === "end") {
    //pathsToEnd.push(path);
    //return pathsToEnd;
    return 1;
  }

  const linkedCaveNames = cave.linkedCaveNames;
  let linkedCaves = linkedCaveNames.map(n => caves[n]);
  let cavesInPath = path.map(n => caves[n]);
  let eligibleLinkedCaves = linkedCaves.filter(linkedCave => isCaveEligible(linkedCave, cavesInPath, path))

  return eligibleLinkedCaves.reduce((acc, v) => acc + buildPathsFrom(v.name, path, caves), 0);

  // if (linkedCaveNames.length > 0) {
  //   linkedCaveNames.forEach(linkedCaveName => {
  //     const linkedCave = caves[linkedCaveName];
  //     if (linkedCaveName === "end") {
  //       //pathsToEnd.push(path.concat("end"));
  //       return 1;
  //     }
  //     else if (!(linkedCave.type === caveTypeEnum.Small && linkedCave.visted === true)) {//path.includes(linkedCave.name))) {
  //       pathsToEnd.push(buildPathsFrom(linkedCaveName, path, caves));
  //     }
  //   });
  // }

  //return pathsToEnd;
  return 0;
}

// function returnPathsFrom(caveName, pathToCave, caves) {
//   const cave = caves[caveName];
//   let path = [...pathToCave, caveName];

//   let pathsToEnd = [];

//   if (caveName === "end") {
//     pathsToEnd.push(path);
//     return pathsToEnd;
//   }

//   const linkedCaveNames = cave.linkedCaveNames;
//   let linkedCaves = linkedCaveNames.map(n => caves[n]);
//   let cavesInPath = path.map(n => caves[n]);
//   let eligibleLinkedCaves = linkedCaves.filter(linkedCave => isCaveEligible(linkedCave, cavesInPath, path))

//   //return eligibleLinkedCaves.reduce((acc, v) => acc + buildPathsFrom(v.name, path, caves), 0);

//   //if (eligibleLinkedCaves.length > 0 ) {
//   return eligibleLinkedCaves.reduce((acc, v) => {
//     acc.push(returnPathsFrom(v.name, path, caves));
//     return acc;
//   }, pathsToEnd);
//   //}

//   // if (linkedCaveNames.length > 0) {
//   //   linkedCaveNames.forEach(linkedCaveName => {
//   //     const linkedCave = caves[linkedCaveName];
//   //     if (linkedCaveName === "end") {
//   //       //pathsToEnd.push(path.concat("end"));
//   //       return 1;
//   //     }
//   //     else if (!(linkedCave.type === caveTypeEnum.Small && linkedCave.visted === true)) {//path.includes(linkedCave.name))) {
//   //       pathsToEnd.push(buildPathsFrom(linkedCaveName, path, caves));
//   //     }
//   //   });
//   // }

//   return pathsToEnd;
//   //return 0;
// }

// function findPaths(input) {
//   const caves = buildCaveSystem(input);

//   let paths = [];

//   paths = returnPathsFrom("start", [], caves);

//   return paths;
// }

function solve(input) {
  const caves = buildCaveSystem(input);

  let paths = [];

  paths = buildPathsFrom("start", [], caves);

  return paths;
}

module.exports = { solve };