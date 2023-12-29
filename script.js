function autoExpand(element){
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

function addToList(){
    var mainList= document.getElementById("myList");
    var newList= document.createElement("li");
    
    var form= document.createElement("form");
    
    var textarea=document.createElement("textarea");
    textarea.value=document.getElementById("taskText").value;

    var lineBreak=document.createElement("br");

    form.appendChild(textarea);
    form.appendChild(lineBreak);

    newList.appendChild(form);
    mainList.appendChild(newList);

    return false;
    
}