import { useEffect } from "react";
//components
import WorkoutDetails from "./../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        // setWorkouts(json);
        dispatch({
          type: "SET_WORKOUTS",
          payload: json,
        });
      }
    };

    fetchWorkouts();
  }, [dispatch]);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails
              key={workout._id}
              workout={workout}
            ></WorkoutDetails>
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
};

export default Home;
