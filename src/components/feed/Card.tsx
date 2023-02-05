import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { ButtonsWrapperStyle, CardWrapperStyle } from "./styles";
import Header from "./Header";
import Images from "./Images";
import Summary from "./Summary";
import Divider from "./Divider";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadPerScroll, texts } from "../../utils/consts";
import api from "../../services/api";
import ButtonClickAble from "./ButtonClickAble";
import { LikeIcon } from "../../images/likeIcon";
import { CommentIcon } from "../../images/commentIcon";
import ButtonRegular from "./ButtonRegular";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDataServer();
  }, []);

  const fetchDataServer = () => {
    api
      .fetchFeeds()
      .then((response) => {
        setServerData(response.data.data);
        setFeeds(response.data.data.slice(0, loadPerScroll));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      })
      .finally(() => setIsLoading(false));
  };

  const fetchMoreData = () => {
    setFeeds(serverData.splice(0, feeds.length + loadPerScroll));
  };

  if (isLoading) return <p>{texts.loading}</p>;

  if (!isLoading && !feeds.length) return <p>{texts.noData}</p>;

  return (
    <InfiniteScroll
      dataLength={feeds?.length}
      next={fetchMoreData}
      hasMore={feeds.length < serverData.length}
      loader={<h4>{texts.loading}</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>{texts.endScroll}</b>
        </p>
      }
    >
      {feeds?.map((feed) => (
        <Flex key={feed.id} {...CardWrapperStyle}>
          <Header {...feed} />
          <Images {...feed} />
          <Summary {...feed} />
          <Divider />
          <Flex {...ButtonsWrapperStyle}>
            <ButtonClickAble icon={LikeIcon} text={texts.like} />
            <ButtonRegular icon={CommentIcon} text={texts.comment} />
          </Flex>
        </Flex>
      ))}
    </InfiniteScroll>
  );
};

export default Card;
