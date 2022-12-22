import React from 'react';
import {BlogsFound} from "./blogFetcher/blogFetch";
import './blogStyling.css';
import {Card} from "react-bootstrap";

const Blog = () => {
    return (
        <div className="blog-page">
            {BlogsFound.map(blogs => (
                <Card className="blog-elements" key={blogs.id}>
                    <Card className="blog-title">
                        {blogs.title}
                    </Card>
                    <div className="blog-content">
                        {blogs.textBlurb}
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default Blog;