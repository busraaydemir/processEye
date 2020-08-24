import { Component, Input, Output } from 'rete';

import { imageSocket } from '../../sockets';
import { ImageUploadControl } from './image-upload.control';

export class ImageUploadComponent extends Component {
  constructor() {
    super('Image Upload');
  }

  async builder(node) {
    const outPut1 = new Output('base64', 'Image', imageSocket);
    node.addControl(new ImageUploadControl(this.editor, 'base64')).addOutput(outPut1);

  }

  worker(node, inputs, outputs) {
    outputs['base64'] = node.data.base64;
  }

  created(node) {
    console.log('created', node);
  }

  destroyed(node) {
    console.log('destroyed', node);
  }
}
