// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER


// ADD EMPLOYEE
const form = document.querySelector('#addForm');
const table = document.querySelector('#employees');

form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
 

    // GET THE VALUES FROM THE TEXT BOXES
    let employeeID = document.querySelector('#id').value;
    let name = document.querySelector('#name').value;
    let ext = document.querySelector('#extension').value;
    let email = document.querySelector('#email').value;
    let department = document.querySelector('#department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = table.insertRow();
       

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let cellIDTxt = document.createTextNode(employeeID);
    cellID.appendChild(cellIDTxt);
    row.appendChild(cellID);

    let cellNameTxt = document.createTextNode(name);
    cellName.appendChild( cellNameTxt );
    row.appendChild(cellName);

    let cellExtTxt = document.createTextNode(ext);
    cellExt.appendChild( cellExtTxt );
    row.appendChild(cellExt);

    let cellEmailTxt = document.createTextNode(email);
    cellEmail.appendChild( cellEmailTxt );
    row.appendChild(cellEmail);

    let cellDepartmentTxt = document.createTextNode(department);
    cellDepartment.appendChild( cellDepartmentTxt );
    row.appendChild(cellDepartment);


    table.append(row);

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-end';
    let textDelete = document.createTextNode('X');
    deleteBtn.appendChild(textDelete)
    row.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.querySelector('#id').focus()

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    updateEmployeeCount()
})

// DELETE EMPLOYEE

document.querySelector('#employees ').addEventListener('click', function name(e) {

    if(e.target.tagName.toLowerCase() == "button"){
        if (confirm('Are you sure you want to delete this employee')) {
            console.log(e.target.parentElement.rowIndex);
            let rowIndex = e.target.parentElement.rowIndex;
            table.deleteRow(rowIndex);
            updateEmployeeCount()
        } 
    }
    
});

function updateEmployeeCount(){
    let employeeCount = document.querySelectorAll('#employees tr').length - 1;
    document.querySelector('#empCount').innerHTML = `(${ employeeCount })`;
}

