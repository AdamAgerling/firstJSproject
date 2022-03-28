//           BREACH

async function heroOne() {
  let response = await fetch('https://valorant-api.com/v1/agents');

  let info = await response.json();

  // Hero Text
  let heroDescription = document.getElementById('hero-desc');
  let heroName = document.getElementById('hero-name');

  // Ability name and description

  let heroAbility1Name = document.getElementById('ability1-name');
  let heroAbility1Desc = document.getElementById('ability1-desc');

  let heroAbility2Name = document.getElementById('ability2-name');
  let heroAbility2Desc = document.getElementById('ability2-desc');

  let heroAbility3Name = document.getElementById('ability3-name');
  let heroAbility3Desc = document.getElementById('ability3-desc');

  let heroAbility4Name = document.getElementById('ability4-name');
  let heroAbility4Desc = document.getElementById('ability4-desc');

  // Ability Images
  let imageAbility1 = document.getElementById('ability1-img');
  let imageAbility2 = document.getElementById('ability2-img');
  let imageAbility3 = document.getElementById('ability3-img');
  let imageAbility4 = document.getElementById('ability4-img');

  // Hero fullportrait image
  let heroPortrait = document.getElementById('hero-picture');

  //Hero text to html
  heroName.innerText = `${info.data[0].displayName}`;
  heroDescription.innerText = `${info.data[0].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[0].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[0].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[0].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[0].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[0].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[0].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[0].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[0].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[0].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[0].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[0].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[0].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[0].fullPortrait}"width = "500px"/>`;

  console.log(info.data[0]);
}

document.getElementById('breach').addEventListener('click', heroOne);

//           RAZE

async function heroTwo() {
  let response = await fetch('https://valorant-api.com/v1/agents');

  let info = await response.json();

  // Hero Text
  let heroDescription = document.getElementById('hero-desc');
  let heroName = document.getElementById('hero-name');

  // Ability name and description

  let heroAbility1Name = document.getElementById('ability1-name');
  let heroAbility1Desc = document.getElementById('ability1-desc');

  let heroAbility2Name = document.getElementById('ability2-name');
  let heroAbility2Desc = document.getElementById('ability2-desc');

  let heroAbility3Name = document.getElementById('ability3-name');
  let heroAbility3Desc = document.getElementById('ability3-desc');

  let heroAbility4Name = document.getElementById('ability4-name');
  let heroAbility4Desc = document.getElementById('ability4-desc');

  // Ability Images
  let imageAbility1 = document.getElementById('ability1-img');
  let imageAbility2 = document.getElementById('ability2-img');
  let imageAbility3 = document.getElementById('ability3-img');
  let imageAbility4 = document.getElementById('ability4-img');

  // Hero fullportrait image
  let heroPortrait = document.getElementById('hero-picture');

  //Hero text to html
  heroName.innerText = `${info.data[1].displayName}`;
  heroDescription.innerText = `${info.data[1].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[1].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[1].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[1].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[1].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[1].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[1].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[1].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[1].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[1].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[1].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[1].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[1].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[1].fullPortrait}"width = "500px"/>`;

  console.log(info.data[1]);
}

document.getElementById('raze').addEventListener('click', heroTwo);

//              KAY/O

async function heroThree() {
  let response = await fetch('https://valorant-api.com/v1/agents');

  let info = await response.json();

  // Hero Text
  let heroDescription = document.getElementById('hero-desc');
  let heroName = document.getElementById('hero-name');

  // Ability name and description

  let heroAbility1Name = document.getElementById('ability1-name');
  let heroAbility1Desc = document.getElementById('ability1-desc');

  let heroAbility2Name = document.getElementById('ability2-name');
  let heroAbility2Desc = document.getElementById('ability2-desc');

  let heroAbility3Name = document.getElementById('ability3-name');
  let heroAbility3Desc = document.getElementById('ability3-desc');

  let heroAbility4Name = document.getElementById('ability4-name');
  let heroAbility4Desc = document.getElementById('ability4-desc');

  // Ability Images
  let imageAbility1 = document.getElementById('ability1-img');
  let imageAbility2 = document.getElementById('ability2-img');
  let imageAbility3 = document.getElementById('ability3-img');
  let imageAbility4 = document.getElementById('ability4-img');

  // Hero fullportrait image
  let heroPortrait = document.getElementById('hero-picture');

  //Hero text to html
  heroName.innerText = `${info.data[2].displayName}`;
  heroDescription.innerText = `${info.data[2].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[2].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[2].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[2].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[2].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[2].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[2].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[2].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[2].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[2].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[2].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[2].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[2].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[2].fullPortrait}"width = "500px"/>`;

  console.log(info.data[2]);
}

document.getElementById('kayo').addEventListener('click', heroThree);

//                   SKYE

async function heroFour() {
  let response = await fetch('https://valorant-api.com/v1/agents');

  let info = await response.json();

  // Hero Text
  let heroDescription = document.getElementById('hero-desc');
  let heroName = document.getElementById('hero-name');

  // Ability name and description

  let heroAbility1Name = document.getElementById('ability1-name');
  let heroAbility1Desc = document.getElementById('ability1-desc');

  let heroAbility2Name = document.getElementById('ability2-name');
  let heroAbility2Desc = document.getElementById('ability2-desc');

  let heroAbility3Name = document.getElementById('ability3-name');
  let heroAbility3Desc = document.getElementById('ability3-desc');

  let heroAbility4Name = document.getElementById('ability4-name');
  let heroAbility4Desc = document.getElementById('ability4-desc');

  // Ability Images
  let imageAbility1 = document.getElementById('ability1-img');
  let imageAbility2 = document.getElementById('ability2-img');
  let imageAbility3 = document.getElementById('ability3-img');
  let imageAbility4 = document.getElementById('ability4-img');

  // Hero fullportrait image
  let heroPortrait = document.getElementById('hero-picture');

  //Hero text to html
  heroName.innerText = `${info.data[3].displayName}`;
  heroDescription.innerText = `${info.data[3].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[3].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[3].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[3].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[3].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[3].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[3].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[3].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[3].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[3].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[3].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[3].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[3].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[3].fullPortrait}"width = "500px"/>`;

  console.log(info.data[3]);
}

document.getElementById('skye').addEventListener('click', heroFour);
