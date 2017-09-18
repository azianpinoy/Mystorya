"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

// STORY: As a developer nerd, I want to be able to take courses on web tech.
nightmare
  // Visit login page
  .goto("https://mystorya.herokuapp.com/")
  //take a screen shot and save it to current directory.
  .screenshot("homePage.png")
  //click login
  .click("#startLogin")
  // Enter username.
  .type("#userName", "J-DAWG")
  //enter password
  .type("#password", "passwordyay")
  // Take a screenshot of the login form.
  .screenshot("login.png")
  // Click login button.
  .click("#loginButton")
  // Wait until profile renders.
  .wait("a[href='/profile']")
  // Scroll down a few hundred pixels.
  .scrollTo(550, 0)
  // Take a screenshot and save it to the current directory.
  .screenshot("profile.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });