import { Component, Output } from "rete";
import {anyTypeSocket, imageSocket, numSocket} from "../../sockets";
import { NgNumControl } from "./NgTestControl";

export class NumNgComponent extends Component {
    constructor() {
        super("Number");
    }

    builder(node) {
        const out1 = new Output("numb", "NgNumber", numSocket);
        return node.addControl(new NgNumControl(this.editor, "numb")).addOutput(out1);
    }

    worker(node, inputs, outputs) {
        outputs["numb"] = node.data.numb;

    }
}
