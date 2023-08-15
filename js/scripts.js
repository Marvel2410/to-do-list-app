
function newItem(){

    //javascript
    //1. Adding a new item to the list of items:

       let li = $('<li></li>');
       let inputValue = $('#input').val();
       li.appendChild(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
       }
    
     //2. Crossing out an item from the list of items: 
//function crossout is going to make the li element toggle between 
//being crossed out or not depending on the event of double clicking it.

       function crossOut() {
             li.toggleClass("strike");
         }
    
         li.on("dblclick", function crossOut () {
            li.toggleClass("strike");
         });
    
     //3(i). Adding the delete button "X": 
       let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.classList.add("delete")
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    


    