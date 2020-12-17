
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteoption=this.handleDeleteoption.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
          options:props.options
        };
    }
    handleDeleteoption(){
this.setState(()=>{
return{
options: []
}
});
    }
handlePick(){
const randomNum=Math.floor(Math.random()*this.state.options.length);
const option=this.state.options[randomNum];
    alert(option);
}

handleAddOption(option){
if(!option){
    return 'Enter valid value';

}
else if(this.state.options.indexOf(option)>-1){
return 'This option already exist';
}
this.setState((prevState)=>{

return{
options:prevState.options.concat([option])
};
});
}
render(){
    const title='Indecision';
return(
    <div>
<Header  />
<Action hasOptions={this.state.options.length > 0}
handlePick={this.handlePick}
/>
<Options options={this.state.options}
handleDeleteoption={this.handleDeleteoption}
/>
<AddOptions
handleAddOption={this.handleAddOption}
/>
    </div>
);
}
}

IndecisionApp.defaultProps={
options:[]
};
const Header=(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>Put your life in the hands of a computer</h2>
            </div>
    );
};

Header.defaultProps={
title:'Indecision'
};

/*class Header extends React.Component{
render(){
console.log(this.props);
return (
    <div>
<h1>{this.props.title}</h1>
<h2>Put your life in the hands of a computer</h2>
    </div>
)
}

}*/

const Action=(props) => {
return(
    <div>
    <button
     onClick={props.handlePick}
     disabled={!props.hasOptions}>
     what should I do
     </button>
       </div>
);
};
/*class Action extends React.Component{

render(){
return(
    <div>
 <button
  onClick={this.props.handlePick}
  disabled={!this.props.hasOptions}>
  what should I do
  </button>
    </div>
);
}
}*/


const Options=(props)=>{
    return(
        <div>
        <button onClick={props.handleDeleteoption}>Remove all</button>
  {
  props.options.map((option)=> <Option key={option} optionText={option} />)
  }


        </div>
    );
};

/*class Options extends React.Component{


    render(){
        return(
      <div>
      <button onClick={this.props.handleDeleteoption}>Remove all</button>
{
this.props.options.map((option)=> <Option key={option} optionText={option} />)
}


      </div>

        );
    }
}*/

const Option=(props)=>{
return(
    <div>{props.optionText}</div>
);
};

/*class Option extends React.Component{
    render(){
     return(
         <div>{this.props.optionText}</div>

);
    }
}*/


class AddOptions extends React.Component{
    constructor(props){
super(props);
this.handleAddOption=this.handleAddOption.bind(this);
this.state={
error:undefined
};
    }
handleAddOption(e){
    e.preventDefault();
const option=e.target.elements.option.value.trim();
const error=this.props.handleAddOption(option);
this.setState(()=>{
return{error
};
});

}
    render(){return(
        <div>
        {this.state.error && <p>{this.state.error}</p>}
<form onSubmit={this.handleAddOption}>
<input type="text" name="option"/>
<button>Add Option</button>
</form>
        </div>);
    }
}


/*const User=(props)=>{
    return(
<div>
<p>Name:{props.name}</p>
<p>Age:</p>
</div>
    );
};*/

ReactDOM.render(<IndecisionApp options={['devils den','dearest enemy']}/>,document.getElementById('app'));