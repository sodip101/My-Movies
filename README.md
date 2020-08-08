# My-Movies
###RESTful API made using Node.js, Express, and MongoDB
The API performs CRUD Operations on a MongoDB collection that stores movie details for a user
| Endpoints | HTTP Method | Description |
| --------- | ----------- | ----------- |
| all/watchlist | GET | display all movies that the user hasn't watched |
| all/watched | GET | display all movies that the user has watched |
| all/:id | GET | display details of a particular movie |
| all/add | POST | add new a new movie to the collection |
| all/:id | PUT | update watched status for a particular movie |
| all/:id | DELETE | delete a movie from the collection |
| search?search=<search keywords> | GET | fetch data of a movie that matches the search query string from an external API |
