import {createAxiosInstance} from './axios';
import {Project} from './project';

describe('project', () => {
  let project: Project;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    project = new Project(axios);
  });

  it('get 3 projects with getProjects', async () => {
    const projects = await project.getProjects();
    expect(projects.length).toBe(3);
  });

  // tslint:disable-next-line:max-line-length
  it('get project that projectKey is "b" with getProjectByProjectKey', async () => {
    const bProject = await project.getProjectByProjectKey('b');
    expect(bProject).toBeInstanceOf(Object);
    expect((bProject as any).projectKey).toBe('b');
  });
});
