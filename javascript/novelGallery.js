// Vue component for the whole gallery
Vue.component('gallery', {
    // Template contains image and aside tags with bindings for dynamic attributes
    template: `
        <div>
            <button v-bind:style="buttonStyle" v-on:click="prevImg()">Prev</button>
            <img v-bind:style="{width: width, height: height}" :src="activePath" :alt="activeAlt" height="900" width="601"/>
            <!--<aside class="caption" :value="activeDesc"></aside>-->
            <button v-bind:style="buttonStyle" v-on:click="nextImg()">Next</button>
        </div>
    `,
    // All applicable data for the gallery navigation
    data: function () {
        return {
            activePath: 'https://m.media-amazon.com/images/I/411Efnlq0jL.jpg',
            activeAlt: 'Radiant Black vol. 1',
            activeDesc: 'Cover of Radiant Black vol. 1 by Higgins, Costa, Carey',
            // slideIndex starts at 1, so that the first cycle progresses to the next slide
            slideIndex: 0,
            images: [
                {
                    path: 'https://m.media-amazon.com/images/I/411Efnlq0jL.jpg',
                    alt: 'Radiant Black vol. 1',
                    desc: 'Cover of Radiant Black vol. 1 by Higgins, Costa, Carey'
                }, 
                {
                    path: 'https://m.media-amazon.com/images/I/415BscgwFqL.jpg',
                    alt: 'The Old Guard vol. 1',
                    desc: 'Cover of The Old Guard vol. 1 by Rucka, Fernandez, Miwa, Wynne'
                },
                {
                    path: 'https://cdn.imagecomics.com/assets/i/releases/20061/god-country-1_1759a9ae2d.jpg',
                    alt: 'God Country',
                    desc: 'Cover of God Country by Cates, Shaw, Wordie, Hill'
                },
                {
                    path: 'https://m.media-amazon.com/images/I/51fWkU3GdhL.jpg',
                    alt: 'Reborn',
                    desc: 'Cover of Reborn by Millar, Capullo'
                }
            ],
            //Image dimensions
            width: '25%',
            height: '25%',
            //Button styles
            buttonStyle: {
                'border-radius':'10px',
                'border-color': '#0045db',
                'color': '#0045db',
                'padding': '5px'
            }
            
        };
    },
    methods: {
        nextImg: 
            function(){
                if(this.slideIndex<3) {this.slideIndex++;}
                this.activePath = this.images[this.slideIndex].path;
                this.activeAlt = this.images[this.slideIndex].alt;
                this.activeDesc = this.images[this.slideIndex].desc;
            },
        prevImg:
            function(){
                if(this.slideIndex>0) {this.slideIndex--;}
                this.activePath = this.images[this.slideIndex].path;
                this.activeAlt = this.images[this.slideIndex].alt;
                this.activeDesc = this.images[this.slideIndex].desc;
            }
    },
    // "Mounted" Method that cycles through slides in the slides array every 4 seconds, by incrementing index of current slide (fires on page load)
    /*mounted(){
        setInterval(() => {
            if(this.slideIndex > 2) {this.slideIndex = 0;}
            this.currentPath = this.slides[this.slideIndex].path;
            this.currentAlt = this.slides[this.slideIndex].alt;
            this.currentDesc = this.slides[this.slideIndex].desc;
            this.slideIndex++;
        },
        4000)
    },*/
});
// Creating Vue instance for gallery
var app = new Vue({
    el: '#vue-novelGallery',
});

/*
Sources:
https://www.w3schools.com/jsref/met_win_setinterval.asp
https://codesource.io/using-the-vue-mounted-lifecycle-hook/ 

Sources (Images):

*/