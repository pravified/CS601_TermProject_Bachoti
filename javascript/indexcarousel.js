// Vue component for the whole carousel
Vue.component('carousel', {
    // Template contains image and aside tags with bindings for dynamic attributes
    template: `
        <div>
            <img :src="currentPath" :alt="currentAlt" height="900" width="601"/>
            <aside class="caption" :value="currentDesc"></aside>
        </div>
    `,
    // All applicable data for the carousel iteration (current is initial, slides are array to cycle through)
    data: function () {
        return {
            currentPath: 'media/carousel_imgs/pexels-mikhail-nilov-7988090.jpg',
            currentAlt: 'Pexels Keyboard image, Mikhail Nilov',
            currentDesc: '"A Person Holding a Black Keyboard", courtesy of Mikhail Nilov. The image has a Creative Commons license.',
            // slideIndex starts at 1, so that the first cycle progresses to the next slide
            slideIndex: 1,
            slides: [
                {
                    path: 'media/carousel_imgs/pexels-mikhail-nilov-7988090.jpg',
                    alt: 'Pexels Keyboard image, Mikhail Nilov',
                    desc: '"A Person Holding a Black Keyboard", courtesy of Mikhail Nilov. The image has a Creative Commons license.'
                }, 
                {
                    path: 'media/carousel_imgs/pexels-stefan-stefancik-91223.jpg',
                    alt: 'Pexels View, Stefan Stefancik',
                    desc: '"Mountain View", courtesy of Stefan Stefancik. The image has a Creative Commons license.'
                },
                {
                    path: 'media/carousel_imgs/pexels-flo-dahm-699459.jpg',
                    alt: 'Pexels Studio, Flo Dahm',
                    desc: '"Digital Art in Studio", courtesy of Flo Dahm. The image has a Creative Commons license.'
                }
            ],
        };
    },
    // "Mounted" Method that cycles through slides in the slides array every 4 seconds, by incrementing index of current slide (fires on page load)
    mounted(){
        setInterval(() => {
            if(this.slideIndex > 2) {this.slideIndex = 0;}
            this.currentPath = this.slides[this.slideIndex].path;
            this.currentAlt = this.slides[this.slideIndex].alt;
            this.currentDesc = this.slides[this.slideIndex].desc;
            this.slideIndex++;
        },
        4000)
    },
});
// Creating Vue instance for carousel
var app = new Vue({
    el: '#vue-introimage',
});

/*
Sources:
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://codesource.io/using-the-vue-mounted-lifecycle-hook/ 

Sources (Images):
    Nilov, M. (2021). A Person Holding a Black Keyboard. Pexels. photograph. Retrieved May 15, 2022, from https://www.pexels.com/photo/a-person-holding-a-black-keyboard-7988090/. 

*/