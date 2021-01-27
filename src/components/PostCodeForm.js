import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import services from "../services/requests";

const FormWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.style.top};
  left: 50%;
  font-size: ${(props) => props.style.fontSize};
  width: ${(props) => props.style.width};
  transform: translate(-50%);
  transition: 1s;
`;

const SubmitBtn = styled.button`
  border: none;
  background-color: #00abff;
  color: #fff;
  padding: 0.3em 0.5em;
  cursor: pointer;
  border-radius: 0 35px 35px 0;
  font-size: 0.8em;
`;

const PostcodeInput = styled.input`
  border-radius: 0;
  border: none;
  padding: 0.6rem 1.6rem;
  font-size: 1.1em;
  border-radius: 35px 0 0 35px;
  width: 100%;
  color: #5c5c5c;
`;

const PostCodeForm = ({ setLocationData, setSubmitted }) => {
  const inputRef = useRef(null);
  const [postcode, setPostcode] = useState("");
  const [formStyle, setFormStyle] = useState({
    top: "40%",
    fontSize: "1.8rem",
    width: "200px",
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setPostcode(e.target.value.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await services.fetchLocationData(postcode);

      setFormStyle({ top: "40px", fontSize: "1.5rem", width: "150px" });
      setLocationData(data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormWrapper style={formStyle}>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        onSubmit={(e) => handleSubmit(e)}
        autoComplete="off"
      >
        <PostcodeInput
          ref={inputRef}
          aria-label="post-code"
          type="text"
          name="postCode"
          placeholder="Postcode"
          value={postcode}
          onChange={(e) => handleChange(e)}
        ></PostcodeInput>
        <SubmitBtn>Submit</SubmitBtn>
      </form>
    </FormWrapper>
  );
};

export default PostCodeForm;
