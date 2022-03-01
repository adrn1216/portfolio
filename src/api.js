import axios from "axios";

export const getSellerReviews = (setIsError, setLoading) => {
  setLoading(true);
  axios
    .get(`https://fiverr-webscrape.herokuapp.com/seller-reviews?id=adrn1216`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(setLoading(false));
};
