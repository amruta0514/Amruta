import { ChainablePromiseElement } from 'webdriverio';
import homePage from './home.page.js';

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public  get inputUsername () {
       
       return  $('//input[@name="username"]');
    }

    public get inputPassword () {
       
       return $('//input[@name="password"]');
    }

    public get btnSubmit () {
       
       return $('//button[@type="submit"]');
 
    }

    public get errorMessage(){
        return $('//p[text()="Invalid credentials"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
         
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        
    }

    
    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();

