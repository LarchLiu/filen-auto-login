import fetch from 'node-fetch';

const CRON_SECRET = process.env.CRON_SECRET;

export default async function handler(req, res) {
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader.startsWith('Bearer ')) {
    if (authHeader.substring(7) === CRON_SECRET) {
      return handleRequest(req, res);
    } else {
      return res.status(401).send('Unauthorized');
    }
  }

  return res.status(401).send('Authentication required');
}

async function handleRequest(req, res) {
  const accounts = [];
  let index = 1;
  while (process.env[`HOST${index}`]) {
    accounts.push({
      email: process.env[`EMAIL${index}`],
      password: process.env[`PASSWORD${index}`],
      twoFactorCode: 'XXXXXX',
      authVersion: 2
    });
    index++;
  }

  // 处理每个账户
  let result = 'success';
  for (const account of accounts) {
    try {
      await fetch(`https://gateway.filen-3.net/v3/login`, {
        method: 'POST',
        body: JSON.stringify({
          email: account.email,
          password: account.password,
          twoFactorCode: 'XXXXXX',
          authVersion: 2
        })
      });
    } catch (error) {
      result = 'failed';
      break;
    }
  }

  res.status(200).send(result);
}
