
function toggleButton1() {
    let summary = document.getElementById("summary1");
    summary.classList.toggle("hidden");
    let button = document.getElementById("button1");
    button.onclick = toggleButton1;
}
toggleButton1();
function toggleButton2() {
    let summary = document.getElementById("summary2");
    summary.classList.toggle("hidden");
    let button = document.getElementById("button2");
    button.onclick = toggleButton2;
}
toggleButton2();
function toggleButton3() {
    let summary = document.getElementById("summary3");
    summary.classList.toggle("hidden");
    let button = document.getElementById("button3");
    button.onclick = toggleButton3;
}
toggleButton3();


