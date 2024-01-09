const Text= document.getElementById("textarea");
function f1(e) {
    let Value= e.value;
    Text.style.fontSize = Value+"px";

}
function f2(e){
    if(Text.style.fontWeight=="bold"){
        Text.style.fontWeight="normal";
        e.classList.remove("active");
    }
    else{
        Text.style.fontWeight="bold";
        e.classList.add("active");
    }
}
function f3(e){
    if(Text.style.fontStyle=="italic"){
        Text.style.fontStyle="normal";
        e.classList.remove("active");
    }
    else{
        Text.style.fontStyle="italic";
        e.classList.add("active");
    }
}
function f4(e){
    if(Text.style.textDecoration=="underline"){
        Text.style.textDecoration="none";
        e.classList.remove("active");
    }
    else{
        Text.style.textDecoration="underline";
        e.classList.add("active");
    }
}
function f5(e){
    Text.style.textAlign="center";
}
function f6(e){
    Text.style.textAlign="left";
}
function f7(e){
    Text.style.textAlign="right";
}
function f8(e){
    if(Text.style.textTransform=="uppercase"){
        Text.style.textTransform="none";
        e.classList.remove("active");
    }
    else{
        Text.style.textTransform="uppercase";
        e.classList.add("active");
    }
}
function f9(e){
    Text.style.textAlign="left";
    Text.style.fontWeight="normal";
    Text.style.fontStyle="normal";
    Text.style.textTransform=="capitalize";
    Text.style.textDecoration="none";
    Text.value="";
}
function f10(e){
   let val=e.value;
   Text.style.color=val;
}