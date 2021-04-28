import React from "react";
import styled from "styled-components";

export const CustomBanner = ({ creator }) => {
  return (
    <Container>
      <div className="banner">
        <img
          src={
            creator
              ? creator.photo
              : "https://cdn7.monday.com/icons/dapulse-person-column.svg"
          }
          alt="user"
        />
        <div className="info">
          <span className="name">{creator ? creator.name : "Unknown"}</span>
          <span className="email">{creator ? creator.email : null}</span>
        </div>
      </div>
    </Container>
  );
};
const Container = styled("div")`
  position: absolute;
  width: fit-content;
  min-width: 100px;
  display: flex;
  justify-content: center;
  bottom: 27px;

  .banner {
    padding: 20px;
    grid-column-gap: 20px;
    background-color: white;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .info {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.2rem;
        height: auto;
      }

      .email {
        margin-top: 5px;
        font-size: 0.8rem;
        height: auto;
      }
    }
  }
`;
