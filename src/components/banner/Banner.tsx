import React from "react";

import { MondayItemCreator } from "../../types/esti.types";
import { BannerContainer } from "./style";

interface BannerProps {
  creator: MondayItemCreator;
}

export const CustomBanner = ({ creator }: BannerProps) => {
  return (
    <BannerContainer>
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
    </BannerContainer>
  );
};
