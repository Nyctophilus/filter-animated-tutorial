import "../App.css";
import { motion } from "framer-motion";

const MovieCard = ({ title, backdrop_path, id }) => (
  <motion.article
    layout
    key={id}
    animate={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 0.4 }}
  >
    <img
      src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
      alt={title}
    />
    <h3>{title}</h3>
  </motion.article>
);
export default MovieCard;
