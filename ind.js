const form = document.querySelector("#form");
const eid = document.querySelector("#eid");
const username = document.querySelector("#username");
const dob = document.querySelector("#dob");
const doj = document.querySelector("#doj");
const dept = document.querySelector("#dept");
const address = document.querySelector("#address");
const salary = document.querySelector("#salary");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (Valid()) {
        add();
        clear();
    }
})

function Valid() {
    const eidv = eid.value.trim();
    const usernamev = username.value.trim();
    const dobv = dob.value.trim();
    const dojv = doj.value.trim();
    const deptv = dept.value.trim();
    const addressv = address.value.trim();
    const salaryv = salary.value.trim();
    var count = 0;
    if (eidv === '') {
        errormsg(eid, "Employeeid required");
    }
    else if (eidv > 999) {
        errormsg(eid, "The employee id is invalid (valid: 100 to 999)");
    }
    else if (eidv < 100) {
        errormsg(eid, "The employee id must between 100 - 999")
    }
    else if (isNaN(eidv)) {
        errormsg(eid, "The employee id must be a number value");
    }
    else {
        success(eid);
        count = count + 1;
    }
    let nameregex = /^[a-zA-Z\s]*$/;
    if (usernamev === '') {
        errormsg(username, "UserName Required");
    }
    else if (usernamev.length > 20) {
        errormsg(username, "The name must be less than or equals 20 characters");
    }
    else if (!(nameregex.test(usernamev))) {
        errormsg(username, "Letters and spaces are allowed");
    }
    else {
        success(username);
        count = count + 1;

    }
    if (dobv == '') {
        errormsg(dob, "Date of Birth required");
    }
    else {
        success(dob);
        count = count + 1;
    }
    if (dojv === '') {
        errormsg(doj, "Date of Joining required");
    }
    else {
        success(doj);
        count = count + 1;
    }
    if (deptv === '') {
        errormsg(dept, "Department required");
    }
    else if (!(nameregex.test(deptv))) {
        errormsg(dept, "Letters and spaces are allowed");
    }
    else {
        success(dept);
        count = count + 1;
    }
    let nameregex1 = /^[a-zA-Z0-9\s]*$/;
    if (addressv === '') {
        errormsg(address, "Address required");
    }
    else if (!(nameregex1.test(addressv))) {
        errormsg(address, "Letters and spaces are allowed");
    }
    else if (addressv.length > 50) {
        errormsg(address, "Address should not exceed 50 characters");
    }
    else {
        success(address);
        count = count + 1;
    }
    if (salaryv === '') {
        errormsg(salary, "Salary required");
    }
    else if (isNaN(salaryv)) {
        errormsg(salary, "The salary must be a number value");
    }
    else {
        success(salary);
        count = count + 1;

    }
    if (count == 7) return true;
}
function errormsg(element, message) {
    const parentGroup = element.parentElement;
    const errorM = parentGroup.querySelector('.error');
    errorM.innerText = message;
    parentGroup.classList.add('error');
    parentGroup.classList.remove('success');
}
function success(element) {
    const parent = element.parentElement;
    const errorM = parent.querySelector('.error');
    errorM.innerText = '';
    parent.classList.add('success');
    parent.classList.remove('error');
}
function add() {
    var eidv = document.formm.eid.value;
    var usernamev = document.formm.username.value;
    var dobv = document.formm.dob.value;
    var dojv = document.formm.doj.value;
    var deptv = document.formm.dept.value;
    var addressv = document.formm.address.value;
    var salaryv = document.formm.salary.value;
    var tr = document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    var td7 = tr.appendChild(document.createElement('td'));
    var td8 = tr.appendChild(document.createElement('td'));
    td1.innerHTML = eidv;
    td2.innerHTML = usernamev;
    td3.innerHTML = dobv;
    td4.innerHTML = dojv;
    td5.innerHTML = deptv;
    td6.innerHTML = addressv;
    td7.innerHTML = salaryv;
    td8.innerHTML = '<div class="row"><button onclick="Edit(this)" class="edit">Edit</button>&nbsp;<button onclick="Delete(this)" class="del">Delete</button></div>'
    document.getElementById("tb1").appendChild(tr);
}

function Edit(button) {
    var row = button.closest('tr'); 
    var eidv = row.cells[0].innerHTML;
    var usernamev = row.cells[1].innerHTML;
    var dobv = row.cells[2].innerHTML;
    var dojv = row.cells[3].innerHTML;
    var deptv = row.cells[4].innerHTML;
    var addressv = row.cells[5].innerHTML;
    var salaryv = row.cells[6].innerHTML;
    eid.value = eidv;
    username.value = usernamev;
    dob.value = dobv;
    doj.value = dojv;
    dept.value = deptv;
    address.value = addressv;
    salary.value = salaryv;
    form.isEditMode = true;
    row.parentNode.removeChild(row);
}



function Delete(button) {
    var row = button.closest('tr');
    row.parentNode.removeChild(row);
}

function clear() {
    document.getElementById('form').reset();
}