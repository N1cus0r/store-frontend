import React from "react";
import CenteredBox from "../../components/layout/CenteredBox";
import { Grid } from "@mui/material";
import ProductRow from "../../components/products/ProductRow";
import ImageRow from "../../components/images/ImageRow";
import GetPopularBrands from "../../utils/media/GetPopularBrands";
import GetCategories from "../../utils/media/GetCategories";

const HomePageContent = ({
  latestSneakers,
  latestSneakersPage,
  setLatestSneakersPage,
  latestSneakersLoading,
  latestApparel,
  latestApparelPage,
  setLatestApparelPage,
  latestApparelLoading,
}) => {
  return (
    <>
      <CenteredBox>
        <Grid
          container
          justifyContent={"center"}
          textAlign="center"
          spacing={4}
        >
          <Grid item xs={12}>
            <ProductRow
              loading={latestSneakersLoading}
              title={"Featured Sneakers"}
              products={latestSneakers}
              page={latestSneakersPage}
              setPage={setLatestSneakersPage}
            />
          </Grid>
          <Grid item xs={12}>
            <ImageRow title={"Popular Brands"} objects={GetPopularBrands()} />
          </Grid>
          <Grid item xs={12}>
            <ProductRow
              loading={latestApparelLoading}
              title={"Featured Apparel"}
              products={latestApparel}
              page={latestApparelPage}
              setPage={setLatestApparelPage}
            />
          </Grid>
          <Grid item xs={12}>
            <ImageRow title={"Categories"} objects={GetCategories()} />
          </Grid>
        </Grid>
      </CenteredBox>
    </>
  );
};

export default HomePageContent;
