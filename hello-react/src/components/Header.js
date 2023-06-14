import React from "react";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      daftar : "Daftar makanan indonesia",
      datalist : this.props.list,
    };
    this.HandlePesan1 =this.HandlePesan1.bind(this);
  }
  HandlePesan1(value,e){
    e.preventDefault();
    alert("Halaman Header Tampil");
    alert(value);
}
  render(){
      return(
        <div>
          <h2>Makanan khas indonesia</h2>
          <p>{this.state.daftar}</p>
          <p>{this.state.datalist}</p>
          <a href="/" onClick={(e)=>this.HandlePesan1("PEsan dari header",e)}>Halaman Header</a>
        </div>
      );
    }
  }
export default Header;
