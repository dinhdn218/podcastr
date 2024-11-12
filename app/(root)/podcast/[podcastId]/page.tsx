import React from "react";

const PodcastDetail = ({ params }: { params: { podcastId: string } }) => {
  return <div className="">PodcastDetail {params.podcastId}</div>;
};

export default PodcastDetail;
