const { default: $ } = require("webdriverio/build/commands/browser/$");

class HomePage{

    get source(){return $('#src')}
    get destination(){return $('#dest')}
    get searchButton(){return$('##search_btn')}
    get currentDate(){return $('//td[@class=`current day`]')}

    enterSource(text){
        this.source.waitForDisplayed();
        this.source.setValue(text);
    }

    enterDestination(text){
        this.destination.waitForDisplayed();
        this.destination.setValue(text);
    }

    clickSearchButton(){
        this.searchButton.waitForDisplayed();
        this.searchButton.click();
    }

}
module.exports = new HomePage();