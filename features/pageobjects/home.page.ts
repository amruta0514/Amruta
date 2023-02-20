import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';
class HomePage extends Page{

public get label()
{
    return $ ('//h6[text()="Dashboard"]');
}

}

export default new HomePage();