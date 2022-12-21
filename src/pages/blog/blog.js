import React from 'react';
import {BlogsFound} from "./blogFetcher/blogFetch";
import './blogStyling.css';
import {Card} from "react-bootstrap";

const Blog = () => {
    return (
        <div>
            {BlogsFound.map(blogs => (
                <Card className="blog-elements" key={blogs.id}>
                    <Card.Title className="blog-title">
                        <div>
                            {blogs.title}
                        </div>
                    </Card.Title>
                    <Card.Body className="blog-content">
                        <div>
                            {blogs.textBlurb}
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Blog;