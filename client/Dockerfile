#Base Image 

FROM node:20-alpine 

#Working Directory

WORKDIR /app


# Copy package.json

COPY package*.json ./

# Install Dependencies

RUN npm install 

# Copy project files 

COPY . .


#Expose port 
EXPOSE 5173

# Start React App 

CMD ["npm", "run", "dev", "--", "--host"]