import React from 'react';
import { Link } from 'react-router-dom';

export const Courses = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id} className="course-block">
          <div className="top-block">
            <h3>{course.title}</h3>
            <img src={course.image} alt="" />
          </div>
          <div className="month">
            <b>{course.month} месяцев</b>
            <Link to={`/course/${course.id}`}>
              <img src="/src/images/arrow-right.svg" alt="" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
