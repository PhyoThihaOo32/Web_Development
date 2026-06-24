import colors from "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || white;
  console.log(
    colors[color](
      `${req.method} ${req.protocol}://${req.get("host")} ${req.originalUrl}`,
    ),
  );
  next();
};

export default logger;
