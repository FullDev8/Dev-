
/* 
let employees = [{
    no: 1,
    name: 'James reid',
    attendaceBy: 'Ivan Vispo',
    date: '2023-31-05',
    inTime: '7:00 am',
    outTime: '7:00 pm',
    status: '',
    id: 'id1'
  }];
  
  render();
  
  function addEmployee() {
    const num = document.getElementById('number');
    const number = num.value;

    const name = document.getElementById('name');
    const fullName = name.value;

    const attendaceBy = document.getElementById('attendance-by');
    const attendance = attendaceBy.value;
    
    const datePicker = document.getElementById('date');
    const date = datePicker.value;
  
    const intime = document.getElementById('in-time');
    const inTime = intime.value;
  
    const outtime = document.getElementById('out-time');
    const outTime = outtime.value;

    const status = document.getElementById('status');
    const currentStatus = status.value;
  
    const id = '' + new Date().getTime();
  
    employees.push({
      no: number,
      name: fullName,
      attendaceBy: attendance,
      date: date,
      inTime: inTime,
      outTime: outTime,
      status: currentStatus,
      id: id
    })
        
    render();
  }
  //Delete button
  function deleteBtn(event) {
    const deleteButton = event.target;
    const idToDelete = deleteButton.id
  
     employees = employees.filter(function (emp) {
    //If the id of this todo matches idToDelete, return false
    //For everything else, return true
        if (emp.id === idToDelete) {
          return false
        } else {
          return true;
        }
    });
    render();
  }
  
  function render() {
      //reset the list
      document.getElementById('employee-data').innerHTML = '';
  
      employees.forEach(function (emp){
          const tableRow = document.createElement('tr');
          tableRow.innerHTML = `
                                      <td>${emp.no}</td>
                                      <td>${emp.name}</td>
                                      <td>${emp.attendaceBy}</td>
                                      <td>${emp.date}</td>
                                      <td>${emp.inTime}</td>
                                      <td>${emp.outTime}</td>
                                      <td>${emp.status}</td>
  `;
          //Create deleteButton element
          const deleteButton = document.createElement('button');
          deleteButton.innerText = 'Delete';
          deleteButton.style = 'margin-right: 5px; background-color: #fff; color: red; font-weight: 600';
          deleteButton.onclick = deleteBtn;
          deleteButton.id = emp.id;
  
          //Create editButton element
          const editButton = document.createElement('button');
          editButton.innerText = 'Edit';
          editButton.style = 'background-color: #fff; color: green; font-weight: 600';
  
          // Append two element button
          tableRow.appendChild(deleteButton);
          tableRow.appendChild(editButton);
  
          //Append tableRow to customerData
          const employeeData = document.getElementById('employee-data');
          employeeData.appendChild(tableRow);
      });
  }
  */