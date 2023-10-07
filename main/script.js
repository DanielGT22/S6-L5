document.querySelector(".searchbutton").onclick = function () {
  toggleSearchBar();
};

function toggleSearchBar() {
  var searchBar = document.querySelector(".searchBar1");

  if (searchBar.style.display === "none" || searchBar.style.display === "") {
    searchBar.style.display = "inline";
    searchBar.style.opacity = "0";
    searchBar.style.transition = "opacity 1s";
    setTimeout(function () {
      searchBar.style.opacity = "1";
    }, 10);
  } else {
    searchBar.style.opacity = "0";
    setTimeout(function () {
      searchBar.style.display = "none";
    }, 10);
  }
}
