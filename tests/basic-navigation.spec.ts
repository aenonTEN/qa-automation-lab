import { test } from '@playwright/test';


test('navigate to url', async ({page}) => {

  await page.goto('https://danube-web.shop');
  await page.getByRole('button', {name: 'Sign up'}).click();

})
