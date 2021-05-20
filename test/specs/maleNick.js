import LandingPage from '../pageobjects/landing.page';

// Test to verify generated nick is put on top of list - male
describe('My rap name testing part 4', () => {
    it('Verify generated rap name is prepended to list', async () => {
        await LandingPage.open();
        await expect(LandingPage.inputFirstName).toBeExisting()
        await expect(LandingPage.inputLastInitial).toBeExisting()
        await LandingPage.setInfo('Trent123', 'J');
        await (await LandingPage.btnMaleName).click()
        await LandingPage.setInfo('Drent123', 'J')
        await (await LandingPage.btnMaleName).click()
        // at this point we have two created, with Drent123 most recent
        // Assume based on tests that nickname creation takes 1st char of string and adds it somewhere in generated
        // by itself
        var topMostName = await (await LandingPage.topGenName).getText()
        //below checks to make sure 'D' with either space before or after is in first item.
        await expect(await topMostName.match(/( [D]|^[D]|[D] )/)).toBeTruthy();
        //Below makes sure since we are in nickname mode that the full name is not present
        await expect(await topMostName.match('Drent123')).toBeFalsy();
    });
});


