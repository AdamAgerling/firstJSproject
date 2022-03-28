//              SAGE

async function heroThirteen() {
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
  heroName.innerText = `${info.data[13].displayName}`;
  heroDescription.innerText = `${info.data[13].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[13].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[13].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[13].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[13].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[13].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[13].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[13].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[13].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[13].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[13].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[13].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[13].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[13].fullPortrait}"width = "500px"/>`;

  console.log(info.data[13]);
}

document.getElementById('sage').addEventListener('click', heroThirteen);

//              REYNA

async function heroFourteen() {
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
  heroName.innerText = `${info.data[14].displayName}`;
  heroDescription.innerText = `${info.data[14].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[14].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[14].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[14].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[14].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[14].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[14].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[14].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[14].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[14].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[14].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[14].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[14].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[14].fullPortrait}"width = "500px"/>`;

  console.log(info.data[14]);
}

document.getElementById('reyna').addEventListener('click', heroFourteen);

//              OMEN

async function heroFifteen() {
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
  heroName.innerText = `${info.data[15].displayName}`;
  heroDescription.innerText = `${info.data[15].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[15].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[15].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[15].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[15].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[15].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[15].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[15].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[15].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[15].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[15].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[15].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[15].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[15].fullPortrait}"width = "500px"/>`;

  console.log(info.data[15]);
}

document.getElementById('omen').addEventListener('click', heroFifteen);

//              JETT

async function heroSixteen() {
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
  heroName.innerText = `${info.data[16].displayName}`;
  heroDescription.innerText = `${info.data[16].description}`;

  // Ability desc and name to html
  heroAbility1Name.innerText = `${info.data[16].abilities[0].displayName}`;
  heroAbility1Desc.innerText = `${info.data[16].abilities[0].description}`;

  heroAbility2Name.innerText = `${info.data[16].abilities[1].displayName}`;
  heroAbility2Desc.innerText = `${info.data[16].abilities[1].description}`;

  heroAbility3Name.innerText = `${info.data[16].abilities[2].displayName}`;
  heroAbility3Desc.innerText = `${info.data[16].abilities[2].description}`;

  heroAbility4Name.innerText = `${info.data[16].abilities[3].displayName}`;
  heroAbility4Desc.innerText = `${info.data[16].abilities[3].description}`;

  //Ability images to html
  imageAbility1.innerHTML = `<img src="${info.data[16].abilities[0].displayIcon}"width = "100px"/>`;
  imageAbility2.innerHTML = `<img src="${info.data[16].abilities[1].displayIcon}"width = "100px"/>`;
  imageAbility3.innerHTML = `<img src="${info.data[16].abilities[2].displayIcon}"width = "100px"/>`;
  imageAbility4.innerHTML = `<img src="${info.data[16].abilities[3].displayIcon}"width = "100px"/>`;

  //Fullportrait to html
  heroPortrait.innerHTML = `<img src="${info.data[16].fullPortrait}"width = "500px"/>`;

  console.log(info.data[16]);
}

document.getElementById('jett').addEventListener('click', heroSixteen);
