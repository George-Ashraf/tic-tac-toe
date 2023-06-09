const gameboard=document.querySelector('#gameboard')
const infodisplay=document.querySelector('#info')
const startcells=[
    "","","","","","","","",""
]
let go="fa-x"
infodisplay.textContent=" cross goes first"

function createboard(){
    startcells.forEach((cell,index)=>{
       const cellelement= document.createElement('div')
       cellelement.classList.add('square')
       cellelement.id=index
       cellelement.addEventListener('click',addgo)
       gameboard.append(cellelement)
    })
}
createboard()

function addgo(e){
    const godisplay=document.createElement('div')
    godisplay.classList.add(go)
    e.target.append(godisplay)
    go=go==="fa-o" ?"fa-x":"fa-o"
    infodisplay.textContent="it is now "+go+" go."
    e.target.removeEventListener("click",addgo)
    checkscore()
}
function checkscore(){
  const allsquare=  document.querySelectorAll(".square")
const win=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]
win.forEach(array=>{
   const circlewin= array.every(cell=>allsquare[cell].firstChild?.classList.contains('fa-o'))
   if(circlewin){
    infodisplay.textContent="circle wins !"
    allsquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
    return
   }
})
win.forEach(array=>{
    const crosswin= array.every(cell=>allsquare[cell].firstChild?.classList.contains('fa-x'))
    if(crosswin){
     infodisplay.textContent="cross wins !"
     allsquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
     return
    }
 })

}
