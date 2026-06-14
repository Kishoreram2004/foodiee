function getCart() { 
    return parseInt(localStorage.getItem('cartCount')||'0')
}
function setCart(n) {
     localStorage.setItem('cartCount', n);
}

function renderNav(activePage) {

    const cart =getCart()
    const shopHref = activePage ==='home'? 'pages/listing.html': 'listing.html'
    const indexHref = activePage === 'home' ?'index.html': '../index.html'


  return `
  <nav class="navbar">

    <a href="${indexHref}" class="logo">
      <div class="logo-icon">F</div>
      foodiee
    </a>

    <div class="nav-links">
      <a href="${shopHref}" class="has-arrow">Shop</a>
      <a href="${shopHref}" class="has-arrow">Categories</a>
      <a href="#" class="has-arrow">Offers</a>
      <a href="#">Contact</a>
    </div>


    <div class="nav-icons">
      <span>🔍</span>
      <span>♡</span>
      <div class="cart-wrap">
        <span>🛍</span>
        <div class="cart-count" id="cartCount"> ${cart}</div>
      </div>
    </div>
  </nav>`;
}

function stars(rating) {

    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}
