import React, { useState } from "react";
import styled from "styled-components";
import services from "../services/requests";

const SubmitBtn = styled.button`
  border: none;
  background-color: #00abff;
  color: #fff;
  font-size: 0.7em;
`;

const PostcodeInput = styled.input`
  border-radius: 0;
  border: none;
  padding: 0.6rem;
  font-size: 0.8em;
`;

const PostCodeForm = ({ setLocationData, setSubmitted }) => {
  const [postcode, setPostcode] = useState("");

  const handleChange = (e) => {
    setPostcode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await services.fetchLocationData(postcode);

    setLocationData(data);
    setSubmitted(true);
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.4rem",
        }}
        onSubmit={(e) => handleSubmit(e)}
      >
        <PostcodeInput
          aria-label="post-code"
          type="text"
          name="postCode"
          placeholder="Postcode"
          onChange={(e) => handleChange(e)}
        ></PostcodeInput>
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </div>
  );
};

export default PostCodeForm;
