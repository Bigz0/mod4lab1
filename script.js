const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
addProductButton .addEventListener('click', function(e){
if (productNameInput.value === "" || productPriceInput.value==="") {
  alert("please provide a name and price")
  return
}
    let li = document.createElement('li')
    li.textContent = productNameInput.value
    li.dataset.price=parseFloat(productPriceInput.value)
    cart.appendChild(li)
    updateTotalPrice(parseFloat(productPriceInput.value))
}
)

cart.addEventListener("click" , function(e){
  removeItem(e)
})