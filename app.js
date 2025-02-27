const url = "https://v2.jokeapi.dev/joke/Programming,Dark?blacklistFlags=nsfw,religious,political&type=single";
const btn = document.querySelector("button");
const para = document.querySelector("p");


let get=()=>{
    
    
    fetch(url)
    .then(data =>data.json())
    .then(item => {
        para.innerText=`${item.joke}`;
        //console.log(item);
    });

}
btn.addEventListener("click",get);
get();