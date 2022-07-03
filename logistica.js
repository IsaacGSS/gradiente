var code01 = "#a38ed2"
var code02 = "#f9c1eb"

function evento(){
  var code01 = document.getElementById('cl-code-one')
  var code02 = document.getElementById('cl-code-two')

  document.getElementById('preview').style.background = "linear-gradient(to right, " + code01.value + "," + code02.value + " )"

  document.getElementById('code-one').innerHTML = code01.value
  document.getElementById('code-two').innerHTML = code02.value
}

function load() {
  document.getElementById('preview').style.background = "linear-gradient(to right, " + code01 + "," + code02 + " )"

  document.getElementById('code-one').innerHTML = code01
  document.getElementById('code-two').innerHTML = code02
}