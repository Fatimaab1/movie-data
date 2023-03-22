let movieData = {
    "The Darjeeling Limited": {
        plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
        cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
        runtime: 151,
        rating: 7.2,
        year: 2007,
    },
    "The Royal Tenenbaums": {
        plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
        rating: 7.6,
        year: 2001,
        cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
        runtime: 170,
    },
    "Fantastic Mr. Fox": {
        year: 2009,
        plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
        cast: [
            "George Clooney",
            "Meryl Streep",
            "Bill Murray",
            "Jason Schwartzman",
        ],
        runtime: 147,
        rating: 7.9,
    },
    "The Grand Budapest Hotel": {
        rating: 8.1,
        runtime: 159,
        year: 2014,
        plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
    },
};



const applyFiltersBtn = document.querySelector('.btn-1');
const movieCards = document.querySelectorAll('.movie-cards');

applyFiltersBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const selectedYears = [];

    checkboxes.forEach((checkbox) => {
        selectedYears.push(checkbox.value);
    });

    movieCards.forEach((card) => {
        const releaseDateElement = card.querySelector('.release-date');
        const releaseYear = parseInt(releaseDateElement.textContent.replace(/[^0-9]/g, ''));

        if (selectedYears.includes(getReleaseYearRange(releaseYear))) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

function getReleaseYearRange(year) {
    if (year >= 2000 && year <= 2003) {
        return '2000-2003';
    } else if (year >= 2004 && year <= 2007) {
        return '2004-2007';
    } else if (year >= 2008 && year <= 2012) {
        return '2008-2012';
    } else if (year >= 2013 && year <= 2016) {
        return '2013-2016';
    }
}
