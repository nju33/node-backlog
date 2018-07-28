import dotenv from 'dotenv';
import {createAxiosInstance} from './../src/axios';
import {Status} from '../src/status';

dotenv.config();

const axios = createAxiosInstance(process.env.API_KEY as string);
const project = new Status(axios);

(async () => {
  const statuses = await project.getStatuses();
  console.log(statuses);
})()
  .catch(err => console.log(err));
