import { Component, Input, Output } from 'rete';
import { imageSocket, numSocket } from '../sockets';
import { ImageRoiControl } from '../controls/image-roi/image-roi.component';

export class ImageRoiComponent extends Component {
    constructor() {
        super('Image Roi');
    }

    async builder(node) {
        const input1 = new Input('base64', 'Image', imageSocket);
        node.addInput(input1).addControl(new ImageRoiControl(this.editor, 'preview', false));

        const outPut1 = new Output('base64', 'Image', imageSocket);
        node.addOutput(outPut1);

        const outPut2 = new Output('number', 'Number', numSocket);
        node.addOutput(outPut2);
    }

    worker(node, inputs, outputs) {
        const data = inputs['base64'].length ? inputs['base64'][0] : node.data.debug;
        const ctrlr = <ImageRoiControl>this.editor.nodes.find(n => n.id === node.id).controls.get('preview');
        ctrlr.setValue(data);
        // const img: HTMLElement = document.createElement('img');
        // img.setAttribute('src', inputs['base64'][0]);
        // img.setAttribute('style', "height:149px;width:280px;");


        outputs['base64'] = node.data.base64;
        outputs['nummber'] = node.data.number;
    }

    created(node) {
        console.log('created', node);
    }

    destroyed(node) {
        console.log('destroyed', node);
    }
}
