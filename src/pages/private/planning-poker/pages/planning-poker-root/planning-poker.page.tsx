import { Breadcrumbs } from "@/pages/private/@components/breadcrumbs/breadcrumbs.component";
import { Container } from "@/pages/private/@components/container/container.component";
import { Header } from "@/pages/private/@components/header/header.component";
import { CreateRoomDialog } from "./components/create-room-dialog/create-room-dialog.component";
import { RoomsList } from "./components/rooms-list/rooms-list.component";

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

      <Container>
        <h2 className="my-4">Planning Poker Page</h2>

        <div className="flex flex-col gap-4 items-start">
          <div className="w-full min-h-[300px] flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <h3>Salas ativas</h3>

              <CreateRoomDialog />
            </div>

            <RoomsList />
          </div>
        </div>
      </Container>
    </>
  );
}
