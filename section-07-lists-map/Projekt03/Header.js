const Header = ({items}) => {
  const activeItems = items.filter(item => item.active === true);

  return ( 
    <header>
      <h2>Wielkość zamówienia: {activeItems.length}</h2>
      <h2>Do zapłaty: {activeItems.length * 10} złotych</h2>
      </header>
   );
}
