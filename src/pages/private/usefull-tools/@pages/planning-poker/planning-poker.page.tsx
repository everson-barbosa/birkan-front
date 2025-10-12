import { Breadcrumbs } from "@/pages/private/@components/breadcrumbs/breadcrumbs.component";
import { Container } from "@/pages/private/@components/container/container.component";
import { Header } from "@/pages/private/@components/header/header.component";

export default function PlanningPokerPage() {
  return (
    <>
      <Header>
        <Breadcrumbs
          breadcrumbs={[
            {
              text: "Usefull tools",
              link: "/usefull-tools",
            },
            {
              text: "Planning poker",
            },
          ]}
        />
      </Header>

      <Container>Planning Poker Page</Container>
    </>
  );
}
