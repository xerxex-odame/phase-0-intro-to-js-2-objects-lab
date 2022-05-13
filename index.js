const employee = {
    name : "Lordia",
    streetAddress : "0222 9525 twin palace road"
  };
  
  
  
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = employee;
    newObject[key]=value;
    return newObject;
  }
  
  function deleteFromEmployeeByKey(employee,key);{
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
  ebb-ueni-uut};
