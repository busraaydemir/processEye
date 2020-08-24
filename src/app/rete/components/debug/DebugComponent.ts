import { Component, Input } from 'rete';
import {anyTypeSocket, imageSocket} from '../sockets';
import { DebugControl } from '../controls/DebugControl';

export class DebugComponent extends Component {
    constructor() {
        super('Debug');
    }

    async builder(node) {
        const debugInput = new Input('debug', 'Debug',anyTypeSocket);
        node.addInput(debugInput).addControl(new DebugControl(this.editor, 'preview', false))
    }

    worker(node, inputs) {
        const data = inputs['debug'].length ? inputs['debug'][0] : node.data.debug;
        console.log("n1"+data);
        const ctrl = <DebugControl> this.editor.nodes.find(n => n.id === node.id).controls.get('preview');
        ctrl.setValue(data);

    }

    created(node) {
        console.log('created', node);
    }

    destroyed(node) {
        console.log('destroyed', node);
    }
}
