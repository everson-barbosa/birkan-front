import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { io, Socket } from "socket.io-client";

interface PlanningPokerContextProps {
  readonly socket: Socket;
}

export const PlanningPokerContext = createContext(
  {} as PlanningPokerContextProps
);

interface PlanningPokerProviderProps {
  readonly children: ReactNode;
}

export function PlanningPokerProvider({
  children,
}: PlanningPokerProviderProps) {
  const socket = useMemo(
    () =>
      io("http://localhost:3000", {
        withCredentials: true,
      }),
    []
  );

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <PlanningPokerContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </PlanningPokerContext.Provider>
  );
}

export const usePlanningPoker = () => useContext(PlanningPokerContext);
