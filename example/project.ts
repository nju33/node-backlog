import dotenv from 'dotenv';
import {createAxiosInstance} from './../src/axios';
import {Project} from '../src/project';

dotenv.config();

const axios = createAxiosInstance(process.env.API_KEY as string);
const project = new Project(axios);

(async () => {
  const projects = await project.getProjects();
  console.log(projects);
})()
  .catch(err => console.log(err));
