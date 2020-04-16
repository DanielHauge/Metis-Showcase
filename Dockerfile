FROM node as react-build
WORKDIR /metis-showcase
COPY /metis-showcase /metis-showcase
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=react-build /metis-showcase/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]