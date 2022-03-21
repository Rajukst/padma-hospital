import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const MyRattings = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/my-review")
      .then((res) => res.json())
      .then((data) => setValue(data));
  }, []);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default MyRattings;
