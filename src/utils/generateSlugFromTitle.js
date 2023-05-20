const generateSlugFromTitle = (title) => {
  return title.toLowerCase().split(" ").join("-");
};

module.exports = generateSlugFromTitle;
