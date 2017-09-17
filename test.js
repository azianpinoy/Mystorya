"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

// STORY: As a developer nerd, I want to be able to take courses on web tech.
nightmare
  // Visit login page
  .goto("https://www.mystorya.herokuapp.com")
  //click login
  .click("#login-button")
  // Enter username.
  .type("#firstName", "James")
    // Enter username.
  .type("#lastName", "Dechavez")
  // Enter password.
  .type("#password", "password123")
  // Take a screenshot of the login form.
  .screenshot("login.png")
  // Click login button. Always check if you've done this where necessary!
  // It's easy to forget.
  .click("#submit-button")
  // Wait until the  link to the course catalog renders.
  .wait("a[href='/profile']")
  // Scroll down a few hundred pixels.
  .scrollTo(500, 0)
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