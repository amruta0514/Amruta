import { After, AfterStep,AfterAll } from "@wdio/cucumber-framework";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * //Opens a sub page of the page
    * //@param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        //return browser.url(`https://the-internet.herokuapp.com/${path}`)
        
       return browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
    }
    
    public close(){

        browser.closeWindow();        
    }
}
