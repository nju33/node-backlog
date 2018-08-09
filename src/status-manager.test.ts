import {createAxiosInstance} from './axios';
import {StatusManager} from './status-manager';

describe('issue', () => {
  let statusManager: StatusManager;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    statusManager = new StatusManager(axios);
  });

  it('get 3 Issues with getIssues', async () => {
    const issues = await statusManager.getStatuses();
    expect(issues.length).toBe(4);
  });
});
