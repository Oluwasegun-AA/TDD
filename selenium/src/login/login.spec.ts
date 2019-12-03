import { By } from 'selenium-webdriver';
import { expect } from 'chai';
import dotenv from 'dotenv';
import driver from '../../config/index';

dotenv.config();
const { WEBSITE_URL } = process.env;

const login: any = async (): Promise<any> => {
  try {
    await driver.get(WEBSITE_URL);
    const element = await driver.findElement(By.className('login'));
    await element.click();
    const username = await driver.findElement(By.className('username'));
    const password = await driver.findElement(By.className('password'));
    const submitBtn = await driver.findElement(By.className('loginButtonDiv')).findElement(By.css('button'));
    await username.sendKeys('username');
    await password.sendKeys('password');
    await submitBtn.click();
    await driver.findElement(By.className('blin blink'))
    .getText().then((value: string) => {
      expect(value).to.equal('Always');
    });
  } catch (err) {
    console.log('an error occurred', err);
  }
  finally {
    await driver.quit();
  }
};

login();
