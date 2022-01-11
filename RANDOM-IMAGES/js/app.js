const numGenerate = 10;
const url = `https://dog.ceo/api/breeds/image/random`;

///

async function ftechGetData() {
  await fetch(`${url}`, {})
    .then((res) => res.json())
    .then((res) => {
      let img = document.createElement("img");
      img.src = res.message;
      console.log(img);
      document.body.append(img);
    })
    .catch((error) => {
      console.log(error);
    });
}

///

(() => {
  let loding = [...document.getElementsByClassName("loding")];
  for (let i = 0; i < numGenerate; i++) {
    console.log(i);
    ftechGetData();
    if (i === numGenerate - 1) loding[0].remove();
  }
})();
