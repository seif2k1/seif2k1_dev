import React, { useEffect, useState } from "react";
import axios from "axios";
import { Pagination as Pagination1 } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
///// config the size of the outp of pagination /////
function chunk(array, size) {
  if (!array?.length) {
    return [];
  }
  const head = array?.slice(0, size);
  const tail = array?.slice(size);
  return [head, ...chunk(tail, size)];
}

function Pagination({ setProducts2, products2 }) {
  ///// Define a varriable to get all products  /////
  const [products, setProducts] = useState([]);
  ///// get the limit from the redux and put it on the server //////
  const select = useSelector((state) => state.cartItem.filter);
  ///// select number of pagination //////
  const [activePage, setPage] = useState(1);
  ///// get all products from the server /////
  /*  useEffect(() => {
    const data = async () => {
      try {
        const response = select.category
          ? await axios.get(
              `https://dummyjson.com/products/category/${select.category}`
            )
          : await axios.get(
              `https://dummyjson.com/products?limit=${Number(0)}`
            );
        response &&
          setProducts(
            select.brand === null || select.category === null
              ? response.data.products
              : response.data.products.filter(
                  (data) => data?.brand === select.brand
                )
          );
      } catch (error) {
        alert(error.message);
      }
    };
    data();
  }, [select.brand]); */
  console.log(products, "123");
  /////// brand ///////
  const [allProducts, setAllProducts] = useState([]);
  /* useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products`);
        response && setAllProducts(response.data.products);
      } catch (error) {   
        alert(error.message);
      }
    };
    data();
  }, []); */

  /////////////////////
  //// put the filter of the page by pagination and changing the products by number activePage of pagination /////
  /* useEffect(() => {
    setProducts2(
      chunk(
        products2?.map((data, index) => data),
        Number(select.limit)
      )[activePage - 1]?.map((item) => item)
    );
  }, []); */
  console.log(products2.map((data) => data));
  useEffect(() => {
    setPage(1);
  }, [select]);
  ///// custome the size of pagintaion number //////
  const selectLength = () => {
    const filter = products2?.length / Number(select.limit);
    return Math.ceil(filter);
  };
  return (
    <div className="w-full flex my-5 items-center justify-center">
      <Pagination1
        total={selectLength()}
        value={activePage}
        onChange={setPage}
        mt="sm"
      />
    </div>
  );
}

export default Pagination;
