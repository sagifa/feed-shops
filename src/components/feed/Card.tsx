import React, { useEffect, useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { CardWrapperStyle } from "./styles";
import Header from "./Header";
import Images from "./Images";
import Summary from "./Summary";
import Divider from "./Divider";
import Buttons from "./Buttons";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

type serverData = {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  shopName: string;
  shopId: string;
  images: string[];
  comments: number;
  date: string;
  text: string;
  likes: number;
  didLike: boolean;
  premium: boolean;
}[];

const Card = () => {
  const [serverData, setServerData] = useState<serverData>([]);
  const [feeds, setFeeds] = useState<serverData>([]);

  console.log("A", serverData);
  console.log("B", feeds);
  const loadPerScroll = 6;
  let loadedAmount = 0;

  useEffect(() => {
    fetchDataServer();
  }, []);

  const fetchDataServer = () => {
    axios
      .get("https://dev.tedooo.com/feed.json")
      .then((response) => {
        setServerData(response.data.data);
        setFeeds(response.data.data.slice(0, loadPerScroll));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };
  const fetchMoreData = () => {
    setFeeds(serverData.splice(0, feeds.length + loadPerScroll));
  };
  if (!feeds.length) return <p>Loading...</p>;
  return (
    <>
      <InfiniteScroll
        dataLength={feeds?.length}
        next={fetchMoreData}
        hasMore={feeds.length < serverData.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {feeds?.map((feed) => (
          <Flex key={feed.id} {...CardWrapperStyle}>
            <Header {...feed} />
            <Images {...feed} />
            <Summary {...feed} />
            <Divider />
            <Buttons />
          </Flex>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Card;
