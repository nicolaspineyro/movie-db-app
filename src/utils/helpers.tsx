const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// const filterNonNull = (data: Object[]) => {
//   console.log(
//     data.filter((item) => {
//       console.log(
//         item["backdrop_path"] === undefined,
//         item["overview"] === undefined,
//         item["overview"]
//       );
//     })
//   );

//   return Object.values(
//     Object.fromEntries(
//       Object.entries(data).filter(([k, v]) => {
//         if (k === "overview" || k === "backdrop_path")
//           return !(v === null || v === undefined);
//         else return true;
//       })
//     )
//   );
// };

export { capitalize };
