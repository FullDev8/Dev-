

// ---------------------------Function Cart----------------------------------

//-------------------------PRODUCT-----------------//

/*
// Making function
function ready() {
  // Remove items from cart
  let removeCartButtons = document.getElementsByClassName('delete-icon');
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++){
    let button = removeCartButtons[i]
    button.addEventListener('click',removeCartItem);
  }

  // Quantity changes
  let quantityInputs = document.getElementsByClassName('cart-quantity');
  for (let i=0; i < quantityInputs.length; i++){
    let input = quantityInputs[i];
    input.addEventListener('change', quantityChanged);
  }
  
  // Add to cart
  let addCart = document.getElementsByClassName('add-to-cart');
  for (let i=0; i < addCart.length; i++){
    let button = addCart[i]
    button.addEventListener('click', addCartClicked);
  }

  // Print button work
  //document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
  let printProduct = document.getElementsByClassName('btn-buy')[0];
  printProduct.onclick = buyButtonClicked;
}

// Buy button
function buyButtonClicked(){
  alert('Your order is placed');
  //document.getElementById('customer-name').value = '';
  let cartContent = document.getElementsByClassName('cart-content')[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// Remove items from cart
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Quantity changes
function quantityChanged(event){
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

// Add to cart
function addCartClicked(event){
  let button = event.target;
  let shopProducts = button.parentElement;
  let title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  let price = shopProducts.getElementsByClassName('product-price')[0].innerText;
  let productImg = shopProducts.getElementsByClassName('product-photo')[0].src;
  let productSize = shopProducts.getElementsByClassName('product-size')[0].innerText;
  addProductToCart(title, price, productImg, productSize);


  updatetotal();
}

function addProductToCart(title, price, productImg, productSize) {
  let cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box')
  let cartItems = document.getElementsByClassName('cart-content')[0];
  let cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
  
  for (let i = 0; i < cartItemsNames.length;  i++) {
    if (cartItemsNames[i].innerText == title){
      alert('You have already add this to cart');
      return;
    }
   }

let cartBoxContent = `                         
                            <img src="${productImg}" alt="" class="product-picture" />
                            <div class="detail-box">
                              <h3 id="title" class="cart-product-title">${title}</h3>
                              <div id="size" class="cart-size">${productSize}</div>
                              <div id="price" class="cart-price">${price}</div>
                              <input id="quantity" type="number" value="1" class="cart-quantity">
                            </div>
                            <!---Remove cart-->
                            <img class="delete-icon" src="products-icons/delete.png">
                      `;
                  
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox)
  cartShopBox.getElementsByClassName('delete-icon')[0].addEventListener('click', removeCartItem);
  cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
}

// Update total
function updatetotal() {
  let cartContent = document.getElementsByClassName('cart-content')[0]
  let cartBoxes = cartContent.getElementsByClassName('cart-box')
  let total = 0;
  for (let i = 0; i < cartBoxes.length; i++){
    let cartBox = cartBoxes[i]
    let priceElement = cartBox.getElementsByClassName('cart-price')[0]
    let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
    let price = parseFloat(priceElement.innerText.replace('₱', ''));
    let quantity = quantityElement.value
    total = total + (price * quantity);
  }
    // If price contain some cents value
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = '₱' + total;
};
*/