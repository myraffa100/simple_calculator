// Inisialisasi
const inputValue = document.getElementById("user-input");

document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    const lastValue = inputValue.innerText.slice(-1);

    if (e.target.innerHTML === "=") {
      // Mengevaluasi ekspresi hanya jika karakter terakhir adalah angka
      if (!isNaN(lastValue)) {
        try {
          inputValue.innerText = eval(inputValue.innerText);
        } catch (error) {
          inputValue.innerText = "Error";
        }
      }
    } else if (e.target.innerHTML === "AC") {
      // Reset ke default
      inputValue.innerText = "0";
    } else if (e.target.innerHTML === "DEL") {
      // Menghapus satu karakter
      inputValue.innerText = inputValue.innerText.slice(0, -1) || "0";
    } else {
      // Menambahkan operasi jika karakter terakhir adalah angka
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
