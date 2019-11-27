import { Selector } from 'testcafe';
import setupFixture from '../common/index';

setupFixture('WEBSITE_URL');

test('login button', async (view: any) => {
  await view.click('.signup')
    .typeText('.username', 'shegs')
    .typeText('.email', 'oluwasegunadepoju@gmail.com')
    .typeText('.password', 'password')
    .typeText('#confirmPassword', 'password')
    .click('.button.loginBtn');
  const loginPageText = await Selector('#notMember').find('span').innerText;
  await view.expect(loginPageText).eql('Already a member? ');
});
