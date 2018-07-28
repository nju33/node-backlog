require('dotenv').config();
const nock = require('nock');

nock('https://geek.backlog.jp/api/v2/')
  .get('/statuses')
  .query({
    apiKey: 'apikey'
  })
  .reply(200, [
    {
      id: 1,
      name: '未対応'
    },
    {
      id: 2,
      name: '処理中'
    },
    {
      id: 3,
      name: '処理済み'
    },
    {
      id: 4,
      name: '完了'
    }
  ]);

nock('https://geek.backlog.jp/api/v2/')
  .get('/projects')
  .query({
    apiKey: 'apikey'
  })
  .times(2)
  .reply(200, [
    {
      projectKey: 'a'
    },
    {
      projectKey: 'b'
    },
    {
      projectKey: 'c'
    }
  ]);

nock('https://geek.backlog.jp/api/v2/')
  .get('/issues')
  .query({
    apiKey: 'apikey',
    projectId: [12345]
  })
  .times(2)
  .reply(200, [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ]);
