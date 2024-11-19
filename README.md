# lambda-docker-serverless-nestjs-prisma

Boilerplate project for uploading a docker image of a nestjs project with the prisma ORM via serverless to be used in a aws lambda.

# Installation

Install the dependencies: 

```sh
yarn install
```

Make sure you've installed the needed peer dependencies:

```sh
npm i -g serverless serverless-offline
```

And also, install the plugin from serverless:

```sh
sls plugin install -n serverless-offline
```

# configuration

# faq

- Somethign like: `npm ERR! errno EAI_AGAIN` can be solved with:
  - Re-install npm proxy:
    ```sh
    npm config rm proxy
    npm config rm https-proxy
    ```
    And update the docker `sudo systemctl restart docker `
  - If nothing works just edit `/etc/docker/daemon.json` with the content:
    ```json
    {
      "dns": ["10.0.0.2", "8.8.8.8"]
    }
    ```
    And then update the docker `sudo systemctl restart docker`.
