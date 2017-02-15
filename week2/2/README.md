# Week 2.2

## Lecture


## Tasks
For all tasks we are going to use this [API](https://jsonplaceholder.typicode.com)

1. Create a models for user, post and comment that will interact with the http service. They need to fetch the data when needed and sore it in a DataSource class that will act as storage. Whenever the component needs data it will ask the model for it. The model will check the store to see if its available and return it. If not, the model will fetch the data from the API, store it in the dataSource and return it to the component (inclue a flag that will be used for force fetch). Separate logic into differnet modules and just list all the items.