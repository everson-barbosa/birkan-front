import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table.component";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button/button.component";
import { usePlanningPoker } from "../../../../contexts/planning-poker.context";
import { Link } from "react-router";
import { PublicRoom, Room } from "@/pages/private/planning-poker/types/room";

export function RoomsList() {
  const [rooms, setRooms] = useState<PublicRoom[]>([]);
  const { socket } = usePlanningPoker();

  useEffect(() => {
    socket.emit("room:list", null, (data: PublicRoom[]) => {
      setRooms(data);
    });

    socket.on("room:created", (data: PublicRoom) => {
      setRooms((prev) => [data, ...prev]);
    });
  }, [socket]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Privacidade</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Players</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rooms?.map((room) => (
          <TableRow key={room.id}>
            <TableCell className="font-medium">{room.title}</TableCell>
            <TableCell>{room.isPublic ? "Public" : "Private"}</TableCell>
            <TableCell>{room.createdAt}</TableCell>
            <TableCell className="text-right">{room.players.length}</TableCell>
            <TableCell className="text-right">
              <Button asChild>
                <Link to={`/planning-poker/room/${room.id}`}>Entrar</Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
