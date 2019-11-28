import dotenv from 'dotenv';

dotenv.config();

const setupFixture: any = (description: string, ENV_URL: string) => {
  const WEBSITE_URL : string | any = process.env[ENV_URL];
  return fixture(description).page(`${WEBSITE_URL}`);
};

export default setupFixture;
