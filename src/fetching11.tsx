import { useEffect, useRef, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Post {
    id: number;
    title: string;
  }
  
  export default function Demo() {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
      const fetchPosts = async () => {
        setIsLoading(true)
        const response = await fetch(`${BASE_URL}/posts`);
        const posts = (await response.json()) as Post[];
        setPosts(posts);
      };
      setIsLoading(false);
  
      fetchPosts();
    }, []);
 
    if (isLoading){
        return <div>Loading...</div>
    }
  
    return (
      <div className="tutorial">
        <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  