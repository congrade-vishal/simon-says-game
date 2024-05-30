// Event Bubbling 
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation(); //event bubbling
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// };


// Activity
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete")
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function(event){ //Event Delegation
    console.dir(event.target);
    if(event.target.nodeName=="BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");

    };
});

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//      delBtn.addEventListener("click", function(){
//         let par = this.parentElement; //this parentElement
//         par.remove();
//     });
// };



