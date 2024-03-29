# Music Album API

Welcome to the Music Album API! This RESTful API allows you to manage music albums, artists, and songs. Below you'll find information on features, installation, usage, and more.

## Features

### Implemented Features

- **Express Server Setup**: The project is built using Node.js and Express.js, providing a robust server framework for handling HTTP requests and responses.
- **Custom Middleware**: Two custom middleware functions are implemented:
  - Logging middleware: Logs information about incoming requests.
  - Body parsing middleware: Parses the request body for POST and PUT requests.
- **Error Handling Middleware**: Error-handling middleware is defined to handle 404 Not Found errors.
- **Data Management**: Three main data categories are managed: albums, artists, and songs. Data for each category is structured as an array of objects, allowing for easy manipulation.
- **Route Handling**: Routes are defined for each data category (`albumsRouter.js`, `artistsRouter.js`, `songsRouter.js`), which handle requests and interact with the data.
- **CRUD Operations**: Routes are implemented for CRUD operations (Create, Read, Update, Delete) on albums, artists, and songs.
- **Data Filtering**: Query parameters are used to filter songs by genre in the songs route.
- **Route Parameters**: Route parameters are utilized in the language router to match language codes in URL paths.
- **RESTful Principles**: RESTful principles are followed by using appropriate HTTP methods and URL structures for each route.
- **View Templating**: A view template using the EJS (Embedded JavaScript) template engine is implemented to display the latest released albums.
- **Styling**: Basic CSS styles are applied to the rendered views for aesthetic presentation.
- **Form Interaction**: A form is included in the rendered view to allow users to filter songs by genre using query parameters.
- **Code Organization**: Code is organized into separate route files, middleware functions, and data files for better maintainability.

### Future Enhancements

- **Authentication and Authorization**: Implement authentication and authorization mechanisms to secure the API endpoints.
- **Database Integration**: Integrate a database (e.g., MongoDB, PostgreSQL) for persistent storage of data.
- **Validation and Error Handling**: Implement input validation and error handling mechanisms to ensure data integrity and improve user experience.
- **Pagination and Sorting**: Add support for pagination and sorting of data in API responses.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/music-album-api.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd music-album-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the server**:

   ```bash
   npm start
   ```


## Routes

### Albums

Base URL: `http://localhost:3000/api/albums`

- `GET /`: Retrieve all albums.
- `POST /`: Create a new album.
- `GET /:id`: Retrieve a specific album by ID.
- `PATCH /:id`: Update a specific album by ID.
- `DELETE /:id`: Delete a specific album by ID.

### Artists

Base URL: `http://localhost:3000/api/artists`

- `GET /`: Retrieve all artists.
- `POST /`: Create a new artist.
- `GET /:id`: Retrieve a specific artist by ID.
- `PATCH /:id`: Update a specific artist by ID.
- `DELETE /:id`: Delete a specific artist by ID.

### Songs

Base URL: `http://localhost:3000/api/songs`

- `GET /`: Retrieve all songs.
- `POST /`: Create a new song.
- `GET /:id`: Retrieve a specific song by ID.
- `PATCH /:id`: Update a specific song by ID.
- `DELETE /:id`: Delete a specific song by ID.

## Testing

To test the CRUD operations for each route, you can use tools like Postman, curl, or make HTTP requests from your frontend or backend code. Here's how you can test each route:

1. **GET /api/albums**: Retrieve all albums.
   - Send a GET request to `http://localhost:3000/api/albums`.

2. **POST /api/albums**: Create a new album.
   - Send a POST request to `http://localhost:3000/api/albums` with the new album data in the request body.

3. **GET /api/albums/:id**: Retrieve a specific album by ID.
   - Replace `:id` with the ID of the album you want to retrieve.
   - Send a GET request to `http://localhost:3000/api/albums/:id`.

4. **PATCH /api/albums/:id**: Update a specific album by ID.
   - Replace `:id` with the ID of the album you want to update.
   - Send a PATCH request to `http://localhost:3000/api/albums/:id` with the updated album data in the request body.

5. **DELETE /api/albums/:id**: Delete a s

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
