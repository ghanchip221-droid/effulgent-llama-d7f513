let products = JSON.parse(localStorage.getItem("products")) || []

function showProducts(list){

let html=""

list.forEach(p=>{

html += `

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button>Add to Cart</button>

</div>

`

})

document.getElementById("product-list").innerHTML=html

}

showProducts(products)

function filterCategory(cat){

if(cat=="all") showProducts(products)

else{

let filtered = products.filter(p=>p.category==cat)

showProducts(filtered)

}

}

function searchProduct(){

let text=document.getElementById("search").value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(text))

showProducts(filtered)

}
