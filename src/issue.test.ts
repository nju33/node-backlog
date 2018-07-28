import {createAxiosInstance} from './axios';
import {Issue} from './issue';

describe('issue', () => {
  let issue: Issue;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    issue = new Issue(axios);
  });

  it('get 3 Issues with getIssues', async () => {
    const issues = await issue.getIssues({
      projectId: [12345]
    });
    expect(issues.length).toBe(3);
  });
});
