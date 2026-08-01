import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./myComponent.jsx";
import Counter from "./Counter.jsx";
import OnChange from "./OnChange.jsx";
import ColorPicker from "./ColorPicker.jsx";
import Updater from "./Updater.jsx";
import UpdateStateObject from "./UpdateStateObject.jsx";
import UpdateStateArray from "./UpdateStateArray.jsx";
import UpdateStateArrObject from "./UpdateStateArrObject.jsx";
import UseEffect from "./useEffect.jsx";
import UseEffect_CleanUp from "./useEffect_cleanUp.jsx";
import UseReducer from "./UseReducer.jsx";

function App() {
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "grape", calories: 45 },
  //   ];

  //   const vegetables = [
  //     { id: 5, name: "potatoe", calories: 110 },
  //     { id: 6, name: "carrot", calories: 15 },
  //     { id: 7, name: "corn", calories: 89 },
  //     { id: 8, name: "borccoli", calories: 50 },
  //   ];

  //   return (
  //     <>
  //       {fruits.length > 0 ? (
  //         <List items={fruits} category="Fruits"></List>
  //       ) : null}
  //       {vegetables.length > 0 && (
  //         <List items={vegetables} category="Vegetables"></List>
  //       )}
  //     </>
  //   );
  return <UseReducer></UseReducer>;
}

export default App;

/**
 * props - properties that are shared between components.
 * A parent component can send data to a child component.
 * <Component key=value />
 *
 * propTypes is a mechanism that ensures that the passed value is of the correct datatype.
 * age: PropTypes.number
 *
 * defaultProps = default values for props in case they are not passed from the parent component
 * name: "Guest"
 */

/**
 * conditional rendering - allows you to control what gets rendered in your application
 * based on certain conditions (show, hide or changed components)
 */

/**
 * React hook - Special function that allows functional components to use React features without
 *            writing class components (React v16.8)
 *            (useState, useEffect, useContext, useReducer, useCallback and more...)
 *
 * useState() = A React hook that allows the creation of a stateful variable AND a setter function to
 *            update its value in the Virtual DOM [name, setName]
 */
