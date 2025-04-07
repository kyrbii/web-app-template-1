const logger = require("../utils/logger.js");

const team = {
  index(request, response) {
    logger.info("team rendering");
    const viewData = {
      title: "The Team behind Stream your Theme!"
    };
    response.render("team", viewData);
  },
};

module.exports = team;
