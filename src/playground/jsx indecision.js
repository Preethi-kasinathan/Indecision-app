console.log('app.js is running!');
//JSX Javascript xml

const app={
title:'React',
sub:'jsx',
options:[]

};


const onFormsubmit=(e)=>{
e.preventDefault();

const option = e.target.elements.option.value;

if(option){
app.options.push(option);
e.target.elements.option.value = '';
render();


}

};

const onMakedecision=()=>{
const randomNum=Math.floor(Math.random() * app.options.length);
const option=app.options[randomNum];
alert(option);

};
const onremoveall=()=>{
    app.options=[];
 render();

};

const appRoot = document.getElementById('app');

const numbers=[55,101,1000];



const render = () =>{

    const template = (
    <div>
     <h1>{app.title} </h1>
    {app.sub && <p>{app.sub}</p>}
<p>{app.options.length > 0 ? 'Here r ur options':'no options'}</p>
<button disabled={app.options.length===0}onClick={onMakedecision}>What should I do?</button>
<button onClick={onremoveall}>Remove all</button>
<ol>
{
    app.options.map((option)=>{
   return<li key={option}>{option}</li>
})
}
</ol>

<form onSubmit={onFormsubmit}>
<input type="text" name="option"/>
<button>Add option</button>
</form>
</div>
);
ReactDOM.render(template,appRoot);


};
render();