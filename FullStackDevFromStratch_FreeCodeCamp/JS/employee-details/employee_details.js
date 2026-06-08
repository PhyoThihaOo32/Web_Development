// initialize employee array
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Hob', age: 35, department: 'Finance', salary: 55000 },
];

// Display all employees
function displayEmployees() {
    const html = employees
        .map(emp => `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`)
        .join('');

    document.getElementById('employeesDetails').innerHTML = html;
}

// Calculate total salaries
function calculateTotalSalaries() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById('employeesDetails').innerHTML =
        `<h3>Total Salary: $${total}</h3>`;
}

// Display HR employees only
function displayHREmployees() {
    const hrEmployees = employees
        .filter(emp => emp.department === 'HR')
        .map(emp => `<p>${emp.id}: ${emp.name} - ${emp.department} - $${emp.salary}</p>`)
        .join('');

    document.getElementById('employeesDetails').innerHTML =
        hrEmployees || "<p>No HR employees found</p>";
}

// Find employee by ID
function findEmployeeById(id) {
    const employee = employees.find(emp => emp.id === id);

    if (employee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML =
            "<p>Employee not found</p>";
    }
}