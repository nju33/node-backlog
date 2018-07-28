import {createAxiosInstance} from './axios';
import {Status} from './status';

describe('issue', () => {
  let status: Status;

  beforeEach(() => {
    const axios = createAxiosInstance('apikey');
    status = new Status(axios);
  });

  it('get 3 Issues with getIssues', async () => {
    const issues = await status.getStatuses();
    expect(issues.length).toBe(4);
  });
});
