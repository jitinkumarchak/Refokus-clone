import React from 'react'
import Product from './Product'

function Products() {
   var products = [
    {
        title: "arqitle",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: false,
    },
    {
        title: "TTR",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case:false,
    },
    {
        title: "YIR 2022",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: true,
    },
    {
        title: "Yahooo!!!",
        description: "Lorem ipsum dolt eum minus harum inquos doloremque unde cupiditate dicta vero, quae reprehenderit nemo.",
        live: true,
        case: true,
    }
   ];
  return (
    <div className='mt-32'>
        {products.map((val ,index)=> <Product val={val} /> )}
    </div>
  )
}

export default Products