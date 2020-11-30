/*
const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2017},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

forEach-----------------------------------------------------------------------------------------------------

for(let i=0; i<companies.length;i++)  //For loop for logging all
{
	console.log(companies[i]);
}

companies.forEach(function(company){  //ForEach loop to do the same as the for with lesser variables
	console.log(company.name);
});






//filter----------------------------------------------------------------------------------------------------
// age greater than 21

let canDrink= [];
for(let i=0; i<ages.length;i++)  //For loop for logging all
{
	if (ages[i]>=21) {
		canDrink.push(ages[i]);
	}
}

const canDrink = ages.filter(function(age){
	if(age>=21)
		return true;
});


//const canDrink = ages.filter(age => age>=21); // Using an arrow function instead of an if

// Filter retail companies

const retailCompany = companies.filter(function(company){
	if(company.category=== 'Retail')
		return true;
})


const retailCompany = companies.filter(company => company.category === 'Retail');

// To find companies that started in the 80's

const company = companies.filter(company => company.start >= 1980 && company.start <1990);



// Companies that lasted more than 10 years

const lastcomp = companies.filter(company => (company.end - company.start) >= 10);
console.log(lastcomp);



//Map function----------------------------------------------------------------------------------------------------

// Create array of company names

const companyNames = companies.map(function(company){
	return `${company.name}[${company.start} - ${company.end}]` ;
});


const companyNames = companies.map(company => `${company.name}[${company.start} - ${company.end}]`)

console.log(companyNames);


const ageMap = ages
	.map(age => Math.sqrt(age));
	.map(age => age*2);

console.log(ageMap);



//Sort function----------------------------------------------------------------------------------------------------

const sortedCompaines = companies.sort(function(c1,c2){
	if(c1.start>c2.start){
		return 1;
	}
	else
	{
		return -1;
	}
});

//Sort companies based on start year

const sortedCompaines = companies.sort((a,b) => (a.start>b.start) ? 1 : -1);



console.log(sortedCompaines);


// Sort Ages
 const sortAges = ages.sort((a,b) => a-b);
 console.log(sortAges);




//Reduce Function----------------------------------------------------------------------------------------------------

const ageSum = ages.reduce((total,age) => total.push(age*2), []);



console.log(ageSum);



// Get total years for all companies

const totalYear = companies.reduce(function(total,company){
	return total + (company.end - company.start);
},0);


const totalYear = companies.reduce((total,company) => total + (company.end - company.start) , 0);
console.log(totalYear);


//Combine functions----------------------------------------------------------------------------------------------------

const combined = ages
	.map(age => age*2)
	.filter(age => age >= 40)
	.sort((a,b) => a-b)
	.reduce((a,b) => a+b,0);

console.log(combined);


//DOM-Document Object Model using vanilla JavaScript -------------------------------------------------------------------------------------------

> Change/Remove HTML elements
> Change and add CSS stylels to elements
> Read and change element attributes
> Create new HTML elements and insert them into the DOM/The page
> Attach event listeners to elements( click, keypress , submit)

Source Code
*/


let titles = document.getElementsByClassName('title');

console.log(Array.isArray(titles)); // False as it is not an array
console.log(Array.isArray(Array.from(titles))); // True as its converted into an array


Array.from(titles).forEach(function(item){ //Convert the titles into an array
	console.log(item);
})

const wmf = document.querySelector('#book-list li:nth-child(2) .name') // Selects the 2nd Li element
var box = document.querySelectorAll('#book-list li .name'); // Selects only the first span
console.log(box)

const books= document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){ //Uses an array to display
	console.log(book.textContent) // Displays the text content of the span
	//book.textContent += ' (book title)' // Adds or appends using the '+=' operator
})

//const bookList = document.querySelector('#book-list')
//document.querySelector('#book-list').style.background = 'green'
//bookList.innerHTML = '<h2>Too Many books to handle</h2>';
//bookList.innerHTML += '<p> This is how you append</p>';

