import { Builder } from 'selenium-webdriver';

const driver: any = new Builder().forBrowser('chrome').build();

export default driver;
