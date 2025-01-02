import axios from "axios";
import { toast } from "react-toastify";

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

// Centralized error handling
const handleApiError = (error, defaultMessage = "An error occurred.") => {
  toast.error(defaultMessage);
  console.error(error);
};

// Fetch books with pagination and error handling
export const fetchBooks = async (
  query,
  startIndex = 0,
  maxResults = 10,
  orderBy = "relevance"
) => {
  try {
    console.log(
      `Fetching books for query: "${query}", Page: ${
        startIndex / maxResults + 1
      }, OrderBy: ${orderBy}`
    );
    const { data } = await axios.get(
      `${API_BASE}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}&orderBy=${orderBy}&key=${API_KEY}`
    );

    if (!data.items || data.items.length === 0) {
      toast.info("No books found for the given search.");
      return { books: [], totalItems: 0 };
    }

    console.log("Fetched Books:", data.items);
    console.log("Total Results:", data.totalItems);

    return {
      books: data.items,
      totalItems: data.totalItems || 0,
    };
  } catch (error) {
    handleApiError(error, "Failed to fetch books. Please try again.");
    throw error;
  }
};

// Fetch detailed book information
export const fetchBookDetails = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE}/${id}?key=${API_KEY}`);
    return data;
  } catch (error) {
    handleApiError(error, "Failed to fetch book details. Please try again.");
    throw error;
  }
};
