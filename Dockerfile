FROM public.ecr.aws/lambda/nodejs:20

RUN npm install -g yarn

COPY package.json .
COPY yarn.lock . 
COPY tsconfig.json . 
COPY tsconfig.build.json . 
COPY src ./src
COPY prisma ./prisma

RUN yarn install --production=false

RUN yarn build

RUN yarn install --production=true

CMD [ "dist/main.js" ]
