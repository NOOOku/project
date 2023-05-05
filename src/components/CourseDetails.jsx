import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://6449761bb88a78a8f00886f1.mockapi.io/courses')
      .then((res) => setCourse(res.data));
  }, []);

  const filtered = course.find((c) => c.id == id);

  return (
    <div className="container">
      <div className="details-wrapper">
        <div className="details-info">
          <h1>{filtered?.title}</h1>
          <p>{filtered?.desc}</p>
          <div className="details-month">Срок обучние: {filtered?.month} месяцев</div>
        </div>
        <img src={filtered?.image} alt="" />
      </div>
    </div>
  );
};
