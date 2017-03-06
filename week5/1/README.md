# Week 5.1

### Lecture

### Tasks

1. Use the application from last time and create a view where all the registered users are listed.
2. Create a UserEditComponent where the users can be edited (use a route param :id, get the user id using activatedRoute snapshot and get the user from the store)
3. Create a default 404 component that will handle not found routes.
3. Separate the user components into a different module - user.module. Create child routes for the components and use LazyLoading to load the module when the user clicks on the navigation link.
4. Use the preload strategies to preload the users module after the application is bootstrapped.