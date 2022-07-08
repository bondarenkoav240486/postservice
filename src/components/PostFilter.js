
import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
    
    <h3>SEARCH</h3>
    <MyInput 
    value={filter.query}
    onChange={e=>setFilter({...filter,query:e.target.value})}
    placeholder="search..."
    / >
    
    <h3>SORT</h3>
    
    <MySelect
    value={filter.sort}
    onChange={selectedSort=>setFilter({...filter,sort:selectedSort})}
    
    defaultValue='SORT'
    options={[
      {value:'title',name:'HEADER'},
      {value:'body',name:'CONTE'},
      ]}
      />

      </div>
      );
    };

    export default PostFilter;
