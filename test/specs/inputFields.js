import LandingPage from '../pageobjects/landing.page';

// Test to verify input fields exist.
describe('My rap name testing part 1', () => {
    it('Verify input fields exist', async () => {
        await LandingPage.open();
        await expect(LandingPage.inputFirstName).toBeExisting()
        await expect(LandingPage.inputLastInitial).toBeExisting()

    });
});


