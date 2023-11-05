function rubberBandAnimation() {
var brand = document.getElementsByClassName('navbar-brand');

  brand.classList.add('rubberBand');

brand.addEventListener('animationend', function() {
  brand.classList.remove('rubberBand');
});
}


window.addEventListener("scroll", function() {
  var scrollbawah = document.getElementById("scrollbawah");
  if (window.scrollY > 100) { // Ganti angka ini sesuai dengan posisi scroll yang Anda inginkan.
    scrollbawah.style.display = "block"; // Atau gunakan visibility: visible;
  } else {
    scrollbawah.style.display = "none"; // Atau gunakan visibility: hidden;
  }
});

const colorChangingText = document.getElementById("judul");
const colors = ["#800000", "#00bfff", "green", "orange", "purple","#364f6b"];
let colorIndex = 0;

function changeColor() {
  colorChangingText.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  setTimeout(changeColor, 1000); // Ganti warna setiap 1 detik
}

changeColor(); // Memulai perubahan warna teks
