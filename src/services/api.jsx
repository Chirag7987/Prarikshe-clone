import axios from 'axios';
import { coursesData, testimonialsData, faqsData, statsData } from '../data/staticData';

const API_URL = import.meta.env.VITE_API_URL || null;
const isProduction = !API_URL || API_URL === 'http://localhost:5000';

// Use static data in production or when API is unavailable
export const fetchCourses = async () => {
  try {
    if (!API_URL || isProduction) {
      // Return static data in production
      return new Promise((resolve) => {
        setTimeout(() => resolve(coursesData), 100);
      });
    }
    const response = await axios.get(`${API_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching courses, using static data:', error);
    return coursesData;
  }
};

export const fetchCourseById = async (id) => {
  try {
    if (!API_URL || isProduction) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const course = coursesData.find(c => c.id === parseInt(id));
          resolve(course);
        }, 100);
      });
    }
    const response = await axios.get(`${API_URL}/courses/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching course, using static data:', error);
    return coursesData.find(c => c.id === parseInt(id));
  }
};

export const fetchTestimonials = async () => {
  try {
    if (!API_URL || isProduction) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(testimonialsData), 100);
      });
    }
    const response = await axios.get(`${API_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials, using static data:', error);
    return testimonialsData;
  }
};

export const fetchFAQs = async () => {
  try {
    if (!API_URL || isProduction) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(faqsData), 100);
      });
    }
    const response = await axios.get(`${API_URL}/faqs`);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQs, using static data:', error);
    return faqsData;
  }
};

export const fetchStats = async () => {
  try {
    if (!API_URL || isProduction) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(statsData), 100);
      });
    }
    const response = await axios.get(`${API_URL}/stats`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stats, using static data:', error);
    return statsData;
  }
};
