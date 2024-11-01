<h1 align="center">Filen Auto Login</h1>

<p align="center">
<img src="https://img.shields.io/github/license/larchliu/filen-auto-login" alt="License" />
<img src="https://img.shields.io/github/last-commit/larchliu/filen-auto-login">

在 Vercel 上部署 filen 保活。

---

## 快速开始

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flarchliu%2Ffilen-auto-login&env=CRON_SECRET,EMAIL1,PASSWORD1&project-name=filen-auto-login&repository-name=filen-auto-login)

填写完必需环境变量后部署，然后可在 Settings 里继续填写。

自行修改 vercel.json 以进行更多配置。

部署完毕可在 `https://your-domain.com/api/login` 确认是否可用。

## 环境变量

| 变量名              | 内容                                            |
| ------------------- | ----------------------------------------------- |
| CRON_SECRET         | Vercel 进行 Cron Jobs 时所用密码                |
| EMAILx              | 例如 `EMAIL1`，可配置多个，为登录邮箱 |
| PASSWORDx           | 例如 `PASSWORD1`，可配置多个，为登录密码   |

注意可配置多个的环境变量需配套使用。
