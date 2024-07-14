const heroes = [
    { 
        name: 'Black Panther', 
        strength: 66, 
        age: 53, 
    },
    { 
        name: 'Captain America', 
        strength: 79, 
        age: 137, 
    },
    { 
        name: 'Captain Marvel', 
        strength: 97, 
        age: 26, 
    },
    { 
        name: 'Hulk', 
        strength: 80, 
        age: 49, 
    },
    { 
        name: 'Iron Man', 
        strength: 88, 
        age: 48, 
    },
    { 
        name: 'Spider-Man', 
        strength: 78, 
        age: 16, 
    },
    { 
        name: 'Thanos', 
        strength: 99, 
        age: 1000, 
    },
    { 
        name: 'Thor', 
        strength: 95, 
        age: 1000, 
    },
    { 
        name: 'Yon-Rogg', 
        strength: 73, 
        age: 52,
    }
];

function createTable(table, data) {
    let header = document.createElement('tr');

    for (let key in data[0]) {
        let th = document.createElement('th');
        th.setAttribute('scope', 'col');
        th.innerText = key.charAt(0).toUpperCase() + key.slice(1);
        th.addEventListener('click', () => {
            key = th.innerText.toLowerCase();
            order[key] = order[key] === 'ASC' ? 'DESC' : 'ASC';
    
            service.innerText = `Sorting by ${th.innerText}, order: ${order[key]}.`
            sortTable(table, key, order[key]);
        });
        header.append(th);
    }
    table.append(header);

    for (const hero of data) {
        let row = document.createElement('tr');
        for (const key in hero) {
            let cell = document.createElement('td');
            cell.innerText = hero[key];
            row.append(cell);
        }
        table.append(row);
    }
}

function sortTable(table, key, order) {
    heroes.sort((a, b) => {       
        if (order === 'ASC') {
            return a[key] > b[key] ? 1 : -1;
        }

        return a[key] < b[key] ? 1 : -1;
    });

    table.innerHTML = '';
    createTable(table, heroes);
}

let table = document.createElement('table');
let service = document.createElement('div');
let parameter = 'Name';
let order = {
    name: 'ASC',
    strength: 'DESC',
    age: 'DESC',
};

service.innerText = `Sorting by ${parameter}, order: ${order['name']}.`;
service.id = 'service';

createTable(table, heroes);

document.body.append(table);
document.body.append(service);