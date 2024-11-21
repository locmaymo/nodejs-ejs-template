const express = require("express");
const expressLayouts = require("express-ejs-layouts");
/**
 * Config view engine for app
 */
let configViewEngine = (app)=> {
    app.use(expressLayouts);
    app.set("layout", "./layouts/layout");
    app.use(express.static("./public"));
    app.set("view engine", "ejs");
    app.set("views","./views");
};

module.exports = configViewEngine;