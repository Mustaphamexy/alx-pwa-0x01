# MoviesDatabase API Integration

## API Overview
The **MoviesDatabase API** provides complete and up-to-date information for over **9 million titles**, including movies, series, and episodes.

**Key Features:**
- **Comprehensive data**: Title details, ratings, cast, crew, genres, and more.
- **Frequent updates**: New titles updated weekly; ratings and episodes updated daily.
- **Flexible queries**: Multiple optional query parameters for filtering, sorting, and pagination.
- **Rich metadata**: Access to 58+ fields for titles via the `info` query parameter.
- **Multiple content types**: Titles, episodes, seasons, actors, and utility lookups.

---

## Version
**Version**: Latest (Documentation date: *2025-08-08*)

---

## Available Endpoints

### Titles
- **GET `/titles`** – Returns an array of titles based on optional filters and sorting.
- **GET `/x/titles-by-ids`** – Returns titles for an array of IMDb IDs.
- **GET `/titles/{id}`** – Returns details for a single title by IMDb ID.
- **GET `/titles/{id}/ratings`** – Returns rating and vote count for a title.

### Seasons & Episodes
- **GET `/titles/series/{id}`** – Returns all episodes for a series (IDs, episode numbers, seasons).
- **GET `/titles/seasons/{id}`** – Returns total number of seasons for a series.
- **GET `/titles/series/{id}/{season}`** – Returns episodes for a specific season.
- **GET `/titles/episode/{id}`** – Returns details for an episode.

### Upcoming Titles
- **GET `/titles/x/upcoming`** – Returns upcoming titles with optional filters.

### Search
- **GET `/titles/search/keyword/{keyword}`** – Search titles by keyword.
- **GET `/titles/search/title/{title}`** – Search titles by title text (supports exact match).
- **GET `/titles/search/akas/{aka}`** – Search titles by AKA (exact, case-sensitive).

### Actors
- **GET `/actors`** – Returns a list of actors with optional pagination.
- **GET `/actors/{id}`** – Returns details for a specific actor.

### Utils
- **GET `/title/utils/titleType`** – Returns a list of title types.
- **GET `/title/utils/genres`** – Returns a list of genres.
- **GET `/title/utils/lists`** – Returns predefined lists (e.g., top-rated, most popular).

---

## Request and Response Format

**Example Request:**
http
GET /titles?limit=5&year=2023&genre=Action HTTP/1.1
Host: moviesdatabase.p.rapidapi.com

---

## Authentication
- The API uses API Key authentication via RapidAPI.
- Include the following headers in every request:
X-RapidAPI-Key: YOUR_API_KEY
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com 

# Error Handling

**Common Error Codes:**

| Status Code | Meaning                  | Cause                               |
|-------------|--------------------------|--------------------------------------|
| 400         | Bad Request              | Invalid query parameters            |
| 401         | Unauthorized             | Missing or invalid API key          |
| 404         | Not Found                | Invalid title or actor ID           |
| 429         | Too Many Requests        | Exceeded rate limits                |
| 500         | Internal Server Error    | API service error                   |

---

# Usage Limits and Best Practices

- **Rate Limits:** Defined by your RapidAPI subscription plan. Monitor to avoid `429` errors.  
- **Pagination:** Use `page` and `limit` for large datasets.  
- **Filtering:** Use `genre`, `startYear`, `endYear`, and `sort` to refine results.  
- **info parameter:** Request only the fields you need to optimize performance.  
- **Caching:** Store frequent query results locally to reduce API calls.  
- **Exact Matching:** For title searches, set `exact=true` when precision is required.
