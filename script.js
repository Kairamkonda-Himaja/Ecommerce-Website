
function addedToCart(){
    window.confirm("Congragulations..!! Your item is Added to cart");
}
function like(){
    var btn=document.getElementById("heart");
    console.log(btn.style.color);
    if(btn.style.color=="white"){
        btn.style.color=="red";
    }
    else{
        btn.style.color=="White";
    }
    window.confirm("liked");

}

