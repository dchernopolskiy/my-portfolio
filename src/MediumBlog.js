import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Fallback image for blog posts
import fallbackImage from './srcProjectImages/face.jpg'; //!!TODO!! update this to use symlink later

const MediumBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dan.chernopolskii'
        );
        setPosts(response.data.items);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch blog posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getImageUrl = (post) => {
    if (post.thumbnail && post.thumbnail !== '') {
      return post.thumbnail;
    }
    // Check if there's an image in the content
    const imgRegex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
    const match = imgRegex.exec(post.content);
    if (match && match[1]) {
      return match[1];
    }
    // If no image is found, return the fallback image
    return fallbackImage;
  };

  if (loading) return <div>Loading blog posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section id="blog" className="min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-8">BLOG</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.guid} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={getImageUrl(post)} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                onError={(e) => {e.target.onerror = null; e.target.src = fallbackImage;}}
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{new Date(post.pubDate).toLocaleDateString()}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediumBlog;