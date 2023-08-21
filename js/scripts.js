$('#input').on('keydown', function(event) {
    if(event.key === 'Enter') {
        event.preventDefault();
        newItem();
    }
});

function newItem(){
  
    //1. Adding a new item to the list of items: DONE.

       let li = $('<li></li>');
       let inputValue = $('#input').val();
       li.append(inputValue);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         $('#list').append(li);
         $('#input').val("");
       }
    
     //2. Crossing out an item from the list of items: DONE. 
//function crossout is going to make the li element toggle between 
//being crossed out or not depending on the event of double clicking it.

       function crossOut() {
             li.toggleClass("strike");
         }
    
         li.on("dblclick", function crossOut () {
            li.toggleClass("strike");
         });
    
     //3(i). Adding the delete button "X": 
     //custom element crossOutButton represent the x delete button for each itm
     //event of clicking on the x will delete the item

       let crossOutButton = $('<crossOutButton></crossOutButton>');
         crossOutButton.append(document.createTextNode("X"));
         li.append(crossOutButton);
    
         crossOutButton.on("click", deleteListItem);

     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.addClass("delete");
         };
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    


    