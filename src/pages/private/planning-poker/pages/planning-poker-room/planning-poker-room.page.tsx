import { Breadcrumbs } from "@/pages/private/@components/breadcrumbs/breadcrumbs.component";
import { Container } from "@/pages/private/@components/container/container.component";
import { Header } from "@/pages/private/@components/header/header.component";
import { usePlanningPokerRoom } from "./hooks/use-planning-poker-room.hook";
import { PokerTable } from "./components/poker-table/poker-table.component";

export default function PlanningPokerRoomPage() {
  const { room } = usePlanningPokerRoom();
  const currentPathText = room?.title ?? "Loading...";

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
              link: "/planning-poker",
            },
            {
              text: currentPathText,
            },
          ]}
        />
      </Header>

      <Container>
        {room?.players && <PokerTable players={room.players} />}
      </Container>
    </>
  );
}
