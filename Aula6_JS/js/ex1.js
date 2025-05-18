function clique() {
    let cor = document.querySelector('#header').style.color;
    if (cor == "black")
        document.querySelector('#header').style.color = "red";
    else
        document.querySelector('#header').style.color = "black";
}