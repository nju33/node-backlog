import {createAxiosInstance} from './axios';
import {ProjectManager} from './project-manager';

describe('project', () => {
  let projectManager: ProjectManager;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    projectManager = new ProjectManager(axios);
  });

  it('get 3 projects with getProjects', async () => {
    const projects = await projectManager.getProjects();
    expect(projects.length).toBe(3);
  });

  // tslint:disable-next-line:max-line-length
  it('get project that projectKey is "b" with getProjectByProjectKey', async () => {
    const bProject = await projectManager.getProjectByProjectKey('b');
    expect(bProject).toBeInstanceOf(Object);
    expect((bProject as any).projectKey).toBe('b');
  });
});
