import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios
.get ("https://api.github.com/users/NRHietala")
.then(res => {
  const data = res.data;
  const cardContainer = document.querySelector('.cards');
  cardContainer.append(gitCard(data));

})
.catch(err => {
  console.log(err)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "cmirza",
  "chrisjcorbin",
  "ChristopherCorvo",
  "ajg7",
  "JusticeMatthew"
];

// https://api.github.com/users/JusticeMatthew

followersArray.forEach( user => {
  axios
  .get(`https://api.github.com/users/${user}`)
  .then(res => {
    const data = res.data;
    const cardContainer = document.querySelector('.cards');
    cardContainer.append(gitCard(data))
  }
    )
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitCard(gitObj) {

  const { avatar_url, name, login, location, url, followers, following, bio } = gitObj

  const card = document.createElement('div');
  card.classList.add('card')

  const image = document.createElement('img');
  image.src = avatar_url;
  card.append(image);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.append(cardInfo)

  const realName = document.createElement('h3');
  realName.classList.add('name');
  realName.textContent = name;
  cardInfo.append(realName);

  const userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = login;
  cardInfo.append(userName);

  const userLocation = document.createElement('p');
  userLocation.textContent = location;
  cardInfo.append(userLocation);

  const profile = document.createElement('p');
  profile.textContent = profileLink;
  cardInfo.append(profile);

  const profileLink = document.createElement('a');
  profileLink.href = url;
  profile.appendChild(profileLink);
  // profile.textContent = url;
  

  const followerCount = document.createElement('p');
  followerCount.textContent = followers;
  cardInfo.append(followerCount);

  const followingCount = document.createElement('p');
  followingCount.textContent = following;
  cardInfo.append(followingCount);

  const biography = document.createElement('p');
  biography.textContent = bio;
  cardInfo.append(biography);


  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
