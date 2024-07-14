class Human {
	constructor(firstName, lastName, gender, age, calories){
		this.age = age;
		this.firstName = firstName;
		this.lastName = lastName;
		this.calories = calories;
		this.gender = gender;
		this.busy = false;

		for (let child of document.querySelectorAll('li span')) {
			child.innerHTML = this[child.id];
		}

		setInterval(() => this.hungry(), 60000);
	}
  
	feed() {
		if(!this.busy){
			this.busy = true;
			this.calories += 200;
			let status = document.querySelector('.status');

			document.getElementById('calories').innerHTML = this.calories;
			status.innerHTML = 'Nom nom nom';
			setTimeout(() => {
				status.innerHTML = '-';

				if(this.calories > 0 && this.calories < 500) {
					this.busy = false;
					status.innerHTML = "I'm still hungry";
				} 
				else {
					status.innerHTML = "I'm not hungry";
					setTimeout(() => {
						this.busy = false;
						status.innerHTML = '-';
					}, 2000);
				}
			}, 10000);
		}
	}

	sleep(seconds) {
		if(!this.busy){
			this.busy = true;
			let status = document.querySelector('.status')
			
			status.innerHTML = "I'm sleeping";
			setTimeout(() => {
				this.busy = false;

				status.innerHTML = "I'm awake now";
				setTimeout(() => {
					status.innerHTML = '-';
				}, 2000);
			}, seconds * 1000);
		}
	}

	hungry() {
		if(this.calories > 200) {
			this.calories -= 200;
		}

		document.getElementById('calories').innerHTML = this.calories;
	}
}

class Superhero extends Human {
	constructor(firstName, lastName, gender, age, calories) {
		super(firstName, lastName, gender, age, calories);

		document.querySelector('.image').setAttribute('src', 'assets/images/superhero.jpg');
		document.querySelector('.turn').classList.add('hidden');
		document.querySelectorAll('.hidden').forEach(node => node.classList.remove('hidden'));
	}

	fight() {
		if(!this.busy) {
			this.busy = true;
			let status = document.querySelector('.status');

			status.innerHTML = 'Khhhh-chh... Bang-g-g-g... Evil is defeated!';
			setTimeout(() => {
				this.busy = false;
				status.innerHTML = '-';
			}, 3000);
		}
	}

	fly() {
		if(!this.busy) {
			this.busy = true;
			let status = document.querySelector('.status');

			status.innerHTML = "I'm flying!";
			setTimeout(() => {
				this.busy = false;
				status.innerHTML = '-';
			}, 10000);
		}
	}
}

const human = new Human('Bruce', 'Banner', 'male', 25, 0);
let superhero;

document.querySelector('.sleep').addEventListener('click', () => {
	human.sleep(prompt('Enter number of seconds to sleep'));
});

document.querySelector('.feed').addEventListener('click', () => {
	human.feed();
});

document.querySelector('.turn').addEventListener('click', () => {
	if(human.calories >= 500) {
		superhero = new Superhero('Hulk', '', 'male', 25, human.calories);
	} 
	else {
		document.querySelector('.info').innerHTML = 'Not enough calories!';
	}
});

document.querySelector('.fly').addEventListener('click', () => {
  	superhero.fly();
});

document.querySelector('.fight').addEventListener('click', () => {
  	superhero.fight();
});
