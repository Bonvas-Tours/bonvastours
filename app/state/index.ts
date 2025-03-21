import { atom } from "jotai";
import { getDestinations } from "../(root)/actions/packages";

export type Destinations = Awaited<ReturnType<typeof getDestinations>> | null;

export const packageDestinationsAtom = atom<Destinations>();
