import { Selector } from 'testcafe';
import setupFixture from '../common/fixtureSetup';

setupFixture('Test Home Page','WEBSITE_URL');

test('navigation bar', async (view: any) => {
  const blinkText = await Selector('.blink').innerText;
  const text = await Selector('.text').innerText;
  await view.expect(text).eql('Great Taste Always');
  await view.expect(blinkText).eql('Always');
});

test('login button', async (view: any) => {
  await view.click('.login')
    .typeText('.username', 'shegs')
    .typeText('.password', 'password')
    .click('.button.loginBtn');
  const loginPageText = await Selector('#notMember').find('span').innerText;
  await view.expect(loginPageText).eql('Not a member? ');
});
