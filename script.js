var buttonsPlus = Array.from(document.getElementsByClassName("add"));
// console.log(buttonsPlus);

for (let btnPlus of buttonsPlus) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    somme()
  });
}

var buttonsMinus = Array.from(document.getElementsByClassName("minus"));

for (let i = 0; i < buttonsPlus.length; i++) {
  buttonsMinus[i].addEventListener("click", function () {
    if (buttonsMinus[i].previousElementSibling.innerText > 0)
      buttonsMinus[i].previousElementSibling.innerText--;
    somme()
  });
}


let trash = document.getElementsByClassName("fa-trash-alt");

for (let btnTrash of trash) {
  btnTrash.addEventListener("click", function () {
    btnTrash.parentNode.remove();
    somme()
  });
}

let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {

    // heart.classList.toggle("red");

    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}

 function somme (){
  let s=0;
 let Array = document.getElementsByClassName("price");
  let Array1 = document.getElementsByClassName("qte");
  for (let i=0 ;i<Array.length; i++){
    s+= Array[i].innerHTML * Array1[i].innerHTML;
  }
  document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + s;
}