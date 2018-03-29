//select table element
const t=document.getElementById('pixelCanvas');
// Select size input
var height=$('#inputHeight');
var width=$('#inputWidth');
// When size is submitted by the user, call makeGrid()
//Event listener for click on submit button
$('#inputSubmit').click(function(e){
  e.preventDefault();//to prevent the default function of event
  makeGrid();
});
//select color element
let color=$('#colorPicker');
function makeGrid(){
  t.innerHTML='';//for clearing pixelCanvas each time the grid size is changed
  let n=height.val();
  let m=width.val();
  //function to add event listener for filling the cell with chosen color
  let fillPixel=function(cell){
    cell.addEventListener('click',function(){
      cell.style.backgroundColor=color.val();
    });
  }
  for(let i=0;i<n;i++){
    let row=t.insertRow(i);
    for(let j=0;j<m;j++){
      let cell=row.insertCell(j);
      cell.addEventListener('click',fillPixel(cell));
    }
  }
}
