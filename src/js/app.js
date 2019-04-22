// CITIES SEARCH
const parentContainer = document.getElementById('cardParent');
const loadMoreButton = document.getElementById('loadMore');
const filterText = document.getElementById('textFilter');

var availablePlaces = [{
        city: 'London',
        state: 'England',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas',
        image: '/assets/img/cities/london.jpg'
    },
    {
        city: 'Paris',
        state: 'France',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas',
        image: '/assets/img/cities/paris.jpg'
    },
    {
        city: 'Berlin',
        state: 'Germany',
        continent: 'Asia',
        description: 'loremdasdnsasancdcbcuacaucbacas',
        image: '/assets/img/cities/berlin.jpg'
    },
    {
        city: 'Moscow',
        state: 'Rusia',
        continent: 'Asia',
        description: 'loremdasdnsasancdcbcuacaucbacas',
        image: '/assets/img/cities/las-vegas.jpg'
    },
    {
        city: 'Budapest',
        state: 'Hungary',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    },
    {
        city: 'London',
        state: 'England',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    },
    {
        city: 'Paris',
        state: 'France',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    },
    {
        city: 'Berlin',
        state: 'Germany',
        continent: 'Asia',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    },
    {
        city: 'Moscow',
        state: 'Rusia',
        continent: 'Asia',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    },
    {
        city: 'Budapest',
        state: 'Hungary',
        continent: 'Europe',
        description: 'loremdasdnsasancdcbcuacaucbacas'
    }
];

document.addEventListener('DOMContentLoaded', showElements);
loadMoreButton.addEventListener('click', loadMoreElements);

let counter = 8;

function loadMoreElements() {
    counter += 8;
    if (counter >= availablePlaces.length) {
        loadMoreButton.disabled = true;
    }
    counter = counter > 8 ? counter : 8;
    counter = counter > availablePlaces.length ? availablePlaces.length : counter;
    let i = counter === 8 ? 0 : counter - 8;

    for (i; i < counter; i++) {
        // whole container div
        let cardItem = document.createElement('div');
        cardItem.classList.add(
            'col-xs-6',
            'col-sm-6',
            'col-md-6',
            'col-lg-4',
            'col-xl-3',
            'city'
        );

        let cityCard = document.createElement('div');
        cityCard.className = 'city-card';

        // front image
        let cardFrontImage = document.createElement('div');
        cardFrontImage.classList.add(
            'city-card__img',
            'city-card__img--front',
            'city-card__img--front-1'
        );
        cardFrontImage.innerText = ' ';
        cardFrontImage.style.backgroundImage = `url(${availablePlaces[i].image})`

        // back image
        let cardBackImage = document.createElement('div');
        cardBackImage.classList.add('city-card__img', 'city-card__img--back');
        let cityCardInfo = document.createElement('div');
        cityCardInfo.className = 'city-card__info';

        // heading
        let heading = document.createElement('h3');
        heading.className = 'city-card__tour-heading';
        // heading.innerText =
        heading.innerText = 'Craft Beer';
        cityCardInfo.appendChild(heading);

        let continent = document.createElement('span');
        continent.className = 'city-card__tour-subheading';
        continent.innerText = availablePlaces[i].continent;
        cityCardInfo.appendChild(continent);

        cardBackImage.appendChild(cityCardInfo);

        // card deo
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('city-card__side', 'city-card__side--front');

        let cardDetails = document.createElement('div');
        cardDetails.className = 'city-card__details';

        let city = document.createElement('h2');
        city.className = 'city-card__heading';
        city.innerText = availablePlaces[i].city;

        let state = document.createElement('p');
        state.className = 'city-card__location';
        state.innerText = availablePlaces[i].state;

        let description = document.createElement('p');
        description.className = 'city-card__text';
        description.innerText = availablePlaces[i].description;

        let raiting = document.createElement('div');
        raiting.className = 'city-card__rating';
        let logoImg = document.createElement('img');
        logoImg.src = '/assets/img/icons/trip-advisor-logo.svg';
        logoImg.className = 'city-card__icon';

        let stars = document.createElement('img');
        stars.src = '/assets/img/icons/trip-advisor-5-stars.svg';
        stars.className = 'city-card__icon';

        raiting.appendChild(logoImg);
        raiting.appendChild(stars);

        cardDetails.appendChild(city);
        cardDetails.appendChild(state);
        cardDetails.appendChild(description);
        cardDetails.appendChild(raiting);

        cardInfo.appendChild(cardDetails);

        let buttonSection = document.createElement('div');
        buttonSection.classList.add('city-card__side', 'city-card__side--back');

        let buttonDiv = document.createElement('div');
        buttonDiv.className = 'city-card__cta';

        let button = document.createElement('a');
        button.href = '/london/home.html';
        button.classList.add('find-btn', 'find-btn--white');
        button.innerText = 'FIND OUT MORE';

        buttonDiv.appendChild(button);
        buttonSection.appendChild(buttonDiv);

        cityCard.appendChild(cardFrontImage);
        cityCard.appendChild(cardBackImage);
        cityCard.appendChild(cardInfo);
        cityCard.appendChild(buttonSection);

        cardItem.appendChild(cityCard);
        parentContainer.appendChild(cardItem);
    }
}

