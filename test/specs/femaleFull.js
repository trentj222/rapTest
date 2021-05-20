import LandingPage from '../pageobjects/landing.page';

// Test to verify names are getting prepended
describe('My rap name testing part 5', () => {
    it('Verify name is prepended to list', async () => {
        await LandingPage.open();
        await expect(LandingPage.inputFirstName).toBeExisting()
        await expect(LandingPage.inputLastInitial).toBeExisting()
        await (await LandingPage.checkBox).click();
        await LandingPage.setInfo('Molly123', 'J');
        await (await LandingPage.btnFemaleName).click()
        await LandingPage.setInfo('Sarah123', 'J')
        await (await LandingPage.btnFemaleName).click()
        var topMostName = await (await LandingPage.topGenName).getText()
        await expect(await topMostName.match(/( [S]|^[S]|[S] )/)).toBeTruthy();
    });
});


