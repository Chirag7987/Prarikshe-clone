import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { CartContext } from '../context/CartContext';
import { ToastContext } from '../context/ToastContext';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);

  const handleEnroll = () => {
    if (course.price === 0) {
      showToast(`Successfully enrolled in ${course.name}! Check your email for access details.`, 'success');
    } else {
      addToCart(course);
      navigate('/payment');
    }
  };

  const handleAddToCart = () => {
    addToCart(course);
    showToast(`${course.name} added to cart!`, 'success');
  };

  return (
    <div className="course-card">
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <div className="course-details">
        <span>Subject: {course.subject}</span>
        <span>Level: {course.level}</span>
        <span>Lectures: {course.lectures}</span>
      </div>
      <div className="course-price">
        {course.price === 0 ? 'Free' : `₹${course.price}`}
      </div>
      <div className="course-actions">
        {course.price === 0 ? (
          <Button onClick={handleEnroll}>Enroll Now</Button>
        ) : (
          <>
            <Button onClick={handleEnroll}>Enroll Now</Button>
            <Button variant="secondary" onClick={handleAddToCart}>Add to Cart</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;