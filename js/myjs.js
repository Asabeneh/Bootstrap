
var d = new Date();
var dd = d.getDate();
var dm =d.getMonth() + 1;
var dy =d.getFullYear();

var x = dd + "-"  + dm + "-"  + dy ;
console.log(x);



document.getElementById("demo").innerHTML = x ;
 
/* 
document.getElementById("demo").innerHTML = dd +'\n'+ "-"  + dm +'\n'+ "-"  + dy ; */
 

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var h = new Date();
    document.getElementById("hour").innerHTML = h.toLocaleTimeString();
};
 


function validateForm() {
    var x = parseInt(document.forms["myForm"]["agename"].value);
    if (x <= 18) {
        alert("Age must be 18 and above");
        return false;
    }
}


function myFunction() {
var inputText = document.getElementById('textbox_id').value;
    var newItem = document.createElement("li");
    var textnode = document.createTextNode(inputText);
    newItem.appendChild(textnode);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);

}



document.addEventListener("mouseover", mouseoverFunction);


function mouseoverFunction() {
    document.getElementById("firstProj").innerHTML += "Moused over!<br>"
}





/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


 */