window.onload = function() {

  function getRandomInt() {
    min = 9999
    max = 0
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  var num1=getRandomInt();
  var num2=getRandomInt();

  document.getElementById("rand1").value = num1;
  document.getElementById("rand2").value = num2;
  document.getElementById("res").value = num1+num2;
  // window.alert(num1);
}
