// Write your solution in this file!


let employee = {name :"ghofran", streetAddress :"avcilar"};
 


    function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };
    newObj.name ="Sam";
    newObj.streetAddress="11 Broadway"
    return newObj;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     
     employee.name ="Sam";
     employee.streetAddress="12 Broadway";
    return   employee;
}

function  deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee };
    delete newObj.name ;
    return newObj
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
    const newObj = employee ;
    delete newObj.name ;
    return newObj
}
