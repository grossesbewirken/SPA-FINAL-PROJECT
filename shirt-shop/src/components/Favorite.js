import { useContext } from "react";
import FavoriteContext from "../context/FavoriteContext";

const Favorite = ({sherds}) => {
  const [favoriteContext] = useContext(FavoriteContext)
  console.log(favoriteContext);
  return (
    <div>
      <h1>Favoriten</h1>

    </div>
  );
};

export default Favorite;