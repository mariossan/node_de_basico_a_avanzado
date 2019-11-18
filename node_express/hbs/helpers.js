const hbs = require("hbs")


// Express HBS engine

// helpers
hbs.registerHelper("getAnio", () => new Date().getFullYear() )
hbs.registerHelper("getName", () => "Mariossan" )