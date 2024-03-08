import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Card, Button } from 'react-bootstrap';

const HealthBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendedBlogs, setRecommendedBlogs] = useState([
    { id: 1, title: '10 Healthy Habits for a Better Life', liked: false },
    { id: 2, title: 'The Importance of Regular Exercise', liked: false },
    { id: 3, title: 'Nutrition Tips for a Balanced Diet', liked: false },
  ]);

  const handleLike = (blogId) => {
    setRecommendedBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog.id === blogId ? { ...blog, liked: !blog.liked } : blog
      )
    );
  };

  const filteredBlogs = recommendedBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mb-4">
          <h2>Explore Health Blogs</h2>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search for blogs..."
              aria-label="Search for blogs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>

          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="mb-3">
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Button
                  variant={blog.liked ? 'success' : 'outline-secondary'}
                  onClick={() => handleLike(blog.id)}
                >
                  {blog.liked ? 'Liked' : 'Like'}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>

        <Col md={4}>
          <h2>Recommended Blogs</h2>
          {recommendedBlogs.map((blog) => (
            <Card key={blog.id} className="mb-3">
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Button
                  variant={blog.liked ? 'success' : 'outline-secondary'}
                  onClick={() => handleLike(blog.id)}
                >
                  {blog.liked ? 'Liked' : 'Like'}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default HealthBlog;
