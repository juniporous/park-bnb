import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpots } from "../../store/spots";

const Spots = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => Object.values(state.spot));
  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch])
  console.log(spots)
  return (
    <div>
        spots test
        <ul>
          {spots?.map(spot => (
            <li>{spot.id}</li>
          ))}
        </ul>
    </div>
  );
};
export default Spots;