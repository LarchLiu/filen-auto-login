import { waitUntil } from '@vercel/functions';
 
const CRON_SECRET = process.env.CRON_SECRET;
export function GET(req) {
  const env = getEnv();
  const CRON_SECRET = env.CRON_SECRET;
  const authHeader = req.headers['authorization'];

  if (authHeader && authHeader.startsWith('Bearer ')) {
    if (authHeader.substring(7) === CRON_SECRET) {
      const accounts = [];
      let index = 1;
      while (env[`HOST${index}`]) {
        accounts.push({
          email: env[`EMAIL${index}`],
          password: env[`PASSWORD${index}`],
        });
        index++;
      }

      // 处理每个账户
      let result = 'success';
      for (const account of accounts) {
        waitUntil(fetch(`https://gateway.filen-3.net/v3/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: account.email,
            password: account.password,
            twoFactorCode: 'XXXXXX',
            authVersion: 2
          })
        }));
      }

      return new Response(result);
    } else {
      return new Response('Unauthorized', {
        status: 401
      });
    }
  }
}

