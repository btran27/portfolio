import { Container } from "@/components/container";
import { TopBar } from "@/components/top-bar";

export default function Gallery() {
  return (
    <div className="pt-16">
      <TopBar />
      <Container id="gallery">
        <p>Food pics or whatever</p>
      </Container>
    </div>
  );
}
