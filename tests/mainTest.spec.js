
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

    //Validate visbilty of tags under 'Draft Project brief' card
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


    //Validate visbilty of tags under 'Draft Project brief' card
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


    //Validate visbilty of tags under 'Share timeline with teammates' card
    expect(await page.locator(xpathHigh).isVisible()).toBe(true);
    expect(await page.locator(xpathTrack).isVisible()).toBe(true);
});