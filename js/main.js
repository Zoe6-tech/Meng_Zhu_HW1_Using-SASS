
//The Fetch API is a modern alternative to XMLHttpRequest
(()=>{
    //make an AJAX request using Fetch API
    //get json
    fetch('./data/classData.json')
    //give me responce and convert to JS file,JS can read
        .then(response => response.json())
        .then(profData=>{
            //debugger;
            // console.log(profData);
            handleData(JSON.stringify(profData));
            //handleData
            //here is what you would call the function that puts the piece on the page
        })

//catch error,like if else,show error on window
//.catch((error)=>{console.log(error);})

    function handleData(profData){
        //debugger;
        let myData = JSON.parse(profData)
        profSection = document.querySelector('.profPanelText'),
        profTemplate = document.querySelector('.prof-template');
        console.log(profTemplate);
        
        let currentProf=profTemplate.cloneNode(true);
        let currentProfText = currentProf.content.querySelector('.profCourse');
        console.log(myData);
        console.log(currentProfText);

        currentProfText.querySelector('#course-name').textContent=myData['coursename'];
        currentProfText.querySelector('#course-code').textContent= myData['coursecode'];
        currentProfText.querySelector('.prof-name').textContent=myData['profname'];
        let list = currentProfText.querySelector('.list-inline');
        //=myData['classtime'];
        //list.appendChild();
        for(let cs_time in myData['classtime']){
            let childLi = document.createElement('li');
            childLi.textContent = myData['classtime'][cs_time];
            list.appendChild(childLi);
        }
        
        /* currentProfText[2].textContent=myData['coursecode'];
        currentProfText[3].textContent=myData['profname'];
        currentProfText[4].textContent=myData['classtime']; */
        profSection.appendChild(currentProf.content);

        /* for(let profCourse in myData){
            //debugger;
            
        } */

    }

})();


