/*
Captura tots els errors possibles dels nivells 1 i 2.
*/

// NIVELL 1
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

const getEmployee = id =>{
    return new Promise((resolve, reject) =>{
        const emp = employees.find(emp => emp.id === id);
        resolve(emp);
    })
}


const getSalary = emp =>{ return new Promise((resolve, reject) =>{
    const sal = salaries.find(sal => sal.id === emp.id);
        const Salary = sal.salary;
        resolve(Salary);
    })
}

async function getNameAndSalary (id){
    try{
        const empl = await getEmployee(id);
        const salari = await getSalary(empl);
        console.log(empl.name, salari);
    } catch(err){
        console.log(err.message);
}}

getNameAndSalary(1);
getNameAndSalary(10);
getNameAndSalary('A');

// NIVELL 2
async function asynFun(){
    try{
        let res = await promFun();
    } catch(err) {
        console.log(err.message);
    }
}

let promFun = () => {
    new Promise((resolve, reject) =>{ 
        setTimeout(() => resolve(console.log('Promesa')), 2000);
    })
}

asynFun();
