import { FC, useEffect } from "react";
import { useFetchNineDogImages } from "../api/queries";
import { Container, Grid, Typography } from "@mui/material";
import { PhotoGridProps } from "./type";

const PhotoGrid: FC<PhotoGridProps> = ({ name }) => {
  const [{ data, isLoading, refetch }, { stop, seconds }] =
    useFetchNineDogImages();

  useEffect(() => {
    if (seconds === 0) {
      refetch();
      stop();
    }
  }, [seconds]);

  return (
    <Container>
      <Typography pb={2} variant="h2" textAlign={"center"}>
        Welcome to Photo Grid {name}
      </Typography>
      <Typography pb={2} variant="h3" textAlign={"center"}>
        Timer : {seconds}
      </Typography>
      {isLoading && data == null ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          {data?.map((image) => (
            <Grid
              sx={{
                width: "200px",
                height: "200px",
                overflow: "hidden",
              }}
              item
              xs={4}
              key={image.message}
            >
              <img
                src={image.message}
                alt="Dog"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default PhotoGrid;
