let input = document.querySelector('input[type="text');
let rootElm = document.querySelector(".movies_list");

let allMovies = [
  {
    name: "Mission Impossible",
    watched: false,
  },
  {
    name: "Up",
    watched: true,
  },
];

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI(allMovies,rootElm);
  }
});


function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createMovieUI(allMovies,rootElm);
}

function elm(type,attr={}, ...children){
    let element = document.createElement(type);
    for(let key in attr){
        if(key.startsWith("data-")){
            element.setAttribute(key,attr[key]);
        } else{
            element[key]=attr[key];
        }
    }
    children.forEach(child => {
        if(typeof child === "object"){
            element.append(child);
        } 
        if(typeof child === "string"){
            let node = document.createTextNode(child);
            element.append(node);
        }
    });
    return element;
}

function createMovieUI(data,root) {
    root.innerHTML = "";
    data.forEach((movie, i) => {
        let li = elm(
            "li",
            {},
            elm("lable",{
                for : i,
            }, movie.name),
            elm("button",{
                id : i,
            }, movie.watched? 'watched' : 'To Watch')
            
        )
        // let button = document.createElement("button");
        // button.id = i;
        // button.innerText = movie.watched? 'watched' : 'To Watch';
        // let label = document.createElement('label');
        // label.for = i;
        // label.innerText = movie.name;
        rootElm.append(li);
    });
}

createMovieUI(allMovies,rootElm);