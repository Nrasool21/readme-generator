const fs = require("fs")

const creatFile = (data) => {

    const callback = (err) => {
        if(err){

            console.log(error)
        }else {
            console.log("readme generated successfully")
        }
    }
    fs.writeFile("readmeGenerator.md", data, callback)
}
module.exports = creatFile
