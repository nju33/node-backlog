import {createAxiosInstance} from './axios';
import {IssueManager} from './issue-manager';

describe('issue', () => {
  let issueManager: IssueManager;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    issueManager = new IssueManager(axios);
  });

  it('get 3 Issues with getIssues', async () => {
    const issues = await issueManager.getIssues({
      projectId: [12345]
    });
    expect(issues.length).toBe(3);
  });
});
