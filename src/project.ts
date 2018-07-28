import {Module} from './module';

export interface BacklogProjectParams {
  archived?: boolean;
  all?: boolean;
}

export interface BacklogProject {
  id: number;
  projectKey: string;
  name: string;
  chartEnabled: boolean;
  subtaskingEnabled: boolean;
  projectLeaderCanEditProjectLeader: boolean;
  useWikiTreeView: boolean;
  textFormattingRule: string;
  archived: boolean;
  displayOrder: number;
}

export interface ProjectModule {
  getProjects(params: BacklogProjectParams): Promise<BacklogProject[]>;
  getProjectByProjectKey(
    projectKey: string,
    params: BacklogProjectParams
  ): Promise<BacklogProject | undefined>;
}

export class Project extends Module implements ProjectModule {
  async getProjects(
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject[]> {
    try {
      const res = await this.axios.get('projects', {params});

      return res.data;
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjectByProjectKey(
    projectKey: string,
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject | undefined> {
    const projects = await this.getProjects(params);

    return projects.find(project => project.projectKey === projectKey);
  }
}
