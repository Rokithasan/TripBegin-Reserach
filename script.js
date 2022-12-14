

function setupTabs (){

    document.querySelectorAll(".tabs__button").forEach(button => {

        button.addEventListener("click", () => {

            const sidebar = button.parentElement;
            const tabsContainer = sidebar.parentElement;
            const tabNubmer = button.dataset.forTab;
            const tabToActive = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNubmer}"]`);

            sidebar.querySelectorAll(".tabs__button").forEach(button => {

                button.classList.remove("tabs__button--active");

            });

            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {

                tab.classList.remove("tabs__content--active");

            });

            button.classList.add("tabs__button--active");
            tabToActive.classList.add("tabs__content--active");

        });
    })
}

document.addEventListener("DOMContentLoaded", () => {

    setupTabs();
});

document.querySelectorAll(".tabs").forEach(tabsContainer => {

    tabsContainer.querySelector(".tabs_-sidebar .tabs__button").click();
});


var splide = new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    rewind: true,
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            height: '12rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            height: '12rem',
        },
    },
});
splide.mount();