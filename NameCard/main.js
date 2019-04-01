function Person(props){
  return(
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.City}</p>
    </div>
  );
}

var app=(
  <div>
    <Person name="Sayali" City="San Jose"/>
    <Person name="Aniket" City="Pune"/>
  </div>
);
      
ReactDOM.render(app,
document.querySelector('#app'));

// ReactDOM.render(<Person name="Sayali" City="San Jose"/>,
// document.querySelector('#p1'));

// ReactDOM.render(<Person name="Aniket" City="Pune"/>,
// document.querySelector('#p2'));
