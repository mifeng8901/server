# 设置基础镜像
FROM node:14-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 暴露应用程序监听的端口（如果需要）
EXPOSE 3300

# 设置启动命令
CMD [ "node", "index.js" ]