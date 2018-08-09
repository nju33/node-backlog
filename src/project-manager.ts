import {Manager} from './manager';
import {IssueModule, BacklogIssueParams} from './issue-manager';
import {Issue} from './issue';
import {Project} from './project';

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

export class ProjectManager extends Manager
  implements ProjectModule, IssueModule {
  async getProjects(
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject[]> {
    try {
      const res = await this.axios.get('projects', {params});

      return res.data.map((item: any) => new Project(item));
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjectByProjectKey(
    projectKey: string,
    params: BacklogProjectParams = {}
  ): Promise<Project | undefined> {
    const projects = await this.getProjects(params);

    const result = projects.find(project => project.projectKey === projectKey);
    if (result === undefined) {
      return;
    }

    return result as Project;
  }
}
