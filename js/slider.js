new Splide('.splide',{
    type : 'loop',
    perPage: 3,
    perMove: 1,
    gap: 20,
    height: 341,
    pagination: true,
    breakpoints : {
        1280 : {
            height: 167, 
        },
        1599 : {
            height: 280,
        },
    }
} ).mount();