let boxes=document.querySelectorAll(".box")
let reset=document.getElementById("reset")
let msg=document.getElementById("msg")
let newbtn=document.getElementById("newbtn")


let playerO=true
let winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disableboxes = () =>{
    for(box of boxes){
        box.disabled=true
    }
}

const enableboxes = () =>{
    for(box of boxes){
        box.disabled=false
        box.textContent=""
    }
    msg.textContent=""
    newbtn.classList.add("hide")
}

const checkwinner = () =>{
    for(let pattern of winnerPattern){

        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !=""){
            if(val1 ===val2 && val2 ===val3){
                disableboxes()
                msg.textContent='Winner is '+val1
                newbtn.classList.remove("hide")
            }
        }
        
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playerO ===true){
            box.textContent="X"
            playerO=false
        }else{
            box.textContent="O"
            playerO=true
        }
        box.disabled=true
        checkwinner()
    })
})

newbtn.addEventListener("click",enableboxes)
reset.addEventListener("click",enableboxes)
