// Add the coffee to local storage with key "coffee"


async function getdata(){
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
    let res= await fetch(url)
    let data=await res.json()
    append(data)
   //return data
    console.log(data)
}


function append(data){
    let menu=document.getElementById("menu")
    data.forEach(function(ele){
        let div=document.createElement("div");
        let p=document.createElement("p")
        p.innerText=ele.title;
        div.append(p)
        menu.append(div)
    })
    console.log(data)

}

let url=`https://masai-mock-api.herokuapp.com/coffee/menu`;

console.log(url)
