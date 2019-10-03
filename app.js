let cat = {
  petCount: 0,
  name: "Mr. Snibbly",
  currentMood: "happy",
  moods: {
    happy:
      "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9",
    irritated:
      "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs=",
    bitey:
      "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6",
    bloodThirsty:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS"
  }
};

function drawCat() {
  checkMood();
  let petCountElem = document.getElementById("cat-petcount");
  let nameElem = document.getElementById("cat-name");
  let moodElem = document.getElementById("cat-mood");
  let imageElem = document.getElementById("cat-img");

  // @ts-ignore
  imageElem.src = cat.moods[cat.currentMood];
  moodElem.innerText = cat.currentMood;
  petCountElem.textContent = cat.petCount.toString();
  nameElem.textContent = cat.name;
}
function pet() {
  cat.petCount++;
  drawCat();
}

function giveCatnip() {
  if (cat.petCount == 0) {
    alert("The cat is already doped up");
  }
  cat.petCount -= 10;
  if (cat.petCount < 0) {
    cat.petCount = 0;
  }
  drawCat();
}

//NOTE if the cat has been pet 10 times, it should become irritated
function checkMood() {
  if (cat.petCount >= 30) {
    cat.currentMood = "bloodThirsty";
  } else if (cat.petCount >= 20) {
    cat.currentMood = "bitey";
  } else if (cat.petCount >= 10) {
    cat.currentMood = "irritated";
  } else {
    cat.currentMood = "happy";
  }
}

drawCat();
