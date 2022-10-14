import React from 'react';
import {BlogsFound} from "./blogFetcher/blogFetch";

const Blog = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'Center',
                alignItems: 'Center'
            }}
        >
            {BlogsFound.map(blogs => (
                <ul className="blog-element">
                    <div className="blog-title">
                        {blogs.title}
                    </div>
                    <div className="blog-content">
                        {blogs.textBlurb}
                    </div>
                    <br/>
                </ul>
            ))}
        </div>
    );
};

export default Blog;