import { test, expect } from '@playwright/test';


test.beforeEach('navigate to url', async ({page}) => {

  await page.goto('https://saucedemo.com/');
  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.goto('https://saucedemo.com/inventory.html/');


});

  test('verify add to cart', async ({page}) => {

      await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      // await page.getByRole('link', {name: '1'}).click();
      await page.locator('.shopping_cart_link').click();

      
    //   await page.getByText('Sauce Backpack')

      
    //   await page.locator('data-test=".shopping_cart_link"]');
      
    //   if(await cart.isVisible()){
      
    //     await cart.click();
    //   }else{

    //     await page.goto('https://saucedemo.com/cart.html/')
    //  }
    // await page.locator('.shopping_cart_link').click();
    
  });
  

