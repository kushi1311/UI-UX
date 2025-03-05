document.getElementById("quoteInput").addEventListener("input", function() {
    document.getElementById("quoteBox").innerText = this.value;
});

document.getElementById("fontSize").addEventListener("input", function() {
    document.getElementById("quoteBox").style.fontSize = this.value + "px";
});

document.getElementById("textColor").addEventListener("input", function() {
    document.getElementById("quoteBox").style.color = this.value;
});

document.getElementById("bgColor").addEventListener("input", function() {
    document.getElementById("quoteBox").style.backgroundColor = this.value;
});

document.getElementById("fontStyle").addEventListener("change", function() {
    document.getElementById("quoteBox").style.fontFamily = this.value;
});

document.getElementById("bgImage").addEventListener("change", function() {
    let quoteBox = document.getElementById("quoteBox");
    if (this.value === "none") {
        quoteBox.style.backgroundImage = "none";
    } else {
        quoteBox.style.backgroundImage = `url(${this.value})`;
        quoteBox.style.backgroundSize = "cover";
    }
});

document.getElementById("boxWidth").addEventListener("input", function() {
    document.getElementById("quoteBox").style.width = this.value + "px";
});

document.getElementById("boxHeight").addEventListener("input", function() {
    document.getElementById("quoteBox").style.height = this.value + "px";
});