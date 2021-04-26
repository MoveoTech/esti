import React from "react";
import { StoryStateRow, StoryStateColumn, Banner } from "monday-ui-react-core";
import styled from "styled-components";

export const CustomBanner = (props) => {
    return (
        <Container>
            <Banner
                id="Sandbox"
                title={props.creator.name}
                subtitle={props.creator.email}
                imageSrc={props.creator.photo}
                imagePosition={Banner.imagePosition.LEFT}
            />
        </Container>
    );
}
const Container = styled("div")`
    position: absolute;
    width: fit-content;
    min-width: 100px;
    display: flex;
    justify-content: center;
    bottom: 27px;
    left: 16px;

    .banner .banner--content {
        padding: 20px;
        grid-column-gap: 20px;
        background-color: white;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
    }

    .banner .banner--content .banner--title {
        font-size: 18px;
        height: auto;
    }

    .banner .banner--content .banner--subtitle {
        font-size: 14px;
        height: auto;
    }

    .banner .banner--content .banner--image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
`;