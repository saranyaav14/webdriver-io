const homePage = require("../../Pages/HomePage");
const viewBusPage = require("../../Pages/ViewBusPage");


describe('Test Red bus app',function(){
    it('Go to Red bus app',async function(){
        browser.url('https://www.redbus.in/');
    })

    it('Enter from and to values and click on search',async function(){
        homePage.enterSource('chennai');
        homePage.enterDestination('coimbatore');
        homePage.clickSearchButton();
        homePage.currentDate.isDisplayed();
        homePage.currentDate.click();
        
    })

    it('Modify from to values in View Bus Page',async function(){
        viewBusPage.enterSource('trichy');
        viewBusPage.enterDestination('chennai');
        viewBusPage.clickSearchButton();        
    })

})