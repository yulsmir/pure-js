document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },
        {
            name: 'grass',
            img: 'images/grass.png'
        },
        {
            name: 'snorlax',
            img: 'images/snorlax.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },
        {
            name: 'blue',
            img: 'images/blue.png'
        },
        {
            name: 'bulbasaur',
            img: 'images/bulbasaur.png'
        },
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },
        {
            name: 'grass',
            img: 'images/grass.png'
        },
        {
            name: 'snorlax',
            img: 'images/snorlax.png'
        },
        {
            name: 'squirtle',
            img: 'images/squirtle.png'
        },

    ]

    const grid = document.querySelector('.grid');

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            //TODO
            // card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    createBoard();
});