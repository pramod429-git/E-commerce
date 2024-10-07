
/*
<div id="parent">
<div id="child">
<h1>I am a h1 Tag</h1>
<h2> I am a h2 Tag</h2>
</div>
<div id="child">
<h1>I am a h1 Tag</h1>
<h2> I am a h2 Tag</h2>
</div>
</div>

*/

const parent = React.createElement(
    "div",
    {id:"parent"},
                [React.createElement("div",{id:"child1"}),
                [React.createElement("h1",{},"Iam a h1 Tag"),
                React.createElement("h2",{},"Iam a h2 Tag")],
                React.createElement("div",{id:"child2"}),
                [React.createElement("h1",{},"Iam a h1 Tag"),
                React.createElement("h2",{},"Iam a h2 Tag")]])
                

                console.log(parent);


//const heading = React.createElement("h1",{id:"heading"},"Hello world from React");
           
 const root =ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

root.render(parent);