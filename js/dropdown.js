//Login
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(e) {
  const removeLog = document.querySelector('#eventClick');
  const containsLog = removeLog.contains(e.target);

  console.log('Log: ' + containsLog);

  if (containsLog == false) {
    document.getElementById('myDropdown').classList.remove('show');
  }
};
