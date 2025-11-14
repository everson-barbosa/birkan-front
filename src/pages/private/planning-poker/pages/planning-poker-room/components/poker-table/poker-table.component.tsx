interface Player {
  readonly name: string;
  readonly id: string;
  readonly isOwner: boolean;
}

interface PokerTableProps {
  readonly players: Player[];
}

const ONWER_IMAGE_SOURCE =
  "https://cdn-icons-png.flaticon.com/512/2122/2122674.png";
const PLAYER_IMAGE_SOURCE =
  "https://cdn-icons-png.flaticon.com/512/5093/5093951.png";

export function PokerTable({ players }: PokerTableProps) {
  return (
    <div>
      <div className="flex flex-row gap-4">
        {players.map((player) => (
          <div>
            <img
              className="w-20 h-20"
              src={player.isOwner ? ONWER_IMAGE_SOURCE : PLAYER_IMAGE_SOURCE}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
