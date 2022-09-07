const userArr = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => addRow(data))

function addRow(data) {
    data.forEach(el => {
        const table = document.getElementById("table");
        const row= document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");    
        const td4 = document.createElement("td");
        td1.innerHTML = el.userId
        td2.innerHTML = el.id
        td3.innerHTML = el.title
        td4.innerHTML = el.body   
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        table.appendChild(row);
    })
};

