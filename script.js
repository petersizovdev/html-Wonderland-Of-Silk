document.getElementById("open-modal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modal")) {
    document.getElementById("modal").style.display = "none";
  }
});

if (window.devicePixelRatio !== 1) {
  var dpt = window.devicePixelRatio;
  var widthM = window.screen.width * dpt;
  var widthH = window.screen.height * dpt;
  document.write(
    '<meta name="viewport" content="width=' +
      widthM +
      ", height=" +
      widthH +
      '">'
  );
}