function showElements() {
    for (let i = 0; i < counter; i++) {
        // whole container div
        let cardItem = document.createElement('div');
        cardItem.classList.add(
            'col-xs-6',
            'col-sm-6',
            'col-md-6',
            'col-lg-4',
            'col-xl-3',
            'city'
        );

        let cityCard = document.createElement('div');
        cityCard.className = 'city-card';

        // front image
        let cardFrontImage = document.createElement('div');
        cardFrontImage.classList.add(
            'city-card__img',
            'city-card__img--front',
            'city-card__img--front-1'
        );
        cardFrontImage.innerText = ' ';

        // back image
        let cardBackImage = document.createElement('div');
        cardBackImage.classList.add('city-card__img', 'city-card__img--back');
        let cityCardInfo = document.createElement('div');
        cityCardInfo.className = 'city-card__info';

        // heading
        let heading = document.createElement('h3');
        heading.className = 'city-card__tour-heading';
        // heading.innerText =
        heading.innerText = 'Craft Beer';
        cityCardInfo.appendChild(heading);

        let continent = document.createElement('span');
        continent.className = 'city-card__tour-subheading';
        continent.innerText = availablePlaces[i].continent;
        cityCardInfo.appendChild(continent);

        cardBackImage.appendChild(cityCardInfo);

        // card deo
        let cardInfo = document.createElement('div');
        cardInfo.classList.add('city-card__side', 'city-card__side--front');

        let cardDetails = document.createElement('div');
        cardDetails.className = 'city-card__details';

        let city = document.createElement('h2');
        city.className = 'city-card__heading';
        city.innerText = availablePlaces[i].city;

        let state = document.createElement('p');
        state.className = 'city-card__location';
        state.innerText = availablePlaces[i].state;

        let description = document.createElement('p');
        description.className = 'city-card__text';
        description.innerText = availablePlaces[i].description;

        let raiting = document.createElement('div');
        raiting.className = 'city-card__rating';
        let logoImg = document.createElement('img');
        logoImg.src = '/assets/img/icons/trip-advisor-logo.svg';
        logoImg.className = 'city-card__icon';

        let stars = document.createElement('img');
        stars.src = '/assets/img/icons/trip-advisor-5-stars.svg';
        stars.className = 'city-card__icon';

        raiting.appendChild(logoImg);
        raiting.appendChild(stars);

        cardDetails.appendChild(city);
        cardDetails.appendChild(state);
        cardDetails.appendChild(description);
        cardDetails.appendChild(raiting);

        cardInfo.appendChild(cardDetails);

        let buttonSection = document.createElement('div');
        buttonSection.classList.add('city-card__side', 'city-card__side--back');

        let buttonDiv = document.createElement('div');
        buttonDiv.className = 'city-card__cta';

        let button = document.createElement('a');
        button.href = '/london/home.html';
        button.classList.add('find-btn', 'find-btn--white');
        button.innerText = 'FIND OUT MORE';

        buttonDiv.appendChild(button);
        buttonSection.appendChild(buttonDiv);

        cityCard.appendChild(cardFrontImage);
        cityCard.appendChild(cardBackImage);
        cityCard.appendChild(cardInfo);
        cityCard.appendChild(buttonSection);

        cardItem.appendChild(cityCard);
        parentContainer.appendChild(cardItem);
    }
}

