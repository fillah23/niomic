import React from 'react';

class Image extends React.Component{
    render(){
        return(
            <img src={this.props.linkGambar} alt="gambar-makanan" width="500px" />
        );
    }
}
export default Image;