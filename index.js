const people = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
];

const fundVoters = prompt("Find voters").toLowerCase();
const content = document.getElementById("container");

function namesFinder(parent, child) {
  parent.appendChild(child);
}

function addVoters(userVote, promptFind) {
  let found = false;
  for (let i = 0; i < userVote.length; i++) {
    if (userVote[i][0].toLowerCase() === promptFind) {
      found = true;
      const voterDiv = document.createElement("div");
      voterDiv.classList.add("voter-info");

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("name");
      nameDiv.innerText = userVote[i][0];
      voterDiv.appendChild(nameDiv);

      if (userVote[i][1]) {
        const votedDiv = document.createElement("div");
        votedDiv.classList.add("voted");
        votedDiv.innerText = "Voted!";
        voterDiv.appendChild(votedDiv);

        const numDiv = document.createElement("div");
        numDiv.classList.add("votes");
        numDiv.innerText = userVote[i][2];
        voterDiv.appendChild(numDiv);
      } else {
        const notVotedDiv = document.createElement("div");
        notVotedDiv.classList.add("votes");
        notVotedDiv.innerText = "Did not vote";
        voterDiv.appendChild(notVotedDiv);
      }

      content.appendChild(voterDiv);

      if (promptFind === "darko") {
        const antonioDiv = document.getElementById("antonio");
        antonioDiv.style.display = "none";
      }
    }
  }

  if (!found) {
    const notFoundDiv = document.createElement("div");
    notFoundDiv.classList.add("voter-info");
    notFoundDiv.innerText = "Name not found";
    content.appendChild(notFoundDiv);
  }
}

addVoters(people, fundVoters);
