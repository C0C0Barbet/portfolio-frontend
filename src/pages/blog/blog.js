import React from 'react';
import {BlogsFound} from "./blogFetcher/blogFetch";
import './blogStyling.css';

const Blog = () => {
    return (
        <div className="blog-page">
            {BlogsFound.map(blogs => (
                <section className="blog-elements">
                    <h3 className="blog-title">
                        {blogs.title}
                    </h3>
                    <p className="blog-content">
                        {blogs.textBlurb}
                    </p>
                </section>
            ))}
        </div>
    );
};

export default Blog;