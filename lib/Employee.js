class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

        // get name function
        getName () {
            return this.name;
        }
    
        // get ID function 
        getId () {
            return this.id;
        }   
    
        // get email function
        getEmail () {
            return this.email;
        }
    
        // get role function
        getRole () {
            return 'Employee'; 
        }

}

// export
module.exports = Employee