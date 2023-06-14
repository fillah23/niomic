import React from "react";

const Top =()=>{
    function HandlePesan(value,e){
        e.preventDefault();
        alert("Halaman Top Tampil");
        alert(value);
    }
    return <a href="/" onClick={(e)=>HandlePesan("Pesan dari top",e)}>Halaman Top</a>
}
export default Top;