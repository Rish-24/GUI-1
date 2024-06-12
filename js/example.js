// ADD NEW ITEM TO END OF LIST
var list = document.querySelector('ul');
var newItemList = document.createElement('li');
newItemList.textContent = "cream";
list.appendChild(newItemList);

// ADD NEW ITEM START OF LIST
var newItemList2 = document.createElement('li');
newItemList2.textContent = "kale";
list.insertBefore(newItemList2, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var numItems = document.querySelectorAll('ul li') 
numItems.forEach(function(item) {
    item.classList.add('cool');
})    

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var numItemes = document.querySelectorAll('ul li').length;
heading.innerHTML += '<span>' + numItemes + '</span>';