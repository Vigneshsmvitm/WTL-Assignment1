// ---------- DATE & TIME ----------
function updateDateTime() {
    document.getElementById("dateTime").innerText =
        new Date().toLocaleString();
}
setInterval(updateDateTime, 1000);


// ---------- DARK / LIGHT THEME ----------
function toggleTheme() {
    document.body.classList.toggle("dark");
}


// ---------- SHOW / HIDE BIODATA ----------
function toggleBio() {
    let table = document.getElementById("bioTable");

    if (table.style.display === "none") {
        table.style.display = "table";
        table.style.opacity = 1;
    } else {
        table.style.opacity = 0;
        setTimeout(() => table.style.display = "none", 300);
    }
}
