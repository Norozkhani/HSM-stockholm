import Project1 from "../Assets/HSM-Cover1.png";
import Project2 from "../Assets/HSM-Cover2.png";
import Project3 from "../Assets/HSM-Cover3.png";
import Project4 from "../Assets/HSM-Cover4.png";
import Footer from "./Footer";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;

const cardStyle = {
  width: "75%",
  margin: " auto",
};

const projectContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
};

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      finished: true,
      description: "This is the description",
      image: Project1,
    },
    {
      title: "Project 2",
      finished: false,
      description: "This is the description",
      image: Project2,
    },
    {
      title: "Project 3",
      finished: false,
      description: "This is the description",
      image: Project3,
    },
    {
      title: "Project 4",
      finished: false,
      description: "This is the description",
      image: Project4,
    },
  ];

  return (
    <div>
      <div className="p-8 bg-stone-200 ">
        {projects.map((project, index) => (
          <Card
            className="m-4"
            key={index}
            cover={
              <img
                alt="project picture"
                src={project.image}
                style={cardStyle}
              />
            }
          >
            <div style={projectContainerStyle}>
              <Meta title={project.title} description={project.description} />
              {project.finished ? (
                <span>Status: Finished</span>
              ) : (
                <span>Status: In Progress</span>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
}
