import React, { Fragment, useEffect, useState } from "react";
import { ContactMeContainer, StyledForm } from "./style";
import SkillCard from "../../components/SkillCard";
import ReviewCard from "../../components/ReviewCard";
import profile from "../../assets/webp/profile-picture.webp";
import { reviews, skills } from "../../constant";
import { Button } from "../../components/Button";

const ContactMe = () => {
  return (
    <ContactMeContainer>
      <h1>Let's Talk!</h1>
      <p>
        If you are interested in my work or have any concerns, do not hesitate
        to write me!
      </p>
      <StyledForm>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" />
        <label for="email">Email</label>
        <input type="text" name="email" placeholder="Youremail@gmail.com" />
        <label for="message">Message</label>
        <textarea name="message" placeholder="Hey..." rows="8" cols="50" />
        <Button type="primary" width="100%" disabled>
          Send
        </Button>
      </StyledForm>
    </ContactMeContainer>
  );
};

export default ContactMe;
