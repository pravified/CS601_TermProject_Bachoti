document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");
    getDOMElems();
  });

let artworks = "";

function getDOMElems(){
    artworks = document.getElementsByClassName("artgalleryphoto");
}

function highlightDesc(artwork){
    for(let i=0; i<artworks.length; i++){
        let description = document.getElementById("descItem0"+(i+1).toString())

        if(artworks[i] === artwork){
            description.style.backgroundColor = "#f8f8ff";
            description.style.color = "#1a1a1a";
            description.scrollIntoView({behavior: 'smooth'});
        }
        else {
            description.style.backgroundColor = "#1a1a1a";
            description.style.color = "#f8f8ff";
        }
    }
}

/*
Source:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
https://www.delftstack.com/howto/javascript/scroll-to-element-in-javascript/
*/