import Navbar from "../components/navbar";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import styles from "../styles/home.module.css";

const queryClient = new QueryClient();


export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Get_data />
    </QueryClientProvider>
  );
}


function Get_data() {
  const today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1;

  const [date, setDate] = useState("2023-" + month + "-" + day);
  let month_day = date.split("-");

  const handleClick = () => {
    refetch();
  };

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const { isLoading, error, data, isFetching, refetch } = useQuery(
    "repoData",
    () =>
      axios
        .get(
          "http://numbersapi.com/" + month_day[1] + "/" + month_day[2] + "/date"
        )
        .then((res) => res.data)
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <br></br>

      <h2>Home page</h2>

      <Navbar></Navbar>

      <div className={styles.container}>
        <h2> Select date</h2>
        <input type="date" value={date} onChange={handleChange}  min="2020-01-01" max="2020-12-31" />
        <p>Selected Date: {date}</p>
        <br></br>
        <button onClick={handleClick}>Want some trivia!</button>
        <button onClick={handleClick}>Another fact</button>

        <h3>Fact of the day</h3>

        <div> <strong>{isFetching ? "Updating..." : data }</strong></div>
      </div>
    </div>
  );
}
