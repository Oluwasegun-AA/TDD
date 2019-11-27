import dotenv from 'dotenv';

dotenv.config();

const setupFixture: any = (ENV_URL: string) => {
  const WEBSITE_URL = process.env[ENV_URL];
  return fixture`Home page test`.page`${WEBSITE_URL}`;
};

export default setupFixture;
