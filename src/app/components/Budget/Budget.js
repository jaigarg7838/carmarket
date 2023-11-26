'use client'
import React from 'react'
import { Grid,Card, Col, Text,Button} from "@nextui-org/react";
import { useRouter } from 'next/navigation';


export default function Budget() {
  const router = useRouter();
  const Navigation=(name)=>{
      router.push(name);
  }

    const list = [
        {
          title: "Under 10 lakhs",
          img: "https://images.news18.com/ibnlive/uploads/2022/02/maruti-suzuki-baleno-4.jpg",
          price: "$5.50",
          navigation:"/components/undertenlakh"
        },
        {
          title: "Under 20 lakhs",
          img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Hector/9551/1677917710577/front-left-side-47.jpg",
          price: "$3.00",
          navigation:"/components/undertwentylakh"
        },
        {
            title: "Under 30 lakhs",
            img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Hycross/9402/1669374825118/front-left-side-47.jpg",
            price: "$3.00",
            navigation:"/components/underthirtylakh"
          },
          {
            title: "Under 50 lakhs",
            img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner-Legender/10229/1686033870927/front-left-side-47.jpg",
            price: "$3.00",
            navigation:"/components/underfiftylakh"
          },
        
      ];
  return (
    <div className='container Budget' id='Budget'>
       
        {/* <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={6}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={6}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={6}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={6}>
        <Card1 />
      </Grid>
    
    </Grid.Container>
 */}


    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={12} sm={6} key={index}>
          <Card isPressable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          {item.title}
        </Text>
      </Col>
    </Card.Header>
    
              <Card.Image
                src={item.img}
                objectFit="cover"
                width="100%"
                height={340}
                alt={item.title}
              />
              <Card.Body css={{ position: "absolute", zIndex: 1, bottom: 5  }}>
              <Button onClick={()=>Navigation(item.navigation)} shadow color="gradient" auto className=''>
          Explore More 
        </Button>
              </Card.Body>
          
          
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </div>
  )
}



