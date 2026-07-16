function ToDos({ title, children }) {
  return (
    <div className="todo-card" title={title}>
      <p>{children}</p>
    </div>
  );
}
export default ToDos;
