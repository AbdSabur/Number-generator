function getNumb(min, max) {
    document.getElementById("numb").innerHTML = Math.floor(Math.random() * (max - min + 1) + min)
}