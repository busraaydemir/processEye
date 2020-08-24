import { Component, Input, Output } from 'rete';

import { imageSocket } from '../../sockets';
import { ImageViewerControl } from './image-viewer.control';

export class ImageViewerComponent extends Component {
  constructor() {
    super('Image View');
  }

  async builder(node) {
    const input1 = new Input('base64', 'Image', imageSocket);
    node.addInput(input1).addControl(new ImageViewerControl(this.editor, 'preview', false));
  }

  worker(node, inputs, outputs) {
    const data = inputs['base64'].length ? inputs['base64'][0] : node.data.debug;
    // console.log("n1" + data);
    const ctrlr = <ImageViewerControl>this.editor.nodes.find(n => n.id === node.id).controls.get('preview');
    ctrlr.setValue(data);
  }

  created(node) {
    console.log('created', node);
  }

  destroyed(node) {
    console.log('destroyed', node);
  }
}
