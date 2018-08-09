import {BacklogProject} from './project-manager';
import {BacklogIssueParams} from './issue-manager';
import {Issue} from './issue';

export class Project {
  readonly id: number;
  readonly projectKey: string;
  readonly name: string;
  readonly chartEnabled: boolean;
  readonly subtaskingEnabled: boolean;
  readonly projectLeaderCanEditProjectLeader: boolean;
  readonly useWikiTreeView: boolean;
  readonly textFormattingRule: string;
  readonly archived: boolean;
  readonly displayOrder: number;

  constructor(private readonly projectJson: BacklogProject) {
    this.id = projectJson.id;
    this.projectKey = projectJson.projectKey;
    this.name = projectJson.name;
    this.chartEnabled = projectJson.chartEnabled;
    this.subtaskingEnabled = projectJson.subtaskingEnabled;
    this.projectLeaderCanEditProjectLeader =
      projectJson.projectLeaderCanEditProjectLeader;
    this.useWikiTreeView = projectJson.useWikiTreeView;
    this.textFormattingRule = projectJson.textFormattingRule;
    this.archived = projectJson.archived;
    this.displayOrder = projectJson.displayOrder;
  }

  async getIssues(_query: BacklogIssueParams): Promise<Issue[]> {
    return [] as Issue[];
  }
}
