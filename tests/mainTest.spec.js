
const { test, expect } = require('@playwright/test');
//import xpath from utils
import { xpathCardTitle, xpathCardTag } from './utils.js';

// Login test runns before each test
test.beforeEach(async ({ page }) => {
    await page.goto('https://app.asana.com/-/login');
    await page.getByLabel('Email address').click();
    await page.getByLabel('Email address').fill('ben+pose@workwithloop.com');
    await page.getByRole('button', { name: 'Continue', exact: true }).click();
    await page.getByLabel('Password', { exact: true }).fill('Password123');
    await page.getByRole('button', { name: 'Log in' }).click();
});



test('Validate Draft project brief card', async ({ page }) => {
    await page.waitForLoadState('load');
    await page.getByLabel('Cross-functional project plan').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('2', 'Draft project brief');
    const xpathNonPriority = xpathCardTag('2', 'Draft project brief', 'Non-Priority');
    const xpathOnTrack = xpathCardTag('2', 'Draft project brief', 'On track');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Draft Project brief' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);

    //Validate visbilty of tags in 'Draft Project brief' card
    expect(await page.locator(xpathNonPriority).isVisible()).toBe(true);
    expect(await page.locator(xpathOnTrack).isVisible()).toBe(true);

});

test('Validate Scedule kickoff meeting card', async ({ page }) => {
    await page.waitForLoadState('load');
    await page.getByLabel('Cross-functional project plan').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('2', 'Schedule kickoff meeting');
    const xpathMedium = xpathCardTag('2', 'Schedule kickoff meeting', 'Medium');
    const xpathRisk = xpathCardTag('2', 'Schedule kickoff meeting', 'At risk');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Schedule kickoff meeting' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);


    //Validate visbilty of tags in 'Draft Project brief' card
    expect(await page.locator(xpathMedium).isVisible()).toBe(true);
    expect(await page.locator(xpathRisk).isVisible()).toBe(true);
});

test('Validate Share timeline with teammates card', async ({ page }) => {
    await page.waitForLoadState('load');
    await page.getByLabel('Cross-functional project plan').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('2', 'Share timeline with teammates');
    const xpathHigh = xpathCardTag('2', 'Share timeline with teammates', 'High');
    const xpathTrack = xpathCardTag('2', 'Share timeline with teammates', 'Off track');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Schedule kickoff meeting' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);


    //Validate visbilty of tags in 'Share timeline with teammates' card
    expect(await page.locator(xpathHigh).isVisible()).toBe(true);
    expect(await page.locator(xpathTrack).isVisible()).toBe(true);
});

test('Validate laptop setup for new hire', async ({ page }) =>{
    await page.waitForLoadState('load');
    await page.getByLabel('Work Requests').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('1', '[Example] Laptop setup for new hire');
    const xpathMedium = xpathCardTag('1', '[Example] Laptop setup for new hire', 'Medium priority');
    const xpathlow = xpathCardTag('1', '[Example] Laptop setup for new hire', 'Low effort');
    const xpathHardware = xpathCardTag('1', '[Example] Laptop setup for new hire', 'New hardware');
    const xpathNotStarted = xpathCardTag('1', '[Example] Laptop setup for new hire', 'Not Started');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Schedule kickoff meeting' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);


    //Validate visbilty of tags in '[Example] Laptop setup for new hire' card
    expect(await page.locator(xpathMedium).isVisible()).toBe(true);
    expect(await page.locator(xpathlow).isVisible()).toBe(true);
    expect(await page.locator(xpathHardware).isVisible()).toBe(true);
    expect(await page.locator(xpathNotStarted).isVisible()).toBe(true);

});

test('Validate Password not working', async({page}) => {

    await page.waitForLoadState('load');
    await page.getByLabel('Work Requests').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('3', '[Example] Password not working');
    const xpathPriority = xpathCardTag('3', '[Example] Password not working', 'Low priority');
    const xpathlow = xpathCardTag('3', '[Example] Password not working', 'Low effort');
    const xpathPassword = xpathCardTag('3', '[Example] Password not working', 'Password reset');
    const xpathWaiting = xpathCardTag('3', '[Example] Password not working', 'Waiting');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Schedule kickoff meeting' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);


    //Validate visbilty of tags in '[Example] Password not working' card
    expect(await page.locator(xpathPriority).isVisible()).toBe(true);
    expect(await page.locator(xpathlow).isVisible()).toBe(true);
    expect(await page.locator(xpathPassword).isVisible()).toBe(true);
    expect(await page.locator(xpathWaiting).isVisible()).toBe(true);

});

test('Validate New Keycard for Daniela V', async({page}) => {

    await page.waitForLoadState('load');
    await page.getByLabel('Work Requests').click();
    // Generate the XPath
    const xpathTitle = xpathCardTitle('4', '[Example] New keycard for Daniela V');
    const xpathHardware = xpathCardTag('4', '[Example] New keycard for Daniela V', 'New hardware');
    const xpathlow = xpathCardTag('4', '[Example] New keycard for Daniela V', 'Low effort');
    const xpathHigh = xpathCardTag('4', '[Example] New keycard for Daniela V', 'High priority');
    const xpathDone = xpathCardTag('4', '[Example] New keycard for Daniela V', 'Done');

    await page.locator(xpathTitle).waitFor({ state: 'visible', timeout: 5000 });
    //validate visabilty of 'Schedule kickoff meeting' card
    expect(await page.locator(xpathTitle).isVisible()).toBe(true);


    //Validate visbilty of tags in '[Example] New keycard for Daniela V' card
    expect(await page.locator(xpathHardware).isVisible()).toBe(true);
    expect(await page.locator(xpathlow).isVisible()).toBe(true);
    expect(await page.locator(xpathHigh).isVisible()).toBe(true);
    expect(await page.locator(xpathDone).isVisible()).toBe(true);

});