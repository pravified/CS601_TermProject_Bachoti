document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loading is complete.");
  });
  
  function displayData(event) {
    // Fetch of JSON influencers data
    fetch("influencers.json")
      .then(response => response.json())
      .then(data => {
        console.log("Fetched influencers data: ", data);
  
        // Get DOM elements by ID
        const degreeTbl = document.getElementById("degreeTbl");
  
        let schoolTblCol = document.getElementById("school");
        let prgmTblCol = document.getElementById("program");
        let concTblCol = document.getElementById("concentration");
        let typeTblCol = document.getElementById("type");
        let yearTblCol = document.getElementById("year");
        let profsTblCol = document.getElementById("professors");
        let xtracursTblCol = document.getElementById("extracurriculars");
  
        // Modify visibility of various DOM elements on event
        let btnDisplay = document.getElementById("btnDisplay");
        btnDisplay.style.display = "none";
        let instructText = document.getElementById("instructText");
        instructText.style.display = "none";
        degreeTbl.style.display = "block";
  
        // Creating new row
        let newRow = document.createElement("tr");
        let newSchoolField = document.createElement("td");
        let newProgramField = document.createElement("td");
        let newConcField = document.createElement("td");
        let newTypeField = document.createElement("td");
        let newYearField = document.createElement("td");
        let newProfsField = document.createElement("td");
        let newXtraCursField = document.createElement("td");
  
        // Populating the column headers
        let fieldVal = document.createTextNode("School");
        schoolTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Program");
        prgmTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Concentration");
        concTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Type");
        typeTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Year");
        yearTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Professors");
        profsTblCol.appendChild(fieldVal);
  
        fieldVal = document.createTextNode("Extracurriculars");
        xtracursTblCol.appendChild(fieldVal);
  
        // For each to loop through array of data from JSON
        data.PB_college_degrees.forEach((element) => {
          // Creating a new row
          newRow = document.createElement("tr");
          newSchoolField = document.createElement("td");
          newProgramField = document.createElement("td");
          newConcField = document.createElement("td");
          newTypeField = document.createElement("td");
          newYearField = document.createElement("td");
          newProfsField = document.createElement("td");
          newXtraCursField = document.createElement("td");
  
          // Populating row with data of array at current iteration
          fieldVal = document.createTextNode(element.school);
          newSchoolField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.program);
          newProgramField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.concentration);
          newConcField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.type);
          newTypeField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.year);
          newYearField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.professors);
          newProfsField.appendChild(fieldVal);
  
          fieldVal = document.createTextNode(element.extracurriculars);
          newXtraCursField.appendChild(fieldVal);
  
          // Appends newly created fields to newly created row
          newRow.appendChild(newSchoolField);
          newRow.appendChild(newProgramField);
          newRow.appendChild(newConcField);
          newRow.appendChild(newTypeField);
          newRow.appendChild(newYearField);
          newRow.appendChild(newProfsField);
          newRow.appendChild(newXtraCursField);
  
          // Appends newly created row to table
          degreeTbl.appendChild(newRow);
          
          console.log("New row added");
        });
      });
  }
  
  /*
  Sources:
  Basic concept and approach referenced from 
  Hanson, Josh. “cs601-Fetch-2/Script.js.” 12 June 2022. 
  */