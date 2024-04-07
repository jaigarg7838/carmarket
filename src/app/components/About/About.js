import React from 'react'
import { Card, Grid, Text, Button, Row,Col } from "@nextui-org/react";


export default function About() {
  return (
    <div className="container" id='About'> 
      <div className = 'about'>
      
    <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          Your budget your choice our recommendation
        </Text>
        <Text h3 color="white">
          Explore the world&apos;s of car with us
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://wallpapercave.com/wp/wp5201595.jpg"
        
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
              <Card.Image
                src="https://nextui.org/images/breathing-app-icon.jpeg"
                css={{ bg: "black", br: "50%" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
            </Col>
            <Col>
              <Text color="#d1d1d1" size={12}>
                Car Market
              </Text>
              <Text color="#d1d1d1" size={12}>
                Don&apos;t worry when we are here
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          
        </Col>
      </Row>
    </Card.Footer>
  </Card>
        </div>
    </div>
  )
}



