import { Socket } from 'rete';

export const numSocket = new Socket('Number value');
export const imageSocket = new Socket("Image Value");
export const anyTypeSocket = new Socket('Any type');
numSocket.combineWith(anyTypeSocket);
imageSocket.combineWith(anyTypeSocket);
