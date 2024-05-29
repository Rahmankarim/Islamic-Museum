document
  .getElementById("muslim-leaders")
  .addEventListener("click", muslimLeaders);

function muslimLeaders(event) {
  event.preventDefault();

  let url = "../LeadersList.html";
  window.open(url);
}
