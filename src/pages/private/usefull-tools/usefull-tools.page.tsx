import { Breadcrumbs } from "../@components/breadcrumbs/breadcrumbs.component";
import { Container } from "../@components/container/container.component";
import { Header } from "../@components/header/header.component";
import { ToolCard } from "./components/tool-card/tool-card.component";

export default function UsefullTools() {
  return (
    <>
      <Header>
        <Breadcrumbs breadcrumbs={[{ text: "Usefull tools" }]} />
      </Header>

      <Container>
        <h1 className="text-3xl">Usefull Tools</h1>

        <p className="my-4 text-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="my-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          <ToolCard
            title="Planning Poker"
            icon="planning-poker"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry."
            link={{
              text: "Acessar",
              to: "/planning-poker",
            }}
          />
        </div>
      </Container>
    </>
  );
}
