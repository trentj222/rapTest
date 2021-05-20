import LandingPage from '../pageobjects/landing.page';

// Test to verify input fields exist.
describe('My rap name testing part 3', () => {
    it('Verify input fields take text', async () => {
        await LandingPage.open();
        await expect(LandingPage.inputFirstName).toBeExisting()
        await expect(LandingPage.inputLastInitial).toBeExisting()
        await LandingPage.setInfo('Trent123', 'J')
        await expect(LandingPage.inputFirstName).toHaveValue('Trent123')
        await expect(LandingPage.inputLastInitial).toHaveValue('J')

    });
});


