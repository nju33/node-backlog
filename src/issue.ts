import {Module} from './module';

export interface BacklogIssueParams {
  projectId?: number[];
  issueTypeId?: number[];
  categoryId?: number[];
  versionId?: number[];
  milestoneId?: number[];
  statusId?: number[];
  priorityId?: number[];
  assigneeId?: number[];
  createdUserId?: number[];
  resolutionId?: number[];
  parentChild?: 0 | 1 | 2 | 3 | 4;
  attachment?: boolean;
  sharedFile?: boolean;
  sort?:
    | 'issueType'
    | 'category'
    | 'version'
    | 'milestone'
    | 'summary'
    | 'status'
    | 'priority'
    | 'attachment'
    | 'sharedFile'
    | 'created'
    | 'createdUser'
    | 'updated'
    | 'updatedUser'
    | 'assignee'
    | 'startDate'
    | 'dueDate'
    | 'estimatedHours'
    | 'actualHours'
    | 'childIssue';
  order?: 'asc' | 'desc';
  offset?: number;
  count?: number;
  createdSince?: string;
  createdUntil?: string;
  updatedSince?: string;
  updatedUntil?: string;
  startDateSince?: string;
  startDateUntil?: string;
  dueDateSince?: string;
  dueDateUntil?: string;
  id?: number[];
  parentIssueId?: number[];
  keyword?: string;
}

export interface BacklogIssueType {
  id: number;
  projectId: number;
  name: string;
  color: string;
  displayOrder: number;
}

export interface BacklogUser {
  id: number;
  userId: number | null;
  name: string;
  roleType: number;
  lang: string | null;
  mailAddress: string | null;
  nulabAccount: string | null;
}

export interface BacklogIssue {
  id: number;
  projectId: number;
  issueKey: string;
  keyId: number;
  issueType: BacklogIssueType;
  summary: string;
  description: string;
  resolution: any;
  priority: {id: number; name: string};
  status: {id: number; name: string};
  assignee: BacklogUser;
  category: any[];
  versions: any[];
  milestone: any[];
  startDate: string;
  dueDate: string;
  estimatedHours: null;
  actualHours: null;
  parentIssueId: null;
  createdUser: BacklogUser;
  created: string;
  updatedUser: BacklogUser;
  updated: '2017-05-07T23:41:08Z';
  customFields: any[];
  attachments: any[];
  sharedFiles: any[];
  stars: any[];
}

export interface IssueModule {
  getIssues(params: BacklogIssueParams): Promise<BacklogIssue[]>;
}

export class Issue extends Module implements IssueModule {
  async getIssues(params: BacklogIssueParams = {}): Promise<BacklogIssue[]> {
    try {
      const res = await this.axios.get('issues', {params});

      return res.data;
    } catch (err) {
      throw new Error(err.response.data.errors[0].message);
    }
  }
}
