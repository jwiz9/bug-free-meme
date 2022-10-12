// HTML cards for the employee classes
const createTeamCards = (registeredManager, engineers, interns) => {
    return `
        <article class="card">
            <div class="card__header">
                <h2 class="card__title">${registeredManager.name}</h2>
                <div>
                    <span class="card__logo"><i class="fa-solid fa-chess-king"></i></span>
                    <span class="card__subtitle">${registeredManager.getRole()}</span>
                </div>
            </div>
            <div class="card__body">
                <div class="card__details">
                    <p>ID: ${registeredManager.id}</p>
                    <p><a href="mailto:${registeredManager.email}"> Email: ${registeredManager.email} </a></p>
                    <p>Office Number: ${registeredManager.getOfficeNumber()} </p> 
                </div>
            </div>
        </article> 
        
    ${engineers
        .filter(engineer => engineer)
        .map( engineer => {
            return `
        <article class="card"> 
            <div class="card__header">
                <h2 class="card__title">${engineer.name}</h2>
                <div>
                    <span class="card__logo"><i class="fa-brands fa-dev"></i></span>
                    <span class="card__subtitle">${engineer.getRole()}</span>
                </div>
            </div>
            <div class="card__body">
                <div class="card__details">
                    <p>ID: ${engineer.id}</p>
                    <p><a href="mailto:${engineer.email}">Email: ${engineer.email}</a></p>
                    <p><a href="https://github.com/${engineer.github}">Github: ${engineer.github}</a></p> 
                </div>
            </div>
        </article> `
    })
    .join("")}
    ${interns
        .filter(intern => intern)
        .map( intern => {
            return `
        <article class="card"> 
            <div class="card__header">
                <h2 class="card__title">${intern.name}</h2>
                <div>
                    <span class="card__logo"><i class="fa-solid fa-basket-shopping"></i></span>
                    <span class="card__subtitle">${intern.getRole()}</span>
                </div>
            </div>
            <div class="card__body">
                <div class="card__details">
                    <p>ID: ${intern.id}</p>
                    <p><a href="mailto:${intern.email}">Email: ${intern.email}</a></p>
                    <p> School: ${intern.school}</p> 
                </div>
            </div>
        </article> `
    })
    .join("")}
    `
}

// HTML that will be sent to the dist 
const generateHtml = data => {
    const {registeredManager, interns, engineers} = data;
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <script src="https://kit.fontawesome.com/23e85c6c8b.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="../style.css">
        </head>
        <body>
            <header>
                <h1>Team Roster</h1>
            </header>
            <main>
                <section>
                    ${createTeamCards(registeredManager, engineers, interns)}
                </section>
            </main>
        </body>
        </html>`

}

module.exports = generateHtml;