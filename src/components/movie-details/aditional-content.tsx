import { MovieI } from "../../utils/interfaces";

const TextContent = ({ data }: { data: MovieI }) => {
  const {
    budget,
    original_language,
    original_title,
    revenue,
    runtime,
    homepage,
    overview,
    genres,
    spoken_languages,
    production_companies,
    production_countries,
  } = data;

  return (
    <section className="bg-gray-dark px-4 py-10 space-y-5">
      <span className="text-3xl font-semibold">About</span>
      <div className="bg-gray-medium rounded-2xl p-5 flex flex-col space-y-2">
        <div className="flex flex-col">
          <span className="font-semibold text-md">{original_title}</span>
          <span className="text-xs text-gray-light">
            {genres[0]?.name.toUpperCase()}
          </span>
        </div>

        <p className="text-sm text-justify">{overview}</p>
      </div>
    </section>
  );
};

export default TextContent;
