var allProducts=document.querySelectorAll(".product-item ")

// var img=document.getElementById("pimg")
// var img=document.getAttribute("src")

var content=document.querySelector("#cart")

var btn=document.querySelector("#btn-price")

var totalPrice=0

var cartp=document.getElementById("cartp")

var cartContent=document.querySelector("#cart-content")
var cartIcon=document.querySelector(".i-price")
var cartH4=document.querySelector(".h4-price")

allProducts.forEach(function(item) {
    item.onclick=function(){
        cartIcon.style.display = "inline-block"
        cartH4.style.display = "block"
        content.innerHTML+=item.textContent+("  -  ")
        totalPrice+= +(item.getAttribute("price"))
        if(content.innerHTML != ""){
            btn.style.display = "block"
        }

    }
})
btn.onclick=function(){
    cartp.innerHTML=totalPrice
}
