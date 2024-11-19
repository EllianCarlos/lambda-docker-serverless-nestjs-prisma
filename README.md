# lambda-docker-serverless-nestjs-prisma

Boilerplate project for uploading a docker image of a nestjs project with the prisma ORM via serverless to be used in a aws lambda. 

This is nixos friendly! Check: https://github.com/pimeys/nix-prisma-example to instructions on how to use with nix! 

# Installation

Install the dependencies: 

```sh
yarn install
```

And also, install the plugin from serverless:

```sh
npx sls plugin install -n serverless-offline
```

# Configuration

# FAQ

- Something like: `npm ERR! errno EAI_AGAIN` can be solved with:
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
