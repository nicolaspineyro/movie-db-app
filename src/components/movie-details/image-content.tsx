const ImageContent = ({ data }: { data: any[] }) => {
  return (
    <section className="bg-gray-medium pb-4 space-y-4">
      <span className=" px-4 text-2xl font-semibold">Images</span>
      <div className="grid grid-flow-col grid-rows-1 overflow-auto scrollbar-hide gap-5 px-2">
        {data.slice(1, 11).map(({ file_path }, index) => {
          return (
            <div className="w-[80vw] shadow-2xl" key={`image-${index}`}>
              <img
                className="rounded-lg w-full h-full shadow-xl"
                src={`${import.meta.env.VITE_BASE_IMG_URL}${file_path}`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageContent;
