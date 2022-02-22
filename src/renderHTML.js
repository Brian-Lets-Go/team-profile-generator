
// generate manager HTML
const renderManager = function (manager) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-80">
            <div class="card-top">
                <h2>${manager.name}</h2>
                <h4>Manager</h4>
            </div>
            <div class="card-bottom">
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
            <div class="card-top">
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4>
            </div>
            <div class="card-bottom">
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
            <div class="card-top">
                <h2>${intern.name}</h2>
                <h4>Intern</h4>
            </div>
            <div class="card-bottom">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

