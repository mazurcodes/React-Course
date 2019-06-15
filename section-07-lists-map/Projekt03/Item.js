const Item = ({id, name, active, click}) => {
  const activeItem = () => active ? "active" : "inactive";

  return ( 
    <li className={activeItem()} onClick={() => click(id)}>{name}</li>
   );
}