$(document).ready(function () {

  let data = [];
  let currentIndex = 0;

  // LOAD JSON
  $.getJSON("Image.json", function (response) {
    data = response;
    renderCard(currentIndex);
  });

  function renderCard(index) {
    const item = data[index];

    $("#country").text(item.country);
    $("#title").text(item.title);
    $("#temp").text(item.temperature);
    $("#wind").text(item.wind);
    $("#dir").text(item.direction);
    $("#coords").text(item.coords);
    $("#locationImage").attr("src", item.image);
  }

  // NEXT
  $("#next").click(function () {
    currentIndex = (currentIndex + 1) % data.length;
    renderCard(currentIndex);
  });

  // PREVIOUS
  $("#prev").click(function () {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    renderCard(currentIndex);
  });

});
