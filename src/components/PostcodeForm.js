import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import services from "../services/requests";

const postcodeTest = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))\s?[0-9][A-Za-z]{2})$/;

const FormWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.style.top};
  left: 50%;
  font-size: ${(props) => props.style.fontSize};
  transform: translate(-50%);
  transition: 1s;
`;

const SubmitBtn = styled.button`
  border: none;
  background-color: #85d018;
  color: #fff;
  padding: 0.3em 0.5em;
  cursor: pointer;
  border-radius: 0 35px 35px 0;
  font-size: 0.8em;
`;

const PostcodeInput = styled.input`
  border: none;
  padding: 0.6rem 1em;
  font-size: 1.1em;
  border-radius: 35px 0 0 35px;
  width: 6.5em;
  color: #5c5c5c;
  caret-color: #8f8f8f;
`;

const Error = styled.div`
  font-size: 0.6em;
  text-align: center;
  margin-top: 0.5rem;
`;

const PostcodeForm = ({ setLocationData, setSubmitted }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [postcode, setPostcode] = useState("");
  const [formStyle, setFormStyle] = useState({
    top: "220px",
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
      if (!postcodeTest.test(postcode)) {
        throw "Please enter a full, valid UK postcode";
      }

      const data = await services.fetchLocationData(postcode);

      setError("");
      setFormStyle({
        top: "40px",
        fontSize: "1.2rem",
        width: "150px",
      });
      setLocationData(data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(err);
      setTimeout(() => setError(""), 4000);
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
      {error && (
        <Error>
          <i class="fas fa-exclamation-triangle"></i> <span>{error}</span>
        </Error>
      )}
    </FormWrapper>
  );
};

export default PostcodeForm;
