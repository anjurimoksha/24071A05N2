let cart = JSON.parse(localStorage.getItem("cart") || "[]");
/* Save Cart */
function saveCart(){
 localStorage.setItem("cart", JSON.stringify(cart));
}
/* Show Cart Count */
function showCount(){
 let c = document.getElementById("count");
 if(c) c.innerText = cart.length;
}
/* Register Validation */
function registerUser(){
 let u = document.getElementById("ruser").value.trim();
 let p = document.getElementById("rpass").value.trim();
 if(u === "" || p === ""){
 alert("All fields are required!");
 return;
 }
 if(p.length < 4){
 alert("Password must be at least 4 characters!");
 return;
 }
 localStorage.setItem("user",u);
 localStorage.setItem("pass",p);
 alert("Registered Successfully!");
 window.location.href="index.html";
}
/* Login Validation */
function loginUser(){
 let u = document.getElementById("luser").value.trim();
 let p = document.getElementById("lpass").value.trim();
 if(u === "" || p === ""){
 alert("Please enter username and password!");
 return;
 }
 if(u === localStorage.getItem("user") &&
 p === localStorage.getItem("pass")){
 alert("Login Successful!");
 window.location.href="catalog.html";
 } else {
 alert("Invalid Login!");
 }
}
/* Products */
const products = [
{name:"Shoes", price:999, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg"},
{name:"Bag", price:499, img:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"},
{name:"Watch", price:1299, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49"},
{name:"T-Shirt", price:299, img:"https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg"}
];
/* Load Catalog */
function loadCatalog(){
 showCount();
 let items = document.getElementById("items");
 items.innerHTML = products.map((p,i)=>`
 <div class="col-md-3 mb-3">
 <div class="card p-2 text-center">
 <img src="${p.img}" class="img-fluid mb-2" style="height:150px;object-fit:cover">
 <h6>${p.name}</h6>
 <p>Rs. ${p.price}</p>
 <button class="btn btn-primary btn-sm" onclick="addToCart(${i})">Add</button>
 </div>
 </div>
 `).join('');
}
/* Add To Cart */
function addToCart(i){
 cart.push(products[i]);
 saveCart();
 showCount();
 alert("Item added to cart!");
}
/* Load Cart */
function loadCart(){
 showCount();
 let box = document.getElementById("cartItems");
 box.innerHTML = cart.map((c,i)=>`
 <div class="d-flex justify-content-between border p-2 mb2">
 <span>${c.name}</span>
 <span>Rs. ${c.price}</span>
 <button class="btn btn-danger btn-sm" onclick="removeItem(${i})">X</button>
 </div>
 `).join('');
}
/* Remove Item */
function removeItem(i){
 cart.splice(i,1);
 saveCart();
 loadCart();
}
/* Checkout */
function checkout(){
 if(cart.length === 0){
 alert("Cart is empty!");
 return;
 }
 alert("Checked out " + cart.length + " items!");
 cart = [];
 saveCart();
 loadCart();
}
