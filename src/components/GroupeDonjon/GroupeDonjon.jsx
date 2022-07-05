// version avec la notation props
const GroupeDonjon = (props) => {
  console.log(props.children);
  return (
    <div className="groupe_donjon">
      {props.children}
      <p>Taille du groupe: {props.children.length}</p>
    </div>
  );
};

export default GroupeDonjon;
