
/* 
// MODEL
let customers = [{
  name: 'Ivan Vispo',
	phone: '09293568384',
	email: 'ivanvispo@email.com',
	address: 'darasa',
	id: 'id1'
}];

render();

// Creates a customer
function createCustomer(fullName, phoneNumber, emailAddress, addressLocation) {
	const id = '' + new Date().getTime();

  customers.push({
    name: fullName,
    phone: phoneNumber,
		email: emailAddress,
		address: addressLocation,
    id: id
  });
}

// Deletes a customer
function removeCustomer(idToDelete) {
	customers = customers.filter(function (cus) {
		// If the id of this todo matches idToDelete, return false
		// For everything else, return true
			if (cus.id === idToDelete) {
				return false;
			} else {
				return true;
			}
		});
}

// CONTROLLER
function addCustomer() {
	const name = document.getElementById('name');
  const fullName = name.value;
  
	const phone = document.getElementById('phone');
  const phoneNumber = phone.value;

	const email = document.getElementById('email');
  const emailAddress = email.value;

	const address = document.getElementById('address');
  const addressLocation = address.value;

  createCustomer(fullName, phoneNumber, emailAddress, addressLocation);
      
  render();
}

// Delete button
function deleteBtn(event) {
	const deleteButton = event.target;
  const idToDelete = deleteButton.id

	removeCustomer(idToDelete);

  render();
}

// VIEW
function render() {
	// reset the list
	document.getElementById('customer-data').innerHTML = '';

	customers.forEach(function (cus){
		const tableRow = document.createElement('tr');
		tableRow.innerHTML = `
									<td>${cus.name}</td>
									<td>${cus.phone}</td>
									<td>${cus.email}</td>
									<td>${cus.address}</td>
`;
		// Create deleteButton element
		const deleteButton = document.createElement('button');
		deleteButton.innerText = 'Delete';
		deleteButton.style = 'margin-right: 5px; background-color: #fff; color: red; pointer: cursor';
		deleteButton.onclick = deleteBtn;
		deleteButton.id = cus.id;

		// Create editButton element
		const editButton = document.createElement('button');
		editButton.innerText = 'Edit';
		editButton.style = 'background-color: #fff; color: green; pointer: cursor';

		// Append two element button
		tableRow.appendChild(deleteButton);
		tableRow.appendChild(editButton);

		// Append tableRow to customerData
		const customerData = document.getElementById('customer-data');
		customerData.appendChild(tableRow);
	});
}
*/