let images=["https://img.magnific.com/free-photo/majestic-waterfall-lush-forest_23-2151956318.jpg",
    "https://img.magnific.com/free-photo/snow-dusts-teton-range-peaks_181624-37722.jpg",
    "https://img.magnific.com/free-photo/horizontal-shot-huge-field-with-lot-flowers-red-tulips-surrounded-by-high-mountains_181624-4497.jpg",
"https://img.magnific.com/free-photo/flowery-spring-background_23-2151917617.jpg"
]
document.write(`<div class="grid-container">`)
for(let img of images)
{
    document.write(`<div class="grid-image">
        <img src=${img} alt="" >
        </div>`)
}


document.write(`</div>`);
