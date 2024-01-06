import React from "react";
import BannerImageAbout from "../assets/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImageAbout})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          nobis odit temporibus numquam alias possimus beatae amet enim, ipsam
          voluptate. Tenetur dicta a consectetur excepturi? Sapiente tempora
          totam sed illum. Lorem Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae, repellat consequatur tempora adipisci facere
          aut nostrum iure voluptate, maiores ex provident suscipit asperiores
          distinctio aliquam vel totam dignissimos labore in. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Aliquid exercitationem delectus
          voluptas aliquam tempore ad animi voluptatem, tempora facilis tenetur
          voluptates numquam maxime facere recusandae voluptatum ut repellendus
          doloremque nemo. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ratione odio, vero magni expedita nam nemo mollitia pariatur
          quia vitae, placeat dolore molestias nostrum fugiat dolorum, dolorem
          culpa minus adipisci obcaecati. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis quam doloribus ipsum incidunt fuga explicabo
          exercitationem esse, provident blanditiis, enim quibusdam eligendi
          laudantium magni? Reprehenderit corporis doloremque necessitatibus
          fuga vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae perspiciatis necessitatibus cumque quasi. Doloremque neque
          quaerat aliquam eum adipisci illo tempore corrupti placeat, voluptatem
          praesentium asperiores, vel, quidem est voluptas!
        </p>
      </div>
    </div>
  );
}

export default About;
