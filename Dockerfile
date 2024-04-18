# 设置基础镜像
FROM node:latest

# 设置工作目录
ENV APP_HOME /app
RUN mkdir -pv $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn

# 安装依赖
RUN npm install

# 复制应用程序代码到工作目录
COPY . .

# 暴露应用程序监听的端口（如果需要）
EXPOSE 3300

# 设置启动命令
CMD [ "node", "index.js" ]