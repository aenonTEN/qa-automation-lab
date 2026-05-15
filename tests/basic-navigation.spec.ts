import { test, expect } from '@playwright/test';


test.beforeEach('navigate to url', async ({page}) => {

  await page.goto('https://saucedemo.com/');
  await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
  await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();

});

  test('verify add to cart', async ({page}) => {

    const allItems = await page.locator('.inventory_list').all();
      
      for(const item of allItems){

        const itemText = item.innerText();
        
        if(itemText === 'Sauce Labs Backpack'){

          await item.getByRole('button', {name: 'Add to cart'}).click();

        };
      };
      const cart = await page.locator('data-test=".shopping_cart_link"]');
      
      if(await cart.isVisible()){
      
        await cart.click();
      }else{

        await page.goto('https://saucedemo.com/cart.html/')
      }
    // await page.locator('.shopping_cart_link').click();
    
  });
  

