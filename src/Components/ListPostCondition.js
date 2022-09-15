import React, { useState, useEffect } from "react";

const ListPostCondition = () => {
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([])

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    const fetchData = async () => {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        setPost(data)
        setLoading(false);
    };

    return (
        <div>
            <h1>Post Search</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            {loading ? (
                <h4>Loading ...</h4>
            ) :
                (<ul>
                    {
                        post.filter((value) => {
                            return value.title.toLowerCase().includes(search.toLowerCase())
                        })
                            .map(item => {
                                return (
                                    <div key={item.id}>
                                        <h2>Title: {item.title}</h2>
                                        <p>Description: {item.body}</p>
                                        <hr />
                                    </div>
                                );
                            })
                    }
                </ul>)
            }
        </div>
    );
};

export default ListPostCondition;
