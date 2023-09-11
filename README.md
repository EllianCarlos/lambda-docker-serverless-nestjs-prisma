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

- Algo como o erro: `npm ERR! errno EAI_AGAIN` pode ser resolvido com:
  - Reinstalação do proxy do npm:
    ```sh
    npm config rm proxy
    npm config rm https-proxy
    ```
    E atualização do docker `sudo systemctl restart docker `
  - Se ainda não der certo adicione o arquivo `/etc/docker/daemon.json` com o conteúdo:
    ```json
    {
      "dns": ["10.0.0.2", "8.8.8.8"]
    }
    ```
    E atualize o docker `sudo systemctl restart docker`.