//DOM Node is every elemnt in HTML like comment,attributes,tags textContent

const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is:', banner.nodeType); // To find the node type of the Node
console.log('#page-banner node namme is:', banner.nodeName); // To find the node type of the Node
console.log('#page-banner node has child nodes:', banner.hasChildNodes()); // To find the node type of the Node
//
const clonedBanner = banner.cloneNode(true); // true needs to be parsed as it'll clone the child nodes as well
console.log(clonedBanner)
//Nodes and parent nodes
const bookList = document.querySelector('#book-list')
console.log('The parent node:', bookList.parentNode ); //Finds the parent node
console.log('The parent node:', bookList.parentElement.parentElement ); // Finds the node/element 2 levels above
console.log( bookList.childNodes );//Displays all the child nodes of Book-List
console.log( bookList.children );//Displays all the child nodes excluding text of Book-List

console.log(bookList.nextSibling); //It returns the next node such as text etc
console.log(bookList.nextElementSibling); // It returns the next element like tags
console.log(bookList.previousElementSibling); // It returns the previous element like tags

//bookList.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else'//Latches on to bookList and change elements wrt interval


//Events------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Event to delete book and display alert. Not efficient as doesn't work if we add more books
/*
let btn = document.querySelectorAll('#book-list .delete');
 Array.from(btn).forEach(function(button){
	 button.addEventListener('click',function(e) {
	 const li = e.target.parentElement;
	 li.parentNode.removeChild(li)
})
 })

let alert = document.querySelectorAll('#book-list .alert');
Array.from(alert).forEach(function(element){
  element.addEventListener('click',function(e){
	window.alert('Book Deleted successfully!')});
})

//Event to prevent Default redirection
 const link = document.querySelector('#page-banner a');
 link.addEventListener('click',function(e){
	 e.preventDefault();
	 console.log('Navigation from ', e.target.textContent,' was prevented')
 })*/
//Creates an event listener in ul tag i.e parent to ensure it works for all added books
 const list = document.querySelector('#book-list ul')
 list.addEventListener('click',function(e){
	 if(e.target.className === 'delete'){
		 const li = e.target.parentElement
		 li.parentElement.removeChild(li)
	 }
 })

 let alert = document.querySelectorAll('#book-list .alert');
 Array.from(alert).forEach(function(element){
   element.addEventListener('click',function(e){
		  if(e.target.className === 'delete'){
 	window.alert('Book Deleted successfully!')};
})
})

//Forms------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const form = document.querySelector('#add-book')
// const addForm = document.forms['add-book'] can also be used
form.addEventListener('submit',function(e){
	e.preventDefault();
	console.log('Default stopped')
	const value = form.querySelector('input[type = "text"]').value;
	console.log(value);

	//create elements
	const li = document.createElement('li')
	const bookname = document.createElement('span')
	const deletebtn = document.createElement('span')

// append to DOM
li.appendChild(bookname);
li.appendChild(deletebtn);
list.appendChild(li);

//Add Content
deletebtn.textContent= 'delete';
bookname.textContent = value;
//li.style.color='red'  sets the li color of text to red
bookname.classList.add('name')
deletebtn.classList.add('delete')
})

// Adding attributes to the tags

//var book = document.querySelector('li:first-child .name')
//book.setAttribute('class' , 'name-2')


//Hiding books with a checkbox
const hideBox = document.querySelector('#hide')
hideBox.addEventListener('change',function(e){
	  if(hideBox.checked){
			list.style.display = "none";
		}
		else {
			list.style.display= "initial";
		}
});

//filter Books

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function(e){
	const term = e.target.value.toLowerCase();
	const bookName = list.getElementsByTagName('li')
	Array.from(bookName).forEach(function(book) {
		const title = book.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = "block"
		}
		else {
			book.style.display = "none"

		}
	});
});


const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});
