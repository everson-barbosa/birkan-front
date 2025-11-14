import { Button } from "@/components/ui/button/button.component";
import { Checkbox } from "@/components/ui/checkbox/checkbox.component";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog/dialog.component";
import { Input } from "@/components/ui/input/input.component";
import { Label } from "@/components/ui/label/label.component";
import { ChangeEvent, useState } from "react";
import { useCurrentUser } from "@/contexts/current-user/hooks/use-current-user.hook";
import { usePlanningPoker } from "../../../../contexts/planning-poker.context";

export function CreateRoomDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const { user } = useCurrentUser();
  const { socket } = usePlanningPoker();

  const toggleIsPublic = () => setIsPublic((prev) => !prev);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleChangeRoomName = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomName(event.target.value);
  };

  const handleCreateRoom = async () => {
    socket.emit("room:create", {
      title: roomName,
      isPublic,
      password: null,
      author: {
        id: user.id,
        name: user.name,
      },
    });

    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen}>
      <DialogTrigger asChild onClick={handleOpenDialog}>
        <Button>Create new room</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="room-name">What will be the room name</Label>
              <Input
                type="text"
                id="room-name"
                value={roomName}
                onChange={handleChangeRoomName}
              />
            </div>

            <div className="flex flex-row items-start gap-2">
              <Checkbox
                id="room-is-public"
                checked={isPublic}
                onClick={toggleIsPublic}
              />
              <Label htmlFor="room-is-public">Should be public?</Label>
            </div>

            <div className="flex flex-row items-center justify-end gap-2">
              <DialogClose asChild onClick={handleCloseDialog}>
                <Button variant="ghost">Cancel</Button>
              </DialogClose>
              <Button variant="default" onClick={handleCreateRoom}>
                Create room
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
