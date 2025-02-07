import React from 'react'
import Heading from './Heading';
import Card from './Card';
import "../app/Styles/projects.css";

const data =[
    {
        id: 0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an interactive countdown feature.",
        img: "/project-01.jpg",
        tags: ["React", "Node", "CSS", "Typescript",],
    },
    
];

const Projects = () => {
  return (
    <div id='projects' className='projects-container'>
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl projects-grid-md-cols-2 projects-grid-lg-3 projects-center'>
        {data.map((el) => (
          <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects;
