import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const fetchFAQs = async () => {
  try {
    const response = await axios.get(`${API_URL}/faqs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    throw error;
  }
};

export const fetchStats = async () => {
  try {
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};
