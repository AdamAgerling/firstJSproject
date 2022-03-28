async function mapSelect() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let smallMapImage = await response.json();

  //ASCENT
  let ascent = document.getElementById('ascent');
  ascent.querySelector('img').src = smallMapImage.data[0].listViewIcon;

  //SPLIT
  let split = document.getElementById('split');
  split.querySelector('img').src = smallMapImage.data[1].listViewIcon;

  //FRACTURE
  let fracture = document.getElementById('fracture');
  fracture.querySelector('img').src = smallMapImage.data[2].listViewIcon;

  //BIND
  let bind = document.getElementById('bind');
  bind.querySelector('img').src = smallMapImage.data[3].listViewIcon;

  //BREEZE
  let breeze = document.getElementById('breeze');
  breeze.querySelector('img').src = smallMapImage.data[4].listViewIcon;

  //ICEBOX
  let icebox = document.getElementById('icebox');
  icebox.querySelector('img').src = smallMapImage.data[5].listViewIcon;

  //THE RANGE
  let theRange = document.getElementById('the-range');
  theRange.querySelector('img').src = smallMapImage.data[6].listViewIcon;

  //HAVEN
  let haven = document.getElementById('haven');
  haven.querySelector('img').src = smallMapImage.data[7].listViewIcon;
  console.log(smallMapImage);
}
mapSelect();

//     ASCENT

async function mapOne() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[0].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[0].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[0].displayName}`;
}
document.getElementById('ascent').addEventListener('click', mapOne);

//     SPLIT

async function mapTwo() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[1].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[1].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[1].displayName}`;
}
document.getElementById('split').addEventListener('click', mapTwo);

//     FRACTURE

async function mapThree() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[2].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[2].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[2].displayName}`;
}
document.getElementById('fracture').addEventListener('click', mapThree);

//     BIND

async function mapFour() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[3].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[3].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[3].displayName}`;
}
document.getElementById('bind').addEventListener('click', mapFour);

//     BREEZE

async function mapFive() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[4].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[4].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[4].displayName}`;
}
document.getElementById('breeze').addEventListener('click', mapFive);

//     ICEBOX

async function mapSix() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[5].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[5].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[5].displayName}`;
}
document.getElementById('icebox').addEventListener('click', mapSix);

//     THE RANGE

async function mapSeven() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[6].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[6].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[6].displayName}`;
}
document.getElementById('the-range').addEventListener('click', mapSeven);

//     HAVEN

async function mapEight() {
  let response = await fetch('https://valorant-api.com/v1/maps');

  let imageData = await response.json();

  //BACKGROUND MAP IMAGE
  let backgroundImage = document.getElementById('background-image');
  backgroundImage.querySelector('img').src = imageData.data[7].splash;

  // MINIMAP IMAGE
  let miniMap = document.getElementById('minimap');
  miniMap.querySelector('img').src = imageData.data[7].displayIcon;

  // MAP NAME
  let mapName = document.getElementById('map-name');
  mapName.innerText = `${imageData.data[7].displayName}`;
}
document.getElementById('haven').addEventListener('click', mapEight);
