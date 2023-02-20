import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';
class HomePage extends Page{

public get dashboardHeader()
{
    return $ ('//h6[text()="Dashboard"]');
}

public get adminLabel()
{
    return $('//span[text()="Admin"]');
}
public get dashboardLabel()
{
    return $('//span[text()="Dashboard"]');
}
public get myInfoLabel()
{
    return $('//span[text()="My Info"]');
}
public get pimLabel()
{
    return $('//span[text()="PIM"]');
}
public get leaveLabel()
{
    return $('//span[text()="Leave"]');
}
public get timeLabel()
{
    return $('//span[text()="Time"]');
}
public get directoryLabel()
{
    return $('//span[text()="Directory"]');
}
public get maintenanceLabel()
{
    return $('//span[text()="Maintenance"]');
}
public get buzzLabel()
{
    return $('//span[text()="Buzz"]');
}

}

export default new HomePage();