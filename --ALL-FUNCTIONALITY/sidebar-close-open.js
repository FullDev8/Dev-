
function openSidebar() {
  document.getElementById('side').style.width = '190px';
}

function closeSidebar() {
	document.getElementById('side').style.display = 'none';
	document.getElementById('cont').style.gridTemplateColumns = '1fr';
}
