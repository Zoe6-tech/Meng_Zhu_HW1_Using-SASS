# Modular CSS-HW1
## Description
Task 1. Use the supplied CSS file as starting point, break this down and move parts of it into **modular SASS files**.
Task 2. Use Fetchon a page load to retrieve the data, gets the data back from the server(classData.json), and processes it.
## Technologies
* Visual Studio Code
* Window powershell
* Git Bash
## Prerequisites
* HTML
* CSS
* SASS
* AJAX
## Code Example
* Compile SASS into CSS file:`sass --watch sass:css --style compressed` or `sass --watch sass:css`
* Make an AJAX request using Fetch API:`fetch('./data/classData.json').then(res => res.json()).then(data=>{console.log(data);}).catch((err)=>{console.log(err);})`
### Using Fetch
Ajax makes HTTP requests through the native XMLHttpRequest object, the Fetch API is a modern alternative to XMLHttpRequest.
1. Fetching classData.JSON file, all the fetch function passing the url; 
2. Give me responce, classData.json is the respence we get. Turn it to js object;
3. Get and data and then handle the data.
## Author
Zhu Meng
## License
This project is licensed under the MIT[MIT] (MIT) license
