function autoExpand(element){
    element.style.height = 'auto';
    element.style.height = (element.scrollHeight) + 'px';
}

function createForm(){
    var form= document.createElement("form");
    form.id="newForm";
    
    var tittle=document.createElement("textarea");
    tittle.placeholder="Tittle";
    tittle.id="taskTittle";

    var note=document.createElement("textarea");
    note.placeholder="Take your note..";
    note.id="taskText";

    form.appendChild(tittle);
    form.appendChild(note);
    return form;
}

function largeTextarea(){
    var textarea=document.getElementById("taskText");   
    
    var form = createForm();

    textarea.parentNode.replaceChild(form,textarea);

    return false;

}

var textarea=document.getElementById("taskText");
textarea.addEventListener("click", largeTextarea);

function makeForm(){
    var form= document.createElement("form");
    
    var textarea=document.createElement("textarea");
    textarea.value=document.getElementById("taskTittle").value;
    textarea.value+= "\n\n" + document.getElementById("taskText").value;
    document.getElementById("taskText").value="";
    document.getElementById("taskTittle").value="";

    var lineBreak=document.createElement("br");

    form.appendChild(textarea);
    form.appendChild(lineBreak);
    return form;
}
    
function addToList(){
    var mainList= document.getElementById("myList");
    var newList= document.createElement("li");
    
    var form = makeForm();

    newList.appendChild(form);
    mainList.appendChild(newList);

    var form1=document.getElementById("newForm");

    var textarea=document.createElement("textarea");
    textarea.id="tasktext";
    textarea.parentElement.placeholder="Take your note..";

    form1.parentNode.replaceChild(textarea,form1);

    return false;
    
}