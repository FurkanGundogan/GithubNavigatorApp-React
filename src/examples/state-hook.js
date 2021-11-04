// class - stateless function component

// 16.8 versionu ile component+hook=>stateful function component

import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom'


/*
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            text:""
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <p>Butona {this.state.count} kez tıkladınız.</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+1</button>
            </div>
        )
    }
}
*/


const App = (props) =>{

    const [count,setCount] = useState(props.count);
    const [text,setText] = useState("");

    // componentdidmount , componentdidupdate gorevlerini yapiyor
    useEffect(()=>{console.log("Use-Effect-mount-and-update")})

    // componentdidmount  gorevini yapiyor
    useEffect(()=>{
        console.log("Use-Effect-mount");
        const cData=localStorage.getItem('count');
        if(cData){
            setCount(Number(cData));
        }

    },[])

    // count icin componentdidmount, componentdidupdate  gorevlerini yapiyor
    useEffect(()=>{
            console.log("Use-Effect-count");
            localStorage.setItem('count',count);

        },[count])

    // text icin componentdidmount, componentdidupdate  gorevlerini yapiyor
    useEffect(()=>{console.log("Use-Effect-text")},[text])





    return (
        <div> 
            <p>Butona {count} kez tıkladınız.</p>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>+-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <p>Metin: {text} </p>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
    )
}


ReactDOM.render(<App count={5}/>,document.getElementById('root'));
