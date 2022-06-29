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
// add btn outside from function in ui
// function elm(type,attr={}, ...children){
//     let element = document.createElement(type);
//     for(let key in attr){
//         if(key.startsWith("data-")){
//           element.setAttribute(key,attr[key]);
//         } else{
//           element[key]=attr[key];
//         }
//     }
//     children.forEach(child => {
//         if(typeof child === "object"){
//             element.append(child);
//         } 
//         if(typeof child === "string"){
//             let node = document.createTextNode(child);
//             element.append(node);
//         }
//     });
//     return element;
// }

// function createMovieUI(data,root) {
//     root.innerHTML = "";
//     data.forEach((movie, i) => {
//         let btn = elm("button",{ id : i }, movie.watched? 'watched' : 'To Watch');
//         btn.addEventListener('click', handleChange)
//         let li = elm(
//             "li",
//             {},
//             elm("lable",{
//                 for : i,
//             }, movie.name),
//             btn
            
//         )
//         rootElm.append(li);
//     });
// }



// btn inside a function on ui

function elm(type,attr={}, ...children){
    let element = document.createElement(type);
    for(let key in attr){
      if(key.startsWith("data-")){
        element.setAttribute(key,attr[key]);
      } else if (key.startsWith('on')){
        let eventType = key.replace('on', '');
        element.addEventListener(eventType,attr[key]);
      }else{
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
          id:i,
          onclick:handleChange
        }, movie.watched? 'watched' : 'To Watch')
          
      )
      rootElm.append(li);
    });
}


createMovieUI(allMovies,rootElm);