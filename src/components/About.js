import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h2>How it works</h2>
      <p>
        <b>note: the protein and the fat are calculated in grams.</b> <br />
        First, you need to enter an item in the text area provided (item =
        food). <br />
        Second, you need to enter the specific weight of the item
        <b>in grams</b>. <br />
        if you are not sure how to convert to grams please check out my other
        site
        <a
          href="https://allinoneconverter.netlify.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          All In One Converter
        </a>
        .
        <br />
        Third, in order to calculate the amount of protein, calories and fat in
        the item you need to press the button that says result. <br />
        if you want to save the item you just checked you will need to press the
        add to plate button. <br />
        Each plate session will calculate all the attribute of the item you
        added to the plate.
      </p>
      <h3>About us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi possimus
        corporis optio nulla ea. Tempora optio culpa, ad nesciunt veritatis
        praesentium excepturi assumenda inventore ratione autem vitae dolor
        quasi nam.
      </p>
    </div>
  );
}

export default About;
