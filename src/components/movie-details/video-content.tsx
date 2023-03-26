import { useEffect } from "react";
import { useQuery } from "react-query";
import { getVideos } from "../../api/movies";
import YoutubeEmbed from "../youtube-embed";

const VideoContent = ({ id }: { id?: string }) => {
  const {
    data: videos,
    isLoading: videosLoading,
    refetch,
  } = useQuery("getVideos", () => getVideos(id), {
    enabled: !!id,
  });

  useEffect(() => {
    refetch();
  }, [id]);

  if (!videos) {
    return <></>;
  }

  return (
    <section className="py-3 space-y-3 bg-black ">
      <span className="px-4 text-2xl font-semibold">Videos</span>
      <div className="flex px-2 overflow-scroll space-x-6 scrollbar-hide">
        {videos.results
          ?.filter(({ name }: { name: string }) => name.includes("Trailer"))
          .map(
            ({ key, name }: { key: string; name: string }, index: number) => {
              return (
                <div key={`trailer-${index}`}>
                  <YoutubeEmbed embedId={key} />
                  <span className="text-xs">{name}</span>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
};

export default VideoContent;
