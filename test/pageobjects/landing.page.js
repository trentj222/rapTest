import Page from './page';

class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () { return $('//tbody/tr[1]/td[2]/input[1]') }
    get inputLastInitial () { return $('//tbody/tr[2]/td[2]/h2[1]/input[1]') }
    get btnMaleName () { return $('[value="Suggest Male Rap Name"]') }
    get btnFemaleName () { return $('[value="Suggest Female Rap Name"]') }
    get mustEnterName () { return $('h1=You must enter your first name.')}

    /**
     * a method to set firstName and lastInitial on page
     */
    async setInfo (firstName, lastInitial) {
        await (await this.inputFirstName).setValue(firstName);
        await (await this.inputLastInitial).setValue(lastInitial);
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LandingPage();
