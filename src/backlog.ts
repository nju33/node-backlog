import {createAxiosInstance} from './axios';
import {
  BacklogProject,
  BacklogProjectParams,
  Project,
  ProjectModule
} from './project';
import {IssueModule, BacklogIssueParams, Issue} from './issue';
import {StatusModule, BacklogStatus, Status} from './status';

export class Backlog implements StatusModule, ProjectModule, IssueModule {
  private readonly status: Status;
  private readonly project: Project;
  private readonly issue: Issue;

  constructor(
    readonly config: {
      readonly apiKey: string;
    }
  ) {
    const axios = createAxiosInstance(config.apiKey);
    this.status = new Status(axios);
    this.project = new Project(axios);
    this.issue = new Issue(axios);
  }

  async getStatuses(): Promise<BacklogStatus[]> {
    try {
      return this.status.getStatuses();
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjects(
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject[]> {
    try {
      return this.project.getProjects(params);
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }

  async getProjectByProjectKey(
    projectKey: string,
    params: BacklogProjectParams = {}
  ): Promise<BacklogProject | undefined> {
    return this.project.getProjectByProjectKey(projectKey, params);
  }

  async getIssues(params: BacklogIssueParams) {
    try {
      return this.issue.getIssues(params);
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }
}
