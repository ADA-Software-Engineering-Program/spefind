import React from "react";
import "./blog.css";
import BlogCard from "./BlogCard";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import img1 from "./images/Image-1.png";
import img2 from "./images/Image-2.png";
import img3 from "./images/Image-3.png";
import img4 from "./images/Image-4.png";
import img5 from "./images/Image-5.png";
import img6 from "./images/Image-6.png";
import img7 from "./images/Image-7.png";
import img8 from "./images/Image-8.png";
import img0 from "./images/Image-0.png";
import AppLayout from "../../../layout/AppLayout";

const Blog = () => {
  const Data = [
    {
      id: 1,
      cardImage: img0,
      title: "How to live a mindful life",
      author: "Alade Oluwaseyi",
      date: "Oct 28, 2022",
      cardText:
        "Life has its way of creeping unto us constantly. How do we manage the stresses of life....",
      buttonFirst: "Productivity",
      buttonSecond: "Lifestyle",
    },
    {
      id: 2,
      cardImage: img1,
      title: "Gut health",
      author: "Isioma Joshua",
      date: "Dec 24, 2021",
      cardText:
        "An overlooked but important part of the body's general health; the gut. A lot of us....",
      buttonFirst: "Health",
    },
    {
      id: 3,
      cardImage: img2,
      title: "Motivate yourself to success",
      author: "Chizoba Miracle",
      date: "Jul 10, 2022",
      cardText:
        "Success is attainable by everyone. A lot of times, we wait for external sources of  motivation to be....",
      buttonFirst: "Productivity",
      buttonSecond: "Lifestyle",
    },
    {
      id: 4,
      cardImage: img3,
      title: "How education can significantly reduce crime",
      author: "Simisola David",
      date: "Jan. 12, 2023",
      cardText:
        "Success is attainable by everyone. A lot of times, we wait for external sources of  motivation to be....",
      buttonFirst: "Social",
      buttonSecond: "Education",
    },
    {
      id: 5,
      cardImage: img4,
      title: "The future of tech",
      author: "Damilola Adeniyan",
      date: "Jan. 16, 2021",
      cardText:
        "An overlooked but important part of the body's general health; the gut. A lot of us....",
      buttonFirst: "Health",
    },
    {
      id: 6,
      cardImage: img5,
      title: "How to find remote jobs",
      author: "Adedayo Kayode",
      date: "Feb. 25, 2022",
      cardText:
        "Life has its way of creeping unto us constantly. How do we manage the stresses of life....",
      buttonFirst: "Career",
    },
    {
      id: 7,
      cardImage: img6,
      title: "Diversity & Inclusion",
      author: "Aminu Saheed",
      date: "Aug. 18, 2022",
      cardText:
        "Life has its way of creeping unto us constantly. How do we manage the stresses of life....",
      buttonFirst: "Social",
      buttonSecond: "Lifestyle",
    },
    {
      id: 8,
      cardImage: img7,
      title: "Future of commercial space flight",
      author: "Rasheedah Clare",
      date: "Jul. 21, 2020",
      cardText:
        "Success is attainable by everyone. A lot of times, we wait for external sources of  motivation to be....",
      buttonFirst: "Technology",
    },
    {
      id: 9,
      cardImage: img8,
      title: "Limiting Screen Time",
      author: "Habiba Jamiu",
      date: "Mar. 15, 2022",
      cardText:
        "An overlooked but important part of the body's general health; the gut. A lot of us....",
      buttonFirst: "Health",
    },
  ];
  return (
    <AppLayout>
      <div className="container">
          <main className="blog">
            <div className="text-center">
              <p className="blog-quote">
                <q>
                  The liberty of speaking and writing guards our other liberties.
                </q>
                <cite className="d-block">-Thomas Jefferson</cite>
              </p>
              <h1 className="blog-title"> Our Blog</h1>
            </div>
            <Nav
              variant="tabs"
              defaultActiveKey="#first"
              className="justify-content-between align-items-center"
            >
              <Nav.Item>
                <Nav.Link href="#first" className="blogLink">All</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Health" className="blogLink">Health</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Lifestyle" className="blogLink">Lifestyle</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Technology" className="blogLink">Technology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Leadership" className="blogLink">Leadership</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Finance" className="blogLink">Finance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Art" className="blogLink">Art</Nav.Link>
              </Nav.Item>
              <Link to="#">
                <MdKeyboardArrowRight />
              </Link>
            </Nav>
            {/* <nav>
              <ul className="blog-nav d-flex justify-content-between">
                <li className="text-decoration-none">All</li>
                <li className="text-decoration-none">Health</li>
                <li className="text-decoration-none">Lifestyle</li>
                <li className="text-decoration-none">Technology</li>
                <li className="text-decoration-none">Leadership</li>
                <li className="text-decoration-none">Finance</li>
                <li className="text-decoration-none">Art</li>
                <MdKeyboardArrowRight />
              </ul>
            </nav> */}
            <div className="row main-row">
              {Data.map((item) => {
                return (
                  <BlogCard
                    key={item.id}
                    title={item.title}
                    cardImage={item.cardImage}
                    author={item.author}
                    date={item.date}
                    cardText={item.cardText}
                    buttonFirst={item.buttonFirst}
                    buttonSecond={item.buttonSecond}
                  />
                );
              })}
            </div>
            <div>
              <Nav
                variant="tabs"
                defaultActiveKey="#first"
                className="justify-content-between align-items-center"
              >
                <Link to="#">
                  <MdKeyboardArrowLeft />
                </Link>
                <Nav.Item>
                  <Nav.Link href="#first" className="blogLink">1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Health" className="blogLink">2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Lifestyle" className="blogLink">3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Technology" className="blogLink">4</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Leadership" className="blogLink">5</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Finance" className="blogLink">6</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#Art" className="blogLink">7</Nav.Link>
                </Nav.Item>
                <Link to="#">
                  <MdKeyboardArrowRight />
                </Link>
              </Nav>
            </div>
          </main>
      </div>
    </AppLayout>
  );
};

export default Blog;
