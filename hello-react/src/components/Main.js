import React from 'react';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title:"Menu makanan",
            title2:"Menu minuman",
            value:"Nasi Goreng"
        }
        this.rubahData =this.rubahData.bind(this);
        this.handleCahnge=this.handleCahnge.bind(this);
    }
    handleCahnge(e){
        console.log(e.target.value)
    }
    rubahData(){
        this.setState({title : "pilih makanan",title2 : "pilih minuman",})
    }
    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <h3>{this.state.title2}</h3>
                <button onClick={this.rubahData}>Rubah data</button><br/>
                <input type="text" value={this.state.value} onChange={this.handleCahnge}/>
            </div>
        );
    }
}
export default Main;