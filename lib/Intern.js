// importing employee as parent
const Employee = require('../lib/Employee.js');

// extend employee constructor with intern class
class Intern extends Employee {
    constructor (name, id, email, school) {
        
        // set employee parameters
        super (name, id, email); 
        
        //set number
        this.school = school; 
    }

    // update intern getRole
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 