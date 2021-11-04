const form = document.querySelector("form");

mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
  stickyClass();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTo({ top: 0, behavior: "smooth" }); // For Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" }); // For Chrome, Firefox, IE and Opera
}

function initCollapse() {
  const toggleButtons = document.querySelectorAll("[data-type='toggler']");

  toggleButtons.forEach((toggler) => {
    toggler.addEventListener("click", function () {
      toggler.classList.toggle("active");

      if (toggler.classList.contains("active")) {
        document.getElementById(toggler.dataset.target).classList.add("active");
      } else {
        document .getElementById(toggler.dataset.target).classList.remove("active");
      }
    });
  });
}

initCollapse();

function closeCollapse() {
  const toggleButtons = document.querySelectorAll("[data-type='close']");

  toggleButtons.forEach((toggler) => {
    toggler.addEventListener("click", function () {
      document.getElementById(toggler.dataset.target).classList.remove("active");
    });
  });
}

closeCollapse();

function stickyClass() {
  document.querySelectorAll(".sticky").forEach((elem) => {
    if(elem.offsetTop > 0) {
      elem.classList.add("active")
    } else {
      elem.classList.remove("active")
    }
  });
}

function filterNews() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const filterContainer = document.querySelector("#filter-container")
  const filterElements = filterContainer.querySelectorAll(".filter-elem")

  filterButtons.forEach((filterButton, index) => {
    filterButton.addEventListener("click", function () {
      filterContainer.innerHTML = ''

      filterElements.forEach((element) => {
        if(index === 0) {
          filterContainer.appendChild(element)
          return
        }

        if(element.classList.contains(filterButton.dataset.target)) {
          filterContainer.appendChild(element)
          return
        }
      })

      if(filterContainer.childNodes.length == 0) {
        filterContainer.innerHTML = "Yangiliklar yo'q"
      }
    })
  })
}

filterNews()

$(document).ready(function(){
  $('.toast').toast('show');
});
