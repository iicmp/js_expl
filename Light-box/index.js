function displayN(n){
    document.querySelector(".secondpage").style.display="block";
    document.getElementById("a"+n).style.zIndex=6;
    document.getElementById("b"+n).style.filter=brightness("100%");

}