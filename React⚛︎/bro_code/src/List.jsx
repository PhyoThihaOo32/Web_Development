import PropTypes from "prop-types";

function List(props) {
  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} has <b>{item.calories} </b>calories.
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
