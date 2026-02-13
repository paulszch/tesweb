const submitBtn = document.getElementById("submitBtn");
const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

submitBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name === "") {
        result.textContent = "Nama tidak boleh kosong!";
        result.style.color = "#ffcccc";
    } else {
        result.textContent = `Halo ${name}! Selamat datang 😎`;
        result.style.color = "#ffffff";
    }
});