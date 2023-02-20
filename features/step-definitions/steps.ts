import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
//import SecurePage from '../pageobjects/secure.page.js';
import HomePage  from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';


const pages = {
    login: LoginPage,
    home:  HomePage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    
    await pages[page].open();
    browser.maximizeWindow();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    console.log("****in when");
    await LoginPage.login(username, password)

});
//for valid user <dashboard>
Then(/^I should see a (.+)$/, async (dashboard) => {
    
    expect(await HomePage.label).toHaveTextContaining(dashboard);
   
    
});


// for invalid user <errorMessage>
Then (/^ I should see a message(<.+>)$/,async(errorMessage)=>{

    expect(await LoginPage.errorMessage).toHaveTextContaining(errorMessage);


});


/*Then(/^I should see a flash message saying (.*)$/, async (dashboard) => {
    //await expect(SecurePage.flashAlert).toBeExisting();
    //await expect(SecurePage.flashAlert).toHaveTextContaining(message);
    console.log("******"+HomePage.label);
    console.log("******"+dashboard);
    await expect(HomePage.label).toHaveTextContaining(dashboard);
    
    
});*/

