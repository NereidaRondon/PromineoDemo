let bgNone=()=>{ 
    document.getElementById('bg').style.backgroundImage ="";
};

let bgLight=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/bluemountains.png)";
};

let bgMarble=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url(images/pinkbluemarble.png)";
};

let bgRainbow=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/rainbow.webp')";
};

let bgSmoke=()=>{ 
    document.getElementById('bg').style.backgroundImage ="url('images/smoke.webp')";
};

var userInput = document.getElementById("new-task");

userInput.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

let id = 0;
let task=()=>{
    let date = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(-1);

    row.setAttribute('id', `item-${id}`);
    row.setAttribute('onmouseover', `mouseOver()`);   
    
    row.insertCell(0).innerHTML=`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
    
    row.insertCell(1).innerHTML=document.getElementById('new-start-date').value; 
    row.insertCell(2).innerHTML=document.getElementById('new-end-date').value;  
    row.insertCell(3).innerHTML = document.getElementById('new-task').value;

    let deleteAction = row.insertCell(4);
    deleteAction.appendChild(deleteButton(id++));

    console.log(`Added a row with id: item-${id}`);

    document.getElementById('new-task').value='';
    document.getElementById('new-start-date').value='';
    document.getElementById('new-end-date').value='';
    console.log(`Fields are cleared`);   
}
 
function deleteButton(id){
    let btn=document.createElement('button');
    btn.className='btn btn-outline-dark';
    btn.id=id;
    btn.innerHTML = '🗑️';
   
    btn.onclick = ()=>{
        console.log(`Deleting row with id: item-${id+1}`);
        let taskToDelete = document.getElementById(`item-${id}`);
        taskToDelete.parentNode.removeChild(taskToDelete);
    };
    return btn;   
};
