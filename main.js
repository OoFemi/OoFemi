
var i = 0;
var mainConatainer = document.getElementById('main');
let contactList = [];

function addNew() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var tel = document.getElementById('tel').value;

	var regEx = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z.]+)/ig;
	var regExNum = /^[0-9]+$/;

	if (name === '' || tel === '' || email ==='' ){
	    alert("*All marked fields are required");
	}else if(!tel.match(regExNum) || tel.length>11 || tel.length<11){
	    alert("*Invalid Phone Number");
	}else if (!email.match(regEx)){
	    alert("*Invalid Email Address");
	}else {
		let constructor = {
			name: name,
			tel: tel,
			email: email,
		};

		document.getElementById('name').value = "";
		document.getElementById('email').value = "";
		document.getElementById('tel').value = "";

		contactList.push(constructor);
		showContacts()
	}
}
function showContacts(){
	mainConatainer.innerHTML = "";
	contactList.forEach((elem, index) => {
		mainConatainer.innerHTML += `
			<h1 class="clickable" onclick="if (document.getElementById('${i}').style.display === 'flex') {document.getElementById('${i}').style.display = 'none';}else {document.getElementById('${i}').style.display = 'flex';}">${elem.name}</h1>
			<div class="container" id="${i}">
				<div class="box2">
					<h3>Name</h3>
					<p>${elem.name}</p>
					<h3>Phone Number</h3>
					<p>${elem.tel}</p>
					<h3>Email</h3>
					<p>${elem.email}</p>
					<span class="btn">Edit</span>
					<span class="btn" onclick="deleteC(${index})">Delete</span>
				</div>
			</div>
		`;
		i++;
	});
}

function deleteC(id){
	var confirmDeletion = confirm(`Are you sure you want to delete contact ?`);

	if(confirmDeletion){
		contactList.splice(id,1);
		showContacts();
	}
}