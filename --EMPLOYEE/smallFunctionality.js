
// Toggle
document.getElementById('add-employee').addEventListener('click', function () {
	popUp();
})

document.getElementById('close-add-btn').addEventListener('click', function () {
	closeAddBtn();
});

document.getElementById('payroll-employee-list').addEventListener('click', function () {
	payrollEmployeeList();
})

document.getElementById('employee-list-nav').addEventListener('click', function () {
	employeeList();
})

function popUp() {
	let opacity = document.getElementById('opacity');
	opacity.classList.add('active');
	let popUp = document.getElementById('popup');
	popUp.classList.add('active');
}

function closeAddBtn() {
	let opacity = document.getElementById('opacity');
	opacity.classList.remove('active');
	let popUp = document.getElementById('popup');
	popUp.classList.remove('active');
}

function payrollEmployeeList() {
	let employeeList = document.getElementById('employee-list');
	employeeList.classList.add('active');
	let payrollList = document.getElementById('payroll-list');
	payrollList.classList.add('active');
}

function employeeList() {
	let employeeList = document.getElementById('employee-list');
	employeeList.classList.remove('active');
	let payrollList = document.getElementById('payroll-list');
	payrollList.classList.remove('active');
    let payrollGenerate = document.getElementById('payroll-generate');
    payrollGenerate.classList.remove('active');
}

// Toggle
function payrolltoggle() {
	let btnPayrollProcess = document.getElementById('payroll-list');
	btnPayrollProcess.classList.toggle('active');
	let payrollGenerate = document.getElementById('payroll-generate');
	payrollGenerate.classList.toggle('active');
}

function closePayslipBtn() {
	let modal = document.getElementById('payslip');
	modal.classList.remove('active');
	let container = document.getElementById('opacity');
	container.classList.remove('active');
}
