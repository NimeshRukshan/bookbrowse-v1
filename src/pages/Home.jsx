import { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SkeletonCard from "../components/SkeletonCard";
import BookCard from "../components/BookCard";
import CategoryList from "../components/CategoryList";
import PaginationControls from "../components/PaginationControls";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../services/bookApi";

const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "newest", label: "Newest" },
];
const categories = ["Technology", "Recipe", "History", "Memoirs", "Skills"];

const Home = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState("javascript");
  const [category, setCategory] = useState("");
  const [orderBy, setOrderBy] = useState("relevance");
  const [startIndex, setStartIndex] = useState(0);
  const resultsPerPage = 10;

  const { data, isLoading } = useQuery({
    queryKey: ["books", { query: searchTerm || category, orderBy, startIndex }],
    queryFn: () =>
      fetchBooks(searchTerm || category, startIndex, resultsPerPage, orderBy),
    enabled: !!(searchTerm || category),
  });

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCategory("");
    setOrderBy("relevance");
    setStartIndex(0);
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    setSearchTerm("");
    setOrderBy("relevance");
    setStartIndex(0);
  };

  return (
    <Box>
      <Navbar />
      <HeroSection onSearch={handleSearch} />
      <Box sx={{ padding: theme.spacing(3) }}>
        <Box
          sx={{
            marginBottom: theme.spacing(3),
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: theme.spacing(2),
          }}
        >
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              {sortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CategoryList
            categories={categories}
            onCategoryClick={handleCategoryClick}
            activeCategory={category}
          />
        </Box>
        <Grid container spacing={2}>
          {isLoading
            ? Array.from(new Array(10)).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <SkeletonCard />
                </Grid>
              ))
            : data?.books?.map((book) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                  <BookCard book={book} />
                </Grid>
              ))}
        </Grid>
      </Box>
      <PaginationControls
        currentPage={Math.floor(startIndex / resultsPerPage) + 1}
        totalPages={Math.ceil((data?.totalItems || 0) / resultsPerPage)}
        onPrevious={() =>
          setStartIndex((prev) => Math.max(prev - resultsPerPage, 0))
        }
        onNext={() => setStartIndex((prev) => prev + resultsPerPage)}
      />
    </Box>
  );
};

export default Home;
