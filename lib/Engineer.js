// importing employee as parent
const Employee = require('../lib/Employee.js');

// extend employee constructor with engineer class
class Engineer extends Employee {
    constructor (name, id, email, github) {
        
        // set employee parameters
        super (name, id, email); 
        
        //set number
        this.github = github; 
    }

    // update engineer getRole
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer; 