const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <iframe
    src={`https://www.youtube.com/embed/${embedId}`}
    className={"h-[23vh] rounded-xl shadow-2xl"}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
  />
);

export default YoutubeEmbed;
