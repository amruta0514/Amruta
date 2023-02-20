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

Then(/^I verify (.+)$/, async (dashboard) => {
       expect(await HomePage.dashboardHeader).toHaveTextContaining(dashboard);
   });

// for invalid user <errorMessage>
/*Then (/^ I should see a message(<.+>)$/,async(errorMessage)=>{

    expect(await LoginPage.errorMessage).toHaveTextContaining(errorMessage);

});*/



    
    


