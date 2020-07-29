import React from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import CategoryItem from './CategoryItem';
const catego= [{
  id:1,
  item:'Shoes',
  price: '100'
},
{
  id:2,
  item:'Boots',
  price: '200',
},
{
  id:3,
  item:'Footwear',
  price: '300'
}
]
function Category(props) {
  console.log(props)
  return (
    <div>
 {catego.map( product => <p>  <Link to={`/category/${product.item}`}>{product.item}</Link> </p> )}
     
 <Route path={'/category/:productId'} render={(props) => <CategoryItem id={props.match.params.productId}/>  }/>
    </div>
  );
}

export default Category;
