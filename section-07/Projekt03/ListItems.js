const ListItems = ({items, click}) => {
  const itemsList = items.map(item => <Item key={item.id} name={item.name} active={item.active} click={click} id={item.id}/>)

  return ( 
    <ul>
      {itemsList}
    </ul>
   );
}