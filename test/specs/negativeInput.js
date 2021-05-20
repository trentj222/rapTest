import LandingPage from '../pageobjects/landing.page';

// Test to verify that you have to put something into first name
describe('My rap name testing part 2', () => {
    it('Verify text field requires at least first name', async () => {
        await LandingPage.open();
        await expect(LandingPage.inputFirstName).toBeExisting()
        await expect(LandingPage.inputLastInitial).toBeExisting()
        await (await LandingPage.btnMaleName).click()
        await expect(await (await LandingPage.mustEnterName)).toBePresent()
        await (await LandingPage.btnFemaleName).click() //checking both buttons
        await expect(await (await LandingPage.mustEnterName)).toBePresent()
    });
});


