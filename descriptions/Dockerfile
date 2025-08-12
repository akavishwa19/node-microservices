#base image for our project to run on
FROM node:18

#set working directory - the place where we want our docker code to be and where all the commands are going to operate on
WORKDIR /app

#we will copy package files into our working directory
#we copy from source to destination
COPY package*.json ./

#install our dependencies
RUN npm install

#copy rest of the project
COPY . .

#expose the port
EXPOSE 8002

#start the application
CMD ["npm","run","start"]


