Vue.component('carousel', {
    template: `
    <div>
        <div>
            <div v-on:click="nextSlide()">
                <img :src="currPath" :alt="currAlt" height="900" width="601"/>
                <aside class="caption" :value="currDesc"></aside>
            </div>
        </div>
    <div>
    `,
    data: function () {
        return {
            currPath: '',
            currAlt: '',
            currDesc: '',
            slideIndex: 0,
            slides: [
                {
                    path: 'media/Pexels_Imgs/pexels-mikhail-nilov-7988090.jpg',
                    alt: 'Pexels Keyboard image, Mikhail Nilov',
                    desc: '"A Person Holding a Black Keyboard", courtesy of Mikhail Nilov. The image has a Creative Commons license.',
                }, 
                {
                    path: 'media/Pexels_Imgs/pexels-stefan-stefancik-91223.jpg',
                    alt: 'Pexels View, Stefan Stefancik',
                    desc: '"Mountain View", courtesy of Stefan Stefancik. The image has a Creative Commons license.',
                },
                {
                    path: 'media/Pexels_Imgs/pexels-flo-dahm-699459.jpg',
                    alt: 'Pexels Studio, Flo Dahm',
                    desc: '"Digital Art in Studio", courtesy of Flo Dahm. The image has a Creative Commons license.',
                }
            ],
            //show: ''

        };
    },
    methods: {
        nextSlide:
        function(){
            if(this.slideIndex > 2) {this.slideIndex = 0;}
            this.currPath = this.slides[this.slideIndex].path;
            this.currAlt = this.slides[this.slideIndex].alt;
            this.currDesc = this.slides[this.slideIndex].desc;
            this.slideIndex++;
        },
        /*iterateSlides: 
        function(){
            for(let i=1; i>0; i++){
                this.slides.forEach(element => {
                    this.currPath = element.path;
                    this.currAlt = element.alt;
                    this.currDesc = element.desc;
                });
            setInterval(() => {console.log("test");}, 1000);
            }
        },*/
        

        displaySlide: function(currSlide){
            //setInterval(() => {console.log("test");}, 10000);
            return currSlide;
        },

        displayTimedSlide: function(slides){
            slides.forEach(element => {
                setTimeout(() => {
                    return element;
                }, 3000);
            });
        },

        pauseSlide: function(){
            setTimeout(() => {
                // Display current slide
            }, 30000);
        }
    },
});
// Creating Vue instance for carousel
var app = new Vue({
    el: '#vue-introimage'
});

/*
Sources:
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
*/