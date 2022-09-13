import React, { useState, useEffect } from "react";

const ListPosts = () => {
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([])
  const [filterPost, setFilterPost] = useState([])

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await response.json()
    setPost(data)
    setFilterPost(data)
    setLoading(false);
  };

  const searchPost = (searchValue) =>{
    setSearch(searchValue)
    if (searchValue !== "") {
      let newSearchData = post.filter((value) => {
          return value.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      setFilterPost(newSearchData)
    }else{
      setFilterPost(post)
    }
    
  }

  
  return (
    <div>
      <h1>Post</h1>
      <input type="text" value={search} onChange={(e) => searchPost(e.target.value)} /> 
      <ul>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        filterPost.map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
      </ul>
    </div>
  );
};

export default ListPosts;
