import { Selector } from 'testcafe';
import dotenv from 'dotenv';

dotenv.config();
const { WEBSITE_URL } = process.env;

fixture`Home page test`.page`${WEBSITE_URL}`;

test('navigation bar', async (view: any) => {
  const blinkText = await Selector('.blink').innerText;
  const text = await Selector('.text').innerText;
  await view.expect(text).eql('Great Taste Always');
  await view.expect(blinkText).eql('Always');
});

test('login button', async (view: any) => {
  await view.click('.login')
  .typeText('.username', 'shegsteham')
  .typeText('.password', 'P@ssword123')
  .click('.button.loginBtn');
  const loginPageText = await Selector('#notMember').find('span').innerText;
  await view.expect(loginPageText).eql('Not a member? ');
});
