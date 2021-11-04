let reviewPosition = 0;
const waardering = document.getElementsByClassName('reviewtext');
const totalReviews = waardering.length;

const leesMeerKnop = document.querySelector(".meerLezen");
const text = document.querySelector(".meerText");

let addedTo = 1;
const mandJe = document.getElementsByClassName('inwinkelmand');
const totaalWinkelmand = mandJe.length;
const voegToe = document.querySelector("#mand");

let sterrenVul = 1;
const waarderingSterren = document.getElementsByClassName("ster");
const sterClassActief = "ster fas fa-star";
const sterClassInactief = "ster far fa-star";
const sterrenVullen = waarderingSterren.length;

const hamburgerMenu = document.getElementsByClassName("burgermenu-stokkie");


leesMeerKnop.addEventListener("click", (e) => {
  text.classList.toggle("meerText");
  if (leesMeerKnop.innerText === "Meer") {
    leesMeerKnop.innerText = "Minder";
  } else {
    leesMeerKnop.innerText = "Meer";
  }
});

document.
  getElementById('volgendereview')
  .addEventListener("click", function() {
    moveToNextReview();
  });

document.
  getElementById('vorigereview')
  .addEventListener("click", function() {
    moveToPrevReview();
});


function updateReviewPosition(){
  for(let review of waardering) {
      review.classList.remove('visible-review');
      review.classList.add('hidden-review');
  }

  waardering[reviewPosition].classList.add('visible-review')
}


function moveToNextReview() {
  if (reviewPosition === totalReviews - 1) {
    reviewPosition = 0;
  } else {
    reviewPosition++;
  }

updateReviewPosition();
}

function moveToPrevReview() {
  if (reviewPosition === 0) {
    reviewPosition = totalReviews - 1;
  } else {
    reviewPosition--;
  }

  updateReviewPosition();
}


function updateadded(){
  console.log("werkt")
  for(let mand of mandJe) {
      mand.classList.remove('mandhidden');
      mand.classList.add('mandvisible');
  }

  mandJe[addedTo].classList.add('mandhidden')
}


voegToe.addEventListener("click", function(){
    if (added = 0) {
      console.log("hidden")
      added = totaalWinkelmand -1;
    }
    else {
      console.log("visible")
      added--;
    }

    updateadded();
});

