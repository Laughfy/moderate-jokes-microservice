FROM node:21.7.3
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV JWT_SECRET=secret
EXPOSE 3001
CMD ["npm", "run", "start"]