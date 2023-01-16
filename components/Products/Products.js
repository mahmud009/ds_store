import { useProducts } from "@/context/ProductCtx";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { SingleProduct } from "./SingleProduct";

export function Products() {
  const { products } = useProducts();

  return (
    <Container maxW={"1280px"}>
      <Box p="50">
        <VStack justify={"center"}>
          <Text
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "3xl", md: "3xl" }}
            lineHeight={"110%"}
          >
            Our Products
          </Text>
          <Text color={"gray.500"} textAlign="center">
            Monetize your content by charging your most.
          </Text>
        </VStack>
        <Box mt="30px">
          <Grid templateColumns={"1fr 1fr 1fr"} w="full" gap={8}>
            {products.map((product) => (
              <GridItem key={product.id}>
                <SingleProduct
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  rating={product.rating}
                  numReviews={product.numReviews}
                  variant={product.variant}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
