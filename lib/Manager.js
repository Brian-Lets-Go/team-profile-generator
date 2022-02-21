// importing employee as parent
const Employee = require('../lib/Employee.js');

// extend employee constructor with manager class
class Manager extends Employee {
    constructor (name, id, email, number) {
        
        // set employee parameters
        super (name, id, email); 
        
        //set number
        this.number = number; 
    }

    // update manager getRole
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 