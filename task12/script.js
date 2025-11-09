let form = document.getElementById('form')
let users = []
let userTable = document.getElementById('userTable')
let elementDiv = document.getElementById('div_element')

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    console.log('submit')

    let obj = {
        firstName : e.target[0].value,
        lastName : e.target[1].value
    }

    users.push(obj)
    console.table(users)

    displayUsers()

    e.target[0].value = ""
    e.target[1].value = ""
})

function displayUsers(){
    userTable.innerHTML = ""

    users.forEach((user, index) => {
        let row = document.createElement('tr')

        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>
                <button class="btn btn-success btn-sm me-2" onclick="updateUser(${index})">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button>
            </td>
        `
        userTable.appendChild(row)
    })
}

function deleteUser(index){
    users.splice(index, 1)
    displayUsers()
}

function updateUser(index){
    let newFirst = prompt("Enter new first name:", users[index].firstName)
    let newLast = prompt("Enter new last name:", users[index].lastName)

    if(newFirst && newLast){
        users[index].firstName = newFirst
        users[index].lastName = newLast
        displayUsers()
    }
}

let newH2 = document.createElement('h2')
newH2.innerText = "Javascript"
elementDiv.appendChild(newH2)

