const { expect } = require("chai");
const {Given, When, Then, Before, After } = require("@cucumber/cucumber");
const {Builder, By, Key, until, sleep} = require("selenium-webdriver");
const {delay} = require ("../utils/delay");

Given("Test registration functionality", { timeout: 30000}, async function(){
 let driver = await new Builder().forBrowser("chrome").build();
 await driver.get("http://localhost:3000/register");
 await driver.findElement(By.id("fullname")).sendKeys("Sam Smith");
 await driver.findElement(By.id("email")).sendKeys("sam@gmail.com");
 await driver.findElement(By.id("password")).sendKeys("sam123");
 await driver.findElement(By.id("conpassword")).sendKeys("sam123");
 await driver.sleep(delay);
await  driver.findElement(By.id("signupbtn")).click();

await driver.wait(until.elementLocated(By.id("login__form")), 30000);
expect(await driver.wait(until.elementLocated(By.id("login__form"))));

});


Given("Test login functionality", { timeout: 30000}, async function(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("email")).sendKeys("sam@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("sam123");
    await driver.sleep(delay);
   await  driver.findElement(By.id("loginBtn")).click();
   
   await driver.wait(until.elementLocated(By.id("register__form")), 30000);
   expect(await driver.wait(until.elementLocated(By.id("register__form"))));
   
   });



