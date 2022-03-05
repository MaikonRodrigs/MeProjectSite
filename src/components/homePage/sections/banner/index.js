import React from "react";
import ImgPerfil from "@/images/MePictureHomePage.png";
import {
  Row,
  Container,
  RowImg,
  LeftColumn,
  RightColumn,
  RowDescription,
  RowText,
  ColummImg,
} from "./styles";
import { Button } from "@/components/utils/utils";

export const Banner = () => {

  return (
    <>
      <Row>
        <Container>
          <LeftColumn>
            <RowDescription>
              <RowText>
                <p>
                  Hi, <strong>User</strong> my name is Maikon.
                </p>
                <h1>I'm Front End.</h1>
                <span>JavaScript, TypeScript and ReactJS</span>
              </RowText>
              <RowImg>
                <img src={ImgPerfil} alt="" />
              </RowImg>
            </RowDescription>
            <h2>
              I fell in love with Html and CSS in 2012, even though it's not a
              programming language
              {/* <br /> <strong>yeah, we know :|</strong> */}
              <br />
              <br />
              Soon after I know JavaScript and for a few years I spent studying{" "}
              <br />
              and applying it in small projects
              <br /> <br />
              And in 2017 I met <b>ReactJS</b> and since then I'm still in love
              with this Framework
            </h2>
          </LeftColumn>
          <RightColumn>
            <ColummImg>
              <img src={ImgPerfil} alt="" />
            </ColummImg>
          </RightColumn>
        </Container>
        <Button className="button-skills">Now my skills</Button>
      </Row>
    </>
  );
};
