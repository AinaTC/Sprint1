/*
Crea una funció asíncrona que rebi un id d'empleat i
imprimeixi per pantalla el nom de l'empleat i el seu salari, 
usant les funcions que has definit a l'exercici anterior.
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
const getEmployee = id =>{
    return new Promise((resolve, reject) =>{
        const emp = employees.find(emp => emp.id === id);
        resolve(emp);
    })
    }


const getSalary = emp =>{ 
    return new Promise((resolve, reject) =>{
        const sal = salaries.find(sal => sal.id === emp.id);
        const Salary = sal.salary;
        resolve(Salary);
})
}

async function getNameAndSalary (id){
    const empl = await getEmployee(id);
    const salari = await getSalary(empl);
    console.log(empl.name, salari);
}

getNameAndSalary(1);
getNameAndSalary(2);
getNameAndSalary(3);

