const fs = require("fs");

// Creates the HTML file in the (dist) sub-directory after data is provided from generatedHtml function
let writeFile = htmlContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", htmlContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "HTML file has been created!"
            })
        })
    })
}

module.exports = writeFile