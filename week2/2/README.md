# Week 2.2

## Lecture
Click [here](https://speakerdeck.com/iliaidakiev/4-dependency-injection-providers-and-injectors)

## Tasks
For all tasks we are going to use this [API](https://jsonplaceholder.typicode.com)

1. Create a models for user, post and comment that will interact with the http service. They need to fetch the data when needed and sore it in a DataSource class that will act as storage. Whenever the component needs data it will ask the model for it. The model will check the store to see if its available and return it. If not, the model will fetch the data from the API, store it in the dataSource and return it to the component (inclue a flag that will be used for force fetch). Separate logic into differnet modules and just list all the items.

2. Refactor the DataSource to act as Hot Observable for each store entry (you can use Subjects if you feel like for the different data that we will be keeping (in our case users, posts comments)). When ever a certain entity is updated we want the store to to push the update to all of its subscribers for the certain set. The idea is to extract the state from our components into one place.