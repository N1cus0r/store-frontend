const GetPopularBrands = () => {
  const baseURL =
    "https://django-sneakerhouse.s3.eu-central-1.amazonaws.com/brands/";

  return [
    {
      text: "Nike",
      img: baseURL + "nike-brand.jpg",
    },
    {
      text: "Jordan",
      img: baseURL + "jordan-brand.jpg",
    },
    {
      text: "Supreme",
      img: baseURL + "supreme-brand.jpg",
    },
    {
      text: "Bape",
      img: baseURL + "bape-brand.jpg",
    },
  ];
};

export default GetPopularBrands;
