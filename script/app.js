async function heroSelect() {
  let response = await fetch('https://valorant-api.com/v1/agents');

  let images = await response.json();

  //Breach
  let breach = document.getElementById('breach');
  breach.innerHTML = `<img src="${images.data[0].displayIconSmall}"width = "100px"/>`;

  //Raze
  let raze = document.getElementById('raze');
  raze.innerHTML = `<img src="${images.data[1].displayIconSmall}"width = "100px"/>`;

  //KAY/O
  let kayo = document.getElementById('kayo');
  kayo.innerHTML = `<img src="${images.data[2].displayIconSmall}"width = "100px"/>`;

  //Skye
  let skye = document.getElementById('skye');
  skye.innerHTML = `<img src="${images.data[3].displayIconSmall}"width = "100px"/>`;

  //Cypher
  let cypher = document.getElementById('cypher');
  cypher.innerHTML = `<img src="${images.data[4].displayIconSmall}"width = "100px"/>`;

  //Sova
  let sova = document.getElementById('sova');
  sova.innerHTML = `<img src="${images.data[5].displayIconSmall}"width = "100px"/>`;

  //Killjoy
  let killjoy = document.getElementById('killjoy');
  killjoy.innerHTML = `<img src="${images.data[7].displayIconSmall}"width = "100px"/>`;

  //Viper
  let viper = document.getElementById('viper');
  viper.innerHTML = `<img src="${images.data[8].displayIconSmall}"width = "100px"/>`;

  //Phoenix
  let phoenix = document.getElementById('phoenix');
  phoenix.innerHTML = `<img src="${images.data[9].displayIconSmall}"width = "100px"/>`;

  //Astra
  let astra = document.getElementById('astra');
  astra.innerHTML = `<img src="${images.data[10].displayIconSmall}"width = "100px"/>`;

  //Brimstone
  let brimstone = document.getElementById('brimstone');
  brimstone.innerHTML = `<img src="${images.data[11].displayIconSmall}"width = "100px"/>`;

  //Yoru
  let yoru = document.getElementById('yoru');
  yoru.innerHTML = `<img src="${images.data[12].displayIconSmall}"width = "100px"/>`;

  //Sage
  let sage = document.getElementById('sage');
  sage.innerHTML = `<img src="${images.data[13].displayIconSmall}"width = "100px"/>`;

  //Reyna
  let reyna = document.getElementById('reyna');
  reyna.innerHTML = `<img src="${images.data[14].displayIconSmall}"width = "100px"/>`;

  //Omen
  let omen = document.getElementById('omen');
  omen.innerHTML = `<img src="${images.data[15].displayIconSmall}"width = "100px"/>`;

  //Jett
  let jett = document.getElementById('jett');
  jett.innerHTML = `<img src="${images.data[16].displayIconSmall}"width = "100px"/>`;
}

heroSelect();

// Fetch nr 6 är en bug, det är en Sova utan all sin fetch data därför hoppar den från 5 till 7
