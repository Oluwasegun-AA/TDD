import { By } from 'selenium-webdriver';
import { expect } from 'chai';
import dotenv from 'dotenv';
import driver from '../../config/index';

dotenv.config();
const { WEBSITE_URL } = process.env;

const signup: any = async (): Promise<any> => {
  try {
    await driver.get(WEBSITE_URL);
    const signup: any = await driver.findElement(By.className('signup'));
    await signup.click();
    await driver.findElement(By.className('username')).sendKeys('username');
    await driver.findElement(By.className('email')).sendKeys('user@email.com');
    await driver.findElement(By.className('password')).sendKeys('password');
    await driver.findElement(By.id('confirmPassword')).sendKeys('password');
    const submitBtn: any = await driver.findElement(By.className('signupButtonDiv')).findElement(By.css('button'));
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

signup();
