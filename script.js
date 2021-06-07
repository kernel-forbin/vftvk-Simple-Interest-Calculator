function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";
}

function compute() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);
  document.documentElement.style.setProperty('--principal', 'blue');
  if (principal <= 0) {
    confirm("Enter a positive number!")
  } else {
  document.getElementById("show_output").innerText =
    "If you deposit $"+principal+" \n" +
    "at an interest rate of "+rate+"%, \n" +
    "in the year "+year+" \n" +
    "you will receive $"+interest+" in interest \n";
    }
}
