/*const person={
	FirstName: 'John',
	Lastname: 'Doe',
	Age : 30,
	hobbies : ['music','movies','sport']
};
*/
/*
const todos = [
{
	id:1,
	text: 'Take out trash',
	isCompleted:true
},
{
	id:2,
	text:'Meeting with boss',
	isCompleted:true
},
{
	id:3,
	text: ' Go to the dentist',
	isCompleted:false
}
];

//console.log(todos[1].text);
//Sending to server
//const todoJSON = JSON.stringify(todos);





//for

for (let i = 0; i <= 1; i++) {
	console.log(todos[i]);
}

//while

let i=0;
while(i<10)
{
	console.log(`While loop number: ${i}`);
	i++;
}







//for-of
for (let todo of todos)
	console.log(todo);

//forEach,map, filter

todos.forEach(function(todo){
	console.log(todo.text);

});

const TodoText = todos.map(function(todo){
	return todo.text;

});


const todoCompleted1 = todos.filter(function(todo){
	return todo.isCompleted=true;

});






const x= '10';

if (x==10){ // Double Equals checks only value
	console.log('x is 10');
}

if (x===10){ // Triple equals checks type as well
	console.log('x is 10');
}

else
	console.log('x is not 10');









function AddNums(num1 , num2) { //Creates a function
	return num1+num2;
}

console.log(AddNums(5,10));
	*/


/*function person(FirstName,Lastname,dob) { //Constructor Function
	this.FirstName= FirstName;
	this.Lastname=Lastname;
	this.dob = new  Date(dob);
	this.getFullName = function() {  //Function that returns full name
		return `${this.FirstName} ${this.Lastname}`; 
	}

	this.getBirthYear = function() {  //Function that returns the year of DOB
		return this.dob.getFullYear();
	}
	
	person.prototype.getBirthYear = function() { //Prototype Function that returns year od DOB
	return this.dob.getFullYear();
}

	person.prototype.getFullName = function() {  //Prototype Function that returns full name
	return `${this.FirstName} ${this.Lastname}`; 
}

}
	
//Creating a class
class Person{
	constructor(FirstName,Lastname,dob){

	this.FirstName= FirstName;
	this.Lastname=Lastname;
	this.dob = new  Date(dob);
}

getBirthYear() {
	return this.dob.getFullYear();
}
getFullName() {
	return `${this.FirstName} ${this.Lastname}`; 
}
}
const p1 = new Person('John','Doe','4-3-1980');
const p2 = new Person('Jason','Grace','15-5-1991'); // Creating an object

console.log(p2.getFullName());
console.log(p1.getBirthYear());
	

//DOM-Methods in JavaScript

// Single element selectors	
const form = document.getElementById('my-form');
const form1 = document.querySelector('h1');

console.log(form);
console.log(form1);


// Multiple element selectors	
const QueryMultiple = document.querySelectorAll('.item');
console.log(QueryMultiple); // Gives a node-list which is similar to an array and supports array methods
//const ClassNameMultiple = getElemensByClassName('item');
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

QueryMultiple.forEach((item) => console.log(item)); // Looping through elemnts of Query



const ul = document.querySelector('.items');


//ul.remove(); 
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>'


const btn = document.querySelector('.btn'); // Dynamically edit CSS elements
btn.addEventListener('click',(e) =>{  //Takes in 2 parameter, the event and the event parameter
	e.preventDefault(); //Prevents the element from doing its default operation i.e a submit button submits
	console.log(e.target);
	console.log(e.target.className);
	console.log(e.target.id);
	document.querySelector('#my-form').style.background = 'green';
	const h1 = document.querySelector('#my-form')
	h1.innerHTML = '<h1>User Added </h1>'
	document.querySelector('body').classList.add('bg-dark');

	/* Different Listeners:
	 mouseover- Changes when you hover the mouse over the button
	 mouseout - changes when you exit from the button press

});
*/


const btn = document.querySelector('.btn');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const back = document.querySelector('.back');
const userList = document.querySelector('#users');

btn.addEventListener('click', onSubmit);


function onSubmit(e){
		e.preventDefault();

		if(nameInput.value==='' && emailInput.value=== '')
		{
			msg.classList.add('error');
			msg.innerHTML = 'Please Enter both fields';
		}
		
		if(nameInput.value==='' && emailInput.value != '')
			{
			msg.innerHTML = 'Please Enter Name fields';
			}
		if(nameInput.value !='' && emailInput.value === '')
			{
			msg.innerHTML = 'Please Enter email fields';
			}

		if(nameInput.value !='' && emailInput.value != '')
		{
			console.log("Success")
			msg.remove();
			document.querySelector('.my-form').style.background = 'green';
		const h1 = document.querySelector('.my-form')
		h1.innerHTML = '<h1>User Added </h1>'
		document.querySelector('body').classList.add('bg-dark');
		const ul = document.querySelector('.items');
		ul.remove();
		back.classList.add('backbtn');
		back.innerHTML = '<A type="submit" href="#"> Back to Main Page </A> ';
		}
}

	
		



