import React from 'react';
import Image from './Image';

class List extends React.Component{
    render(){
        return(
            
                <ol>
                    <li>Nasi Padang</li>
                    <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg"/>
                    <li>Sate</li>
                    <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"/>
                    <li>Soto</li>
                    <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"/>
                </ol>
            
        );
    }
}
export default List;