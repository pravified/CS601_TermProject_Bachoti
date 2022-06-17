document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");
  });
  
  function displayInfluencer(event) {
    // Fetch of JSON influencers data
    fetch("influencers.json")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched influencers data: ", data);
  
        // Get DOM elements by ID
        let infNameSelect = document.getElementById("infNameDropdown");
        let infNameText = document.getElementById("infName");
        let infDescText = document.getElementById("infDesc");
  
        // For each to loop through array of data from JSON, checking to see if current array's name matches selected
        // If it does, write contents to DOM, and break
        data.influencers.every((element) => {
          if(element.name === infNameSelect.value) {
            infNameText.innerHTML = element.name;
            infDescText.innerHTML = element.description;

            console.log("Influencer data displayed");
            return false;
          }
          return true;
        });
  
      });
  }
  
  /*
  Sources:
  Basic concept and approach referenced from 
  Hanson, Josh. “cs601-Fetch-2/Script.js.” 12 June 2022. 
  */