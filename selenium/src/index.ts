import dotenv from 'dotenv';
import driver from '../config/index';

dotenv.config();
const { WEBSITE_URL } = process.env;

const fetchPage: any = async(): Promise<any> => {
  await driver.get(WEBSITE_URL);
};

fetchPage();
