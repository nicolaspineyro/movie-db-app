import { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails, getGenresList, getImages, getVideos } from "../api/movies";
import { capitalize } from "../utils/helpers";
import { MovieI, StateI } from "../utils/interfaces";
import { save } from "../utils/redux/slices/favoritesSlice";
import FavButton from "../components/ui/fav-button";
import DetailContent from "../components/movie-details/detail-content";
import VideoContent from "../components/movie-details/video-content";
import ImageContent from "../components/movie-details/image-content";
import Cast from "../components/movie-details/cast";
import RelatedContent from "../components/movie-details/related-content";
import AditionalContent from "../components/movie-details/text-content";
import TextContent from "../components/movie-details/text-content";

const MovieDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ["getDetails", id],
    () => getDetails(id),
    {
      enabled: !!id,
      refetchOnMount: true,
    }
  );
  const { data: images, isLoading: imagesLoading } = useQuery(
   ["getImages",id],
    () => getImages(id),  
    {
      enabled: !!id,
      refetchOnMount: true,
    }
  );

  if (!images || !id || imagesLoading || isLoading) {
    return <></>;
  }

  const getRandomImage = () => {
    return images.backdrops.sort(() => Math.random() - 0.5)[0];
  };

  return (
    <section className="text-white-default">
      <DetailContent id={id} data={data} images={images} />
      <VideoContent id={id} />
      <RelatedContent
        id={id}
        genre={data?.genres[0]}
        image={getRandomImage()}
      />
      <ImageContent data={images?.backdrops} />
      <Cast id={id} />
      <TextContent data={data} id={id} />
    </section>
  );
};

export default MovieDetails;
