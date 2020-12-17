class Counter extends React.Component{
    constructor(props){
super(props);
this.handleAddOne=this.handleAddOne.bind(this);
this.handleMinusOne=this.handleMinusOne.bind(this);
this.handleReset=this.handleReset.bind(this);
this.state={
 count: 0
};
    }
handleAddOne(){
this.setState((prevState)=>{
    return{
count: prevState.count+1

    };
});
}
handleMinusOne(){
    this.setState((prevState)=>{
    return{
count: prevState.count-1

    };
});
}
handleReset(){
    this.setState(()=>{
        return{
    count: 0

        };
    });
};
    render(){
return(
<div>
<h1>Count:{this.state.count}</h1>
<button onClick={this.handleAddOne}>+1</button>
<button onClick={this.handleMinusOne}>-1</button>
<button onClick={this.handleReset}>Reset</button>
</div>
);
    }
}
ReactDOM.render(<Counter />,document.getElementById('app'));





/*
let count=0;
const addOne = ()=> {
    count++;
    rendercounter();
};
const setUp= () =>{
   --count;
  rendercounter();
};
const reset=()=>{
   count=0;
   rendercounter();
};


const appRoot = document.getElementById('app');



const rendercounter=()=>{
    const templatetwo=(
<div>
<h1>Count:{count}</h1>
<button onClick={addOne}>+1</button>
<button onClick={setUp}>-1</button>
<button onClick={reset}>reset</button>
</div>
);
ReactDOM.render(templatetwo, appRoot);

};
rendercounter();*/