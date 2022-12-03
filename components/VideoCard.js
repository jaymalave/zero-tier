import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

export const VideoCard = () => {
  return (
    <Card width={"22.5vw"} height="fit-content" margin={"15px"}>
      <CardBody padding={"0"}>
        <Image
          src="https://source.unsplash.com/featured/300x202"
          alt="Green double couch with wooden legs"
          borderRadius="sm"
          width={"100%"}
          margin="0"
        />
        <Stack mt="6" spacing="3" mx="5">
          <Heading size="md">A demo video</Heading>

          <Text color="black.900" fontSize="xl">
            5 MATIC
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="primary"
            colorScheme="white"
            backgroundColor={"blackAlpha.900"}
            color="white"
          >
            Watch Now
          </Button>
          <Button variant="ghost" colorScheme="black">
            Add to watchlist
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
