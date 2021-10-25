/*
Fixa un element catch a la invocació del nivell 
anterior que capturi qualsevol error i el mostri per la consola.
*/

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


let getEmployee = id => {
    return new Promise((resolve, reject) =>{
         const emp = employees.find(emp => emp.id === id);
         resolve(emp)} )
 }
 
 let getSalary = emp =>{
     return new Promise((resolve, reject) => {
         const salary = salaries.find(sal => sal.id === emp.id).salary;
         resolve(salary);})
 }
 
 getEmployee(1)
 .then(res => console.log(res,getSalary(res)))
 .catch(err => console.log(err.message));
  
 getEmployee(11)
 .then(res => console.log(res,getSalary(res)))
 .catch(err => console.log(err.message));