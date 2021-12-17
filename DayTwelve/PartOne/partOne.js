
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
        linkedCaveNames: []
      }
    }

    if (!caves[linkedCaveName]) {
      caves[linkedCaveName] = {
        name: linkedCaveName,
        linkedCaveNames: []
      }
    }

    caves[startCaveName].linkedCaveNames.push(linkedCaveName);
    caves[startCaveName].type = (startCaveName === startCaveName.toLowerCase()) ? caveTypeEnum.Small : caveTypeEnum.Big;

    caves[linkedCaveName].linkedCaveNames.push(startCaveName);
    caves[linkedCaveName].type = (linkedCaveName === linkedCaveName.toLowerCase()) ? caveTypeEnum.Small : caveTypeEnum.Big;
  }

  return caves;
}

function countPathsFrom(caveName, pathToCave, caves) {
  const cave = caves[caveName];
  let path = [...pathToCave, caveName];


  let pathsToEnd = [];

  if (caveName === "end") { 
   //pathsToEnd.push(path);
    //return pathsToEnd;
    return 1;
  }

  const linkedCaveNames = cave.linkedCaveNames;
  let eligibleLinkedCaves = linkedCaveNames.filter(c => {
    const linkedCave = caves[c];
    return !(linkedCave.type === caveTypeEnum.Small && path.includes(linkedCave.name));
  })

  return eligibleLinkedCaves.reduce((acc, v) => acc + countPathsFrom(v, path, caves), 0);

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

function solve(input) {
  const caves = buildCaveSystem(input);

  let paths = [];

  paths = countPathsFrom("start", [], caves);

  return paths;
}

module.exports = { solve };