import { useEffect, useState } from "react";
import { Room } from "../../../types/room";
import { RequestStatus } from "@/core/enums/request-status";
import { useCurrentUser } from "@/contexts/current-user/hooks/use-current-user.hook";
import { useParams } from "react-router";
import { usePlanningPoker } from "../../../contexts/planning-poker.context";

export function usePlanningPokerRoom() {
  const [status, setStatus] = useState<RequestStatus>(RequestStatus.IDLE);
  const [room, setRoom] = useState<Room | null>(null);
  const { roomId } = useParams();
  const { user } = useCurrentUser();
  const { socket } = usePlanningPoker();

  useEffect(() => {
    socket.emit(
      "room:join",
      {
        roomId,
        player: {
          id: user.id,
          name: user.name,
        },
      },
      (data: Room) => {
        setRoom(data);

        setStatus(RequestStatus.SUCCESS);
      }
    );

    socket.on("room:joined", (data: any) => {
      setRoom((prev) => {
        if (!prev) return null;

        return {
          ...prev,
          players: [...prev.players, data],
        };
      });
    });

    return () => {
      socket.off("room:joined");
    };
  }, []);

  return { room, status };
}
