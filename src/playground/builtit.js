class Visibilitytoggle extends React.Component{
constructor(props){
super(props);
this.handleToggle=this.handleToggle.bind(this);
this.state={
visibility: false
};
}
handleToggle(){
this.setState((prevState)=>{
return{
visibility:!prevState.visibility

};
});

}
render(){
return(
    <div>
<h1>Visibility Toggle</h1>

<button onClick={this.handleToggle}>
{this.state.visibility ? 'hide details':'show details'}</button>
     {this.state.visibility && (
         <div>
         <p>This is the details in the div</p>
         </div>
     )}
    </div>

);
}
}

ReactDOM.render(<Visibilitytoggle />, document.getElementById('app'));


/*let visibility=false;

const togglevisible=()=>{
visibility=!visibility;
render();
};
const render = () => {
    const jsx = (
        <div>
     <h1>Visibility toggle</h1>
     <button onClick={togglevisible}>{visibility ? 'hide details':'show details'}</button>
     {visibility && (
         <div>
         <p>This is the details</p>
         </div>

     )}
        </div>

    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();
*/