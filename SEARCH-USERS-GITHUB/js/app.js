const url = `https://api.github.com/users/`;

///

const btnsearch = document.getElementById("btn-search");
const inputsearch = document.getElementById("input-search");
const overly = document.getElementById("overly");
const changelyout = document.getElementById("change-lyout");
const srcimg = document.getElementById("src-img");

//// 

const image = document.getElementById("img-user");
const nameuser = document.getElementById("name-user");
const datetime = document.getElementById("date-time");
const biouser = document.getElementById("bio-user");
const smalluser = document.getElementById("small-user");
const repouser = document.getElementById("repos-user");
const followersuser = document.getElementById("followers-user");
const followinguser = document.getElementById("following-user");
const locationuser = document.getElementById("location-user");
const bloguser = document.getElementById("blog-user");
const twitteruser = document.getElementById("twitter-user");
const companyuser = document.getElementById("company-user");

///

inputsearch.value = "kamranahmedse";

///

async function ftechGetData() {
  await fetch(`${url}${inputsearch.value}`, {})
    .then((res) => res.json())
    .then((res) => {
      if (res.message) {
        alert(
          "this user not found \n this user he par default ' kamranahmedse :) ' "
        );
        inputsearch.value = "kamranahmedse";
        ftechGetData();
        return;
      }
      image.src = !res.avatar_url
        ? "This profile has not image "
        : res.avatar_url;
      nameuser.textContent = !res.name ? "This profile has not name" : res.name;
      datetime.textContent = res.created_at;
      biouser.textContent = !res.bio ? "This profile has not bio " : res.bio;
      smalluser.textContent = `@${res.login}`;
      repouser.textContent = res.public_repos;
      followersuser.textContent = res.followers;
      followinguser.textContent = res.following;
      locationuser.textContent = !res.location
        ? "This profile has not location"
        : res.location;
      bloguser.textContent = !res.blog ? "This profile has not blog" : res.blog;
      twitteruser.textContent = !res.twitter_username
        ? "This profile has not twitter"
        : `@${res.twitter_username}`;
      companyuser.textContent = !res.company
        ? "This profile has not company "
        : res.company;
      overly.classList.remove("overly");
    })
    .catch((error) => {
      console.log(error);
      console.error(error);
    });
}

///

const changeLyout = ({ a, b, c, d, e, f, g, name, src }) => {
  srcimg.src = src;
  srcimg.previousElementSibling.textContent = name;
  document.documentElement.style.setProperty("--BC-BODY", a);
  document.documentElement.style.setProperty("--BC-USER", b);
  document.documentElement.style.setProperty("--CB", c);
  document.documentElement.style.setProperty("--CH", d);
  document.documentElement.style.setProperty("--C", e);
  document.documentElement.style.setProperty("--P", f);
  document.documentElement.style.setProperty("--CL", g);
};

///
changelyout.addEventListener("click", (e) => {
  if (srcimg.previousElementSibling.textContent === "mode") {
    return changeLyout({
      a: "#141c2f",
      b: "#1f2a48",
      c: "rgb(1, 8, 29)",
      d: "#121a2d",
      e: "#e3e3e3",
      f: "rgb(10 10 10)",
      g: "#9ca1a8",
      name: "light",
      src: "./images/solid-black-sun-symbol.png",
    });
  }
  changeLyout({
    a: "#fafafa",
    b: "#f0f2f4",
    c: "#efefef",
    d: "rgb(10 10 10)",
    e: "#141c2f",
    f: "#5e5e5e",
    g: "#efefef",
    name: "mode",
    src: "./images/night-mode.png",
  });
});

///

btnsearch.addEventListener("click", (e) => {
  if (!inputsearch.value) return;
  overly.classList.add("overly");
  ftechGetData();
});

ftechGetData();
