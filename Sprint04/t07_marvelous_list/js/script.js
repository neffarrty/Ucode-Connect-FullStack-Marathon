const films = [
    {
        id: 1,
        title: 'Avengers',
        date: 'May 4, 2012',
        actors: [
            'Rober Downey Jr.',
            'Chris Evans',
            'Ian McShane',
            'Chris Hemsworth',
            'Scarlet Johansson'
        ],
        description: 'Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract\'s power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.',
        poster: 'assets/images/avengers.jpg',
    },
    {
        id: 2,
        title: 'Doctor Strange',
        date: 'November 4, 2016',
        actors: [
            'Benedict Cumberbatch',
            'Mads Mikkelsen',
            'Tilda Swinton',
            'Benedict Wong',
            'Scott Adkins'
        ],
        description: 'Marvel\'s "Doctor Strange" follows the story of the talented neurosurgeon Doctor Stephen Strange who, after a tragic car accident, must put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New York City\'s Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies beyond, utilising a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.',
        poster: 'assets/images/doctor-strange.jpg',
    },
    {
        id: 3,
        title: 'Captain America',
        date: 'July 19, 2011',
        actors: [
            'Chris Evans',
            'Hayley Atwell',
            'Sebastian Stan',
            'Samuel L. Jackson',
            'Natalie Dormer'
        ],
        description: 'It is 1942, America has entered World War II, and sickly but determined Steve Rogers is frustrated at being rejected yet again for military service. Everything changes when Dr. Erskine recruits him for the secret Project Rebirth. Proving his extraordinary courage, wits and conscience, Rogers undergoes the experiment and his weak body is suddenly enhanced into the maximum human potential. When Dr. Erskine is then immediately assassinated by an agent of Nazi Germany\'s secret HYDRA research department (headed by Johann Schmidt, a.k.a. the Red Skull), Rogers is left as a unique man who is initially misused as a propaganda mascot; however, when his comrades need him, Rogers goes on a successful adventure that truly makes him Captain America, and his war against Schmidt begins.',
        poster: 'assets/images/captain-america.jpg',
    }
];

const loadFilm = (index) => {
    const film = films[index];
    const main = document.getElementById('main');

    const list = document.querySelectorAll('#list div');

    list.forEach((title) => {
        title.classList.remove('active');
    });
    list[index].classList.add('active');

    main.innerHTML = `
        <div class="film-info">
            <h2>${film.title}</h2>
            <div class="realise-date">${film.date}</div>
            <div class="actors">
                ${film.actors.map((actor) => '<div class="actor-info">' + actor + '</div>')}
            </div>
            <p class="description">${film.description}</p>
        </div>
        <div class="poster-wrapper">
            <img src="${film.poster}" alt="poster">
        </div>
    `;
};

loadFilm(0);

document.querySelectorAll('#list div').forEach(element => {
    element.addEventListener('click', () => {
        let index = [...element.parentElement.children].indexOf(element);
        loadFilm(index);
    });
});