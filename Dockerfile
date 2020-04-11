FROM node as react-build
WORKDIR /metis-showcase
COPY /metis-showcase /metis-showcase
run yarn install
run yarn build

FROM nginx:alpine
COPY --from=react-build /metis-showcase/build /usr/share/nginx/html
EXPOSE 80
cmd ["nginx", "-g", "daemon off;"]