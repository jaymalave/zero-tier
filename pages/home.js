import styles from "../styles/Home.module.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { VideoCard } from "../components/VideoCard";

export default function Home() {
  var foo = [];

  for (var i = 1; i <= 10; i++) {
    foo.push(i);
  }

  return (
    <div className={styles.homeContainer}>
      <h1>Home page</h1>
      <SimpleGrid columns={3} spacing={15}>
        {foo.map((element) => (
          <VideoCard />
        ))}
      </SimpleGrid>
    </div>
  );
}
