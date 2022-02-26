
// generate manager HTML
const renderManager = function (manager) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-80">
            <div class="card-top p-2">
                <h2>${manager.name}</h2>
                <h4>Manager</h4>
            </div>
            <div class="card-bottom p-2">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="phone">Office Number: ${manager.phone}</p>
            </div>
        </div>
    </div>
    `
}

// generate engineer HTML
const renderEngineer = function (engineer) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-80">
            <div class="card-top p-2">
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4>
            </div>
            <div class="card-bottom p-2">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// generate intern HTML
const renderIntern = function (intern) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-80">
            <div class="card-top p-2">
                <h2>${intern.name}</h2>
                <h4>Intern</h4>
            </div>
            <div class="card-bottom p-2">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

// generate array of cards
renderProfiles = (input) => {

    cardArray = [];

    for (let i=0; i<input.length; i++) {

        const data = input[i];
        const role = data.getRole();

        if (role === "Manager") {

            const Manager = renderManager(data);
            cardArray.push(Manager);

        }
        
        if (role === "Engineer") {

            const Engineer = renderEngineer(data);
            cardArray.push(Engineer);            

        } 
        
        if (role === "Intern") {

            const Intern = renderIntern(data);
            cardArray.push(Intern);
        }
    }

    //combine cards
    const renderedCards = cardArray.join('');

    // run generatPage function
    const generateHTML = generatePage(renderedCards);
    return generateHTML;

}

const generatePage = (cards) => {

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-text w-100 h3" id="navbar-text">Team Profile</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
                ${cards}
            </div>
        </div>
    </main>
    
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>`

}




module.exports = generatePage; 

