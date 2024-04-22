
function newElement() {
  var inputValue = document.getElementById('task').value;
  if (inputValue === '') {
   $('.error').toast('show');
  } else {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));
    document.getElementById('list').appendChild(li);
    $('.success').toast('show');
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(inputValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  document.getElementById("task").value = "";
}

// Liste öğelerini silen fonksiyon
function removeElement() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  localStorage.removeItem('tasks');
  $('.success').toast('show');
}

// Kapatma butonu işlevselliği
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  }
  document.getElementById("task").value = "";
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement.parentElement;
    div.style.display = "none";
  }
}

