function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

const removeLog = document.querySelector('#eventClick');

window.onclick = function(e) {
  const contains = removeLog.contains(e.target);
  if (contains == false) {
    document.getElementById('myDropdown').classList.remove('show');
  }
};
