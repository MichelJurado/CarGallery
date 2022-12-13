//Start lambo class javascript

//slide javascript
var slideIndexLamborgini = 1;
showDivs(slideIndexLamborgini);

function plusDivs(n) {
  showDivs(slideIndexLamborgini += n);
}

function currentDiv(n) {
  showDivs(slideIndexLamborgini = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndexLamborgini = 1}
  if (n < 1) {slideIndexLamborgini = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexLamborgini-1].style.display = "flex";  
  x[slideIndexLamborgini-1].style.justifyContent = "space-around"; 
  x[slideIndexLamborgini-1].style.alignItems = "center"; 
  x[slideIndexLamborgini-1].style.flexDirection = "column";
}

//picture javascript
document.querySelectorAll('.Lamborgini img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

//End lambo class JS

//Start rolls royce class javascript

var slideIndexrollsroyce= 1;
showDivs1(slideIndexrollsroyce);

function plusDivs1(n) {
  showDivs1(slideIndexrollsroyce += n);
}

function currentDiv1(n) {
  showDivs(slideIndexrollsroyce = n);
}

function showDivs1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  if (n > x.length) {slideIndexrollsroyce = 1}
  if (n < 1) {slideIndexrollsroyce = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexrollsroyce-1].style.display = "flex";  
  x[slideIndexrollsroyce-1].style.justifyContent = "space-around"; 
  x[slideIndexrollsroyce-1].style.alignItems = "center";   
  x[slideIndexrollsroyce-1].style.flexDirection = "column";
}

//picture javascript
document.querySelectorAll('.rollsroyce img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

//End rolls royce JS

//Start ferrari class javascript

var slideIndexFerrari= 1;
showDivs2(slideIndexFerrari);

function plusDivs2(n) {
  showDivs2(slideIndexFerrari += n);
}

function currentDiv2(n) {
    showDivs2(slideIndexFerrari = n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndexFerrari = 1}
  if (n < 1) {slideIndexFerrari = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexFerrari-1].style.display = "flex";  
  x[slideIndexFerrari-1].style.justifyContent = "space-around"; 
  x[slideIndexFerrari-1].style.alignItems = "center";
  x[slideIndexFerrari-1].style.flexDirection = "column";   
  
}

//picture javascript
document.querySelectorAll('.Ferrari img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

//End ferrari class JS

//Start dodge class javascript

var slideIndexDodge= 1;
showDiv3(slideIndexDodge);

function plusDiv3(n) {
  showDiv3(slideIndexDodge += n);
}

function currentDiv3(n) {
    showDiv3(slideIndexDodge = n);
}

function showDiv3(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndexDodge = 1}
  if (n < 1) {slideIndexDodge = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexDodge-1].style.display = "flex";  
  x[slideIndexDodge-1].style.justifyContent = "space-around"; 
  x[slideIndexDodge-1].style.alignItems = "center";   
  x[slideIndexDodge-1].style.flexDirection = "column"; 
}

//picture javascript
document.querySelectorAll('.Mopar img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

//End dodge class JS

//////////////////////////////


function refreshpage(){
    location.reload();
}

//Show all
filterSelection("all")
function filterSelection(c){
    var x,i;
    x = document.getElementsByClassName("filterDiv");
    if(c == "all") c = "";
    //Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for(i = 0; i < x.length; i++){
        RemoveClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) AddClass(x[i],"show");
    }
}

//Show filtered elements
function AddClass(element, name){
    var i,arr1,arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

//Hide elements that are not selected
function RemoveClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//Add active class to the current button(when highlighted)
var btn = document.getElementById("myBtnContainer");
var btns = btn.getElementsByClassName("btn");
for (var i =0; i < btns.length; i++){
    btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active";
    });
}