filterText.addEventListener('keyup', e => {
    //? Ovo je brze
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.firstChild);
    }

    const text = e.target.value.toLowerCase();
    if (text != '') {
        loadMoreButton.style.display = 'none';
        availablePlaces
            .filter(
                ({
                    city,
                    state,
                    continent
                }) =>
                city.toLowerCase().includes(text) ||
                state.toLowerCase().includes(text) ||
                continent.toLowerCase().includes(text)
            )
            .forEach(item => {
                // whole container div
                let cardItem = document.createElement('div');
                cardItem.classList.add(
                    'col-xs-6',
                    'col-sm-6',
                    'col-md-6',
                    'col-lg-4',
                    'col-xl-3',
                    'city'
                );

                let cityCard = document.createElement('div');
                cityCard.className = 'city-card';

                // front image
                let cardFrontImage = document.createElement('div');
                cardFrontImage.classList.add(
                    'city-card__img',
                    'city-card__img--front',
                    'city-card__img--front-1'
                );
                cardFrontImage.innerText = ' ';
                cardFrontImage.style.backgroundImage = `url(${item.image})`

                // back image
                let cardBackImage = document.createElement('div');
                cardBackImage.classList.add('city-card__img', 'city-card__img--back');
                let cityCardInfo = document.createElement('div');
                cityCardInfo.className = 'city-card__info';

                // heading
                let heading = document.createElement('h3');
                heading.className = 'city-card__tour-heading';
                // heading.innerText =
                heading.innerText = 'Craft Beer';
                cityCardInfo.appendChild(heading);

                let continent = document.createElement('span');
                continent.className = 'city-card__tour-subheading';
                continent.innerText = item.continent;
                cityCardInfo.appendChild(continent);

                cardBackImage.appendChild(cityCardInfo);

                // card deo
                let cardInfo = document.createElement('div');
                cardInfo.classList.add('city-card__side', 'city-card__side--front');

                let cardDetails = document.createElement('div');
                cardDetails.className = 'city-card__details';

                let city = document.createElement('h2');
                city.className = 'city-card__heading';
                city.innerText = item.city;

                let state = document.createElement('p');
                state.className = 'city-card__location';
                state.innerText = item.state;

                let description = document.createElement('p');
                description.className = 'city-card__text';
                description.innerText = item.description;

                let raiting = document.createElement('div');
                raiting.className = 'city-card__rating';
                let logoImg = document.createElement('img');
                logoImg.src = '/assets/img/icons/trip-advisor-logo.svg';
                logoImg.className = 'city-card__icon';

                let stars = document.createElement('img');
                stars.src = '/assets/img/icons/trip-advisor-5-stars.svg';
                stars.className = 'city-card__icon';

                raiting.appendChild(logoImg);
                raiting.appendChild(stars);

                cardDetails.appendChild(city);
                cardDetails.appendChild(state);
                cardDetails.appendChild(description);
                cardDetails.appendChild(raiting);

                cardInfo.appendChild(cardDetails);

                let buttonSection = document.createElement('div');
                buttonSection.classList.add('city-card__side', 'city-card__side--back');

                let buttonDiv = document.createElement('div');
                buttonDiv.className = 'city-card__cta';

                let button = document.createElement('a');
                button.href = '/london/home.html';
                button.classList.add('find-btn', 'find-btn--white');
                button.innerText = 'FIND OUT MORE';

                buttonDiv.appendChild(button);
                buttonSection.appendChild(buttonDiv);

                cityCard.appendChild(cardFrontImage);
                cityCard.appendChild(cardBackImage);
                cityCard.appendChild(cardInfo);
                cityCard.appendChild(buttonSection);

                cardItem.appendChild(cityCard);
                parentContainer.appendChild(cardItem);
            });
    } else {
        loadMoreButton.style.display = 'block';
        for (let i = 0; i < counter; i++) {
            // whole container div
            let cardItem = document.createElement('div');
            cardItem.classList.add(
                'col-xs-6',
                'col-sm-6',
                'col-md-6',
                'col-lg-4',
                'col-xl-3',
                'city'
            );

            let cityCard = document.createElement('div');
            cityCard.className = 'city-card';

            // front image
            let cardFrontImage = document.createElement('div');
            cardFrontImage.classList.add(
                'city-card__img',
                'city-card__img--front',
                'city-card__img--front-1'
            );
            cardFrontImage.innerText = ' ';

            // back image
            let cardBackImage = document.createElement('div');
            cardBackImage.classList.add('city-card__img', 'city-card__img--back');
            let cityCardInfo = document.createElement('div');
            cityCardInfo.className = 'city-card__info';

            // heading
            let heading = document.createElement('h3');
            heading.className = 'city-card__tour-heading';
            // heading.innerText =
            heading.innerText = 'Craft Beer';
            cityCardInfo.appendChild(heading);

            let continent = document.createElement('span');
            continent.className = 'city-card__tour-subheading';
            continent.innerText = availablePlaces[i].continent;
            cityCardInfo.appendChild(continent);

            cardBackImage.appendChild(cityCardInfo);

            // card deo
            let cardInfo = document.createElement('div');
            cardInfo.classList.add('city-card__side', 'city-card__side--front');

            let cardDetails = document.createElement('div');
            cardDetails.className = 'city-card__details';

            let city = document.createElement('h2');
            city.className = 'city-card__heading';
            city.innerText = availablePlaces[i].city;

            let state = document.createElement('p');
            state.className = 'city-card__location';
            state.innerText = availablePlaces[i].state;

            let description = document.createElement('p');
            description.className = 'city-card__text';
            description.innerText = availablePlaces[i].description;

            let raiting = document.createElement('div');
            raiting.className = 'city-card__rating';
            let logoImg = document.createElement('img');
            logoImg.src = '/assets/img/icons/trip-advisor-logo.svg';
            logoImg.className = 'city-card__icon';

            let stars = document.createElement('img');
            stars.src = '/assets/img/icons/trip-advisor-5-stars.svg';
            stars.className = 'city-card__icon';

            raiting.appendChild(logoImg);
            raiting.appendChild(stars);

            cardDetails.appendChild(city);
            cardDetails.appendChild(state);
            cardDetails.appendChild(description);
            cardDetails.appendChild(raiting);

            cardInfo.appendChild(cardDetails);

            let buttonSection = document.createElement('div');
            buttonSection.classList.add('city-card__side', 'city-card__side--back');

            let buttonDiv = document.createElement('div');
            buttonDiv.className = 'city-card__cta';

            let button = document.createElement('a');
            button.href = '/london/home.html';
            button.classList.add('find-btn', 'find-btn--white');
            button.innerText = 'FIND OUT MORE';

            buttonDiv.appendChild(button);
            buttonSection.appendChild(buttonDiv);

            cityCard.appendChild(cardFrontImage);
            cityCard.appendChild(cardBackImage);
            cityCard.appendChild(cardInfo);
            cityCard.appendChild(buttonSection);

            cardItem.appendChild(cityCard);
            parentContainer.appendChild(cardItem);
        }
    }
});