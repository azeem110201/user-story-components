import { Grid, TextField } from "@mui/material";
import React from "react";

export type BookData = {
  title: string;
  author: string;
};

interface SearchProps {
  style?: React.CSSProperties;
};

const Search = (props: SearchProps) => {
  const [booksData, setBooksData] = React.useState<BookData[]>([]);
  const [query, setQuery] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <Grid container style={props.style}>
        <Grid item>
          <TextField
            placeholder="Search the books..... "
            onChange={handleChange}
          />
        </Grid>
        <Grid container direction={"column"}>
          {query.length > 0 && booksData.length > 0
            ? booksData.map((book) => {
                return (
                  <>
                    <Grid item>{book.title}</Grid>
                    <Grid item>{book.author}</Grid>
                  </>
                );
              })
            : null}
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
