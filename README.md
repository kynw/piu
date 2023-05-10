The project is for muggle, is for me.

[阅读中文版](README.zh.md)

---

# Piu

[![1]](https://twitter.com/kynkwang)

Piu is an open-source password manager application that supports API integration, stream data encryption, and two-factor authentication (2FA).

With Piu, users can securely store and manage their passwords in an encrypted format. The API support allows easy integration with other applications and systems to provide seamless password management capabilities. The stream data encryption feature ensures the security of data even during network transfer. Piu allows users to retrieve 2FA codes directly from the app, making it even more convenient for users.

Overall, Piu is a powerful and secure password management solution suitable for individuals and organizations alike.

## Dependencies

- Go
- Node.js
- Yarn/Npm

## Installation via Git (source code)

```shell
$ git clone https://github.com/kynisk/piu.git \
    && cd piu \
    && make get-golang \
    && make get-nodejs \
    && make build \
    && make install
```

[1]: https://img.shields.io/badge/Twitter-@kynkwang-brightgreen?style=flat&logo=twitter
