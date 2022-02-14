<div align="center">

# GraphQL backend server for a book eshop

</div>

## For development

#### Use [Remote Containers](https://code.visualstudio.com/docs/remote/containers) and choose the root level `docker-compose.yml` file. This will start one container with the MongoDB instance, one container that contains the backend GraphQL server and mount application files so they get updated inside the container. Then run

```
$ cd server
$ npm run dev
```

#### You can access the application (GraphiQL) on [localhost:8080/graphql/](localhost:8080/graphql/)

#### Dummy data can be found on a single mutation inside `data.graphql`
