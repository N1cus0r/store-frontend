import React, { useState, useEffect } from "react";
import useFetching from "../../hooks/useFetching";
import useAxios from "../../hooks/useAxios";
import HomePageContent from "./HomePageContent";

const HomePage = () => {
  const axiosApi = useAxios();
  //Latest Sneakers
  const [latestSneakersPage, setLatestSneakersPage] = useState(1);
  const [latestSneakers, setLatestSneakers] = useState([]);
  const [fetchLatestSneakers, latestSneakersLoading] = useFetching(async () => {
    const response = await axiosApi.get("products/get-latest-products", {
      params: { category: "Sneakers" },
    });
    setLatestSneakers(response.data);
  });
  //Latest Apparel
  const [latestApparelPage, setLatestApparelPage] = useState(1);
  const [latestApparel, setLatestApparel] = useState([]);
  const [fetchLatestApparel, latestApparelLoading] = useFetching(async () => {
    const response = await axiosApi.get("products/get-latest-products", {
      params: { category: "Apparel" },
    });
    setLatestApparel(response.data);
  });

  useEffect(() => {
    fetchLatestSneakers();
    fetchLatestApparel();
  }, []);

  return (
    <HomePageContent
      latestSneakers={latestSneakers}
      latestSneakersPage={latestSneakersPage}
      setLatestSneakersPage={setLatestSneakersPage}
      latestSneakersLoading={latestSneakersLoading}
      latestApparel={latestApparel}
      latestApparelPage={latestApparelPage}
      setLatestApparelPage={setLatestApparelPage}
      latestApparelLoading={latestApparelLoading}
    />
  );
};

export default HomePage;
