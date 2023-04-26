
//Declaration
const sideMenu = document.getElementById('side');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const themeToggler = document.getElementById('theme-toggler');

//Open/Close side bar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
});
/* 
//----------Night and Day Mode-----------
themeToggler.addEventListener('click', () => {
  let element = document.body;
  element.classList.toggle("dark-mode");

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});
*/

// ------------RECENT TRANSACTIONS----------
// Orders
/*
const Orders = [
  {
    productCode: '',
    productName: '',
    productNumber: '',
    amout: ''
  },
  {
    productCode: '',
    productName: '',
    productNumber: '',
    amout: ''
  }
];

// Fill in order

Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
                        <td>${order.productCode}</td>
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.amout}</td>
  `
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})
 */






















