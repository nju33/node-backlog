import dotenv from 'dotenv';
import {createAxiosInstance} from './../src/axios';
import {Issue} from '../src/issue';

dotenv.config();

const axios = createAxiosInstance(process.env.API_KEY as string);
const project = new Issue(axios);

(async () => {
  const issues = await project.getIssues();
  console.log(issues);
})()
  .catch(err => console.log(err));
