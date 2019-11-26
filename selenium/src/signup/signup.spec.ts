import { By } from 'selenium-webdriver';
import dotenv from 'dotenv';
import driver from '../../config/index';

dotenv.config();
const { WEBSITE_URL } = process.env;

const signup: any = async (): Promise<any> => {
  try {
    await driver.get(WEBSITE_URL);
    const signup: any = await driver.findElement(By.className('signup'));
    await signup.click();
    await driver.findElement(By.className('username')).sendKeys('shegsteham');
    await driver.findElement(By.className('email')).sendKeys('oluwasegunadepoju@gmail.com');
    await driver.findElement(By.className('password')).sendKeys('P@ssword123');
    await driver.findElement(By.id('confirmPassword')).sendKeys('P@ssword123');
    const submitBtn: any = await driver.findElement(By.className('signupButtonDiv')).findElement(By.css('button'));
    await submitBtn.click();
  }catch (err) {
    console.log('an error occurred', err);
  }
  // } finally {
  //   await driver.quit();
  // }
};

signup();
