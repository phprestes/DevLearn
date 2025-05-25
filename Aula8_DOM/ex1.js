const obras = [
    { title: "A Noite Estrelada", artist: "Vincent van Gogh", year: 1889, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
    { title: "Os Girassóis", artist: "Vincent van Gogh", year: 1888, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/640px-Vincent_Willem_van_Gogh_128.jpg" },
    { title: "Campo de Trigo com Corvos", artist: "Vincent van Gogh", year: 1890, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg/640px-Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg" },
    { title: "A Casa Amarela", artist: "Vincent van Gogh", year: 1888, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/640px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg" },
    { title: "Terraço do Café à Noite", artist: "Vincent van Gogh", year: 1888, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg/800px-Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_%28Yorck%29.jpg" },
    { title: "O Quarto em Arles", artist: "Vincent van Gogh", year: 1888, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg/640px-La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg" },
    { title: "Amendoeira em Flor", artist: "Vincent van Gogh", year: 1890, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Amandelbloesem_-_s0176V1962_-_Van_Gogh_Museum.jpg/640px-Amandelbloesem_-_s0176V1962_-_Van_Gogh_Museum.jpg" },
    { title: "Autorretrato", artist: "Vincent van Gogh", year: 1889, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/640px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" },
    { title: "Retrato do Dr. Gachet", artist: "Vincent van Gogh", year: 1890, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Vincent_van_Gogh_-_Dr_Paul_Gachet_-_Google_Art_Project.jpg/640px-Vincent_van_Gogh_-_Dr_Paul_Gachet_-_Google_Art_Project.jpg" },
    { title: "Noite Estrelada sobre o Ródano", artist: "Vincent van Gogh", year: 1888, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
    { title: "Os Comedores de Batata", artist: "Vincent van Gogh", year: 1885, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/1280px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg" },
    { title: "Paisagem de Saint-Rémy", artist: "Vincent van Gogh", year: 1889, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Landscape_from_Saint-R%C3%A9my_-_Google_Art_Project.jpg" },
];

function criarCardDaObra(obra) {
    const container = document.querySelector("#container");
    const card = document.createElement("div");
    const info = document.createElement("div");

    card.classList.add("face-image");

    // Titulo
    const title = document.createElement("h1");
    title.innerHTML = obra.title;

    // Artista
    const artist = document.createElement("h4");
    artist.innerHTML = obra.artist;

    // Ano
    const year = document.createElement("h4");
    year.innerHTML = "Ano: " + obra.year;

    const image = document.createElement("img");
    image.setAttribute("src", obra.image);
    image.setAttribute("alt", obra.title);

    info.appendChild(title);
    info.appendChild(artist);
    info.appendChild(year);

    card.appendChild(image);

    card.addEventListener("click", () => {
        if (card.classList.contains("face-info")) {
            card.classList.remove("face-info");
            card.classList.add("face-image");

            card.innerHTML = ""
            card.appendChild(image);
        } else {
            card.classList.remove("face-image");
            card.classList.add("face-info");

            card.innerHTML = ""
            card.appendChild(info);
        }
    })

    container.appendChild(card);
}

obras.forEach(obra => criarCardDaObra(obra));