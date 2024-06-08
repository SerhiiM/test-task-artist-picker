import { createContext } from "react";
import { GlobalState } from "./Types.ts";

export const Context = createContext<GlobalState | undefined>(undefined);
