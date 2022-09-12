import React, { useState, useEffect } from "react";

const ListPosts = () => {
 const [search, setSearch] = useState("")
 const [post, setPost] = useState([])
 const [filterPost, setFilterPost] = useState([])
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()  
    setPost(data)  
    setFilterPost(data)
  };

  const searchPost = () =>{
    if(search){
        let newPosts = post.filter( (item) => {
            return item.title == search
        })
        setFilterPost(newPosts)
    }else{
        setFilterPost(post)
    }
    
  }

  return (
    <div>
        <h1>Post</h1>
        <input type="text" value={search} onChange={ (e) => setSearch(e.target.value)} /> <button onClick={() => searchPost()}> Search </button>
        <ul>
            {
                filterPost.map( (item) => {
                    return (
                        <li> {item.title} </li>
                    )
                })
                
            }
        </ul>
    </div>
  );
};

export default ListPosts;
