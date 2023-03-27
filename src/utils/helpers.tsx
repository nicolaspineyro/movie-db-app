const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const capitalizeWords = (str: string) => {
  return str && str.split(" ").map(capitalize).join(" ");
};

const getInitials = (name: string) => {
  const names = name.split(" ");
  return names[0].charAt(0) + names[1].charAt(0);
};

export { capitalize, getInitials, capitalizeWords };
