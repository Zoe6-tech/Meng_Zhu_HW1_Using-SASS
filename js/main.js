(()=>{
    //make an AJAX request using Fetch API
fetch('./data/classData.json')
.then(res => res.json())
.then(data=>{
    debugger;
    console.log(data);
    //handleData
    //here is what you would call the function that puts the piece on the page
})
//catch error,like if else,show error on window
.catch((err)=>{console.log(err);
})
})();