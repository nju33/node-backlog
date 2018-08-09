import {createAxiosInstance} from './axios';
import {
  BacklogProject,
  BacklogProjectParams,
  ProjectManager,
  ProjectModule
} from './project-manager';
// import {Issue} from './issue';
import {StatusModule, BacklogStatus, StatusManager} from './status-manager';

export class Backlog implements StatusModule, ProjectModule {
  private readonly statusManager: StatusManager;
  private readonly projectManager: ProjectManager;
  // private readonly issue: Issue;

  constructor(
    readonly config: {
      readonly apiKey: string;
    }
  ) {
    const axios = createAxiosInstance(config.apiKey);
    this.statusManager = new StatusManager(axios);
    this.projectManager = new ProjectManager(axios);
    // this.issue = new Issue(axios);
  }

  async getStatuses(): Promise<BacklogStatus[]> {
    try {
      return this.statusManager.getStatuses();
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjects(
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject[]> {
    try {
      return this.projectManager.getProjects(params);
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjectByProjectKey(
    projectKey: string,
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject | undefined> {
    return this.projectManager.getProjectByProjectKey(projectKey, params);
  }

  // async getIssues(params: BacklogIssueParams) {
  //   try {
  //     return this.issue.getIssues(params);
  //   } catch (err) {
  //     throw new Error(err.response.data.errors[0].message);
  //   }
  // }
}
