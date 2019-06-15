const Item = props => <li>{`owoc ${props.content}`}</li>;
const items= ['jabłko','gruszka','śliwka'];

class ListItems extends React.Component {
  state = { 
    
    itemsSearch: [],
   }
  render() {
    const Items = items.map(itemValue => <Item key={itemValue} content={itemValue}/>);
    
    return ( 
      <ul>
        {Items}
      </ul>
     );
  }
}

ReactDOM.render(<ListItems />, document.getElementById('root'))