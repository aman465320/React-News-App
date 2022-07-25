import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Technology = () => {
  const [data, setData] = useState([]);

  const getAllNews = () => {
    axios
      .get("https://inshorts.deta.dev/news?category=technology")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <>
      <div className="container d-grid">
        {data.map((item) => {
          return (
            <Card
              imageUrl={item.imageUrl}
              title={item.title}
              content={item.content}
              url={item.readMoreUrl}
              key={item.id}
              author={item.author}
              date={item.date}
              time={item.time}
              titleUrl={item.url}
            />
          );
        })}
      </div>
    </>
  );
};

export default Technology;
