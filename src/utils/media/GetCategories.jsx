const GetCategories = () => {
  const baseURL =
    "https://django-sneakerhouse.s3.eu-central-1.amazonaws.com/categories/";

  return [
    {
      text: "Sneakers",
      img: baseURL + "sneakers.jpg",
    },
    {
      text: "Apparel",
      img: baseURL + "apparel.jpg",
    },
    {
      text: "Accessories",
      img: baseURL + "accessories.jpg",
    },
  ];
};

export default GetCategories;
