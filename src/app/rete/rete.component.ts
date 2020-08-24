import {
  Component, AfterViewInit,
  OnChanges, ViewChild,
  ElementRef, Input, ViewEncapsulation
} from '@angular/core';

import { NodeEditor, Engine } from 'rete';
import ConnectionPlugin from 'rete-connection-plugin';
import ConnectionPathPlugin from 'rete-connection-path-plugin';
import { AngularRenderPlugin } from "rete-angular-render-plugin";
import ContextMenuPlugin from 'rete-context-menu-plugin';
import AreaPlugin from 'rete-area-plugin';
import HistoryPlugin from 'rete-history-plugin';
import { NumNgComponent } from "./components/ng-test/NgTestComponent";
import { ImageUploadComponent } from "./components/ImageUploadComponent";
import { DebugComponent } from "./components/DebugComponent";
import { ImageViewerComponent } from "./components/image-viewer/ImageViewerComponent";
import { ImageRoiComponent } from './components/ImageRoiComponent';

@Component({
  selector: 'app-rete',
  template: `
    <div class="wrapper">
      <div #nodeEditor class="node-editor"></div>
    </div>
 `,
  styles: [
    `
      .wrapper {
        width: 100%;
        height: 100%;
      }
      .node.selected{
        background-color: #222;
      }
      .socket.number {
        display: inline-block!important;
        cursor: pointer!important;
        border: 1px solid white!important;
        border-radius: 0px!important;
        width: 8px!important;
        height: 8px!important;
        margin: 5px!important;
        vertical-align: middle!important;
        background: #5aec18!important;
        z-index: 2!important;
        transform: rotate(45deg)!important;
      }
      .socket.output {
        margin-right: -4px;
      }
      .socket.input {
        margin-left: -4px;
      }
      .connection {
        overflow: visible!important;
        position: absolute;
        z-index: -1;
        pointer-events: all;
      }
      .connection .main-path {
        stroke-width: 2px;
        stroke: black;
      }`
  ]
})
export class ReteComponent implements AfterViewInit {

  @ViewChild('nodeEditor') el: ElementRef;
  editor = null;

  async ngAfterViewInit() {
    const self = this;

    const container = this.el.nativeElement;
    const components = [new NumNgComponent(), new ImageUploadComponent(), new DebugComponent(), new ImageViewerComponent(),
    new ImageRoiComponent()];
    const editor = new NodeEditor('demo@0.2.0', container);
    editor.use(ConnectionPlugin);
    editor.use(AngularRenderPlugin);

    // editor.use(ContextMenuPlugin);
    editor.use(AreaPlugin, {
      // background: true,
      snap: true,
      scaleExtent: { min: 0.40, max: 1 },
      translateExtent: { width: 700, height: 500 }
    });
    editor.use(HistoryPlugin, { keyboard: true });
    /*
    editor.use(ConnectionPathPlugin, {
      type: ConnectionPathPlugin.LINEAR, // DEFAULT or LINEAR transformer
      transformer: () => ([x1, y1, x2, y2]) => [[x1, y1], [x2, y2]], // optional, custom transformer
      curve: ConnectionPathPlugin.curveBundle, // curve identifier
      options: { vertical: false, curvature: 0.1 }, // optional
      arrow: { color: 'steelblue', marker: 'M-5,-10 L-5,10 L20,0 z' }
    });
*/
    const engine = new Engine('demo@0.2.0');

    components.map(c => {
      editor.register(c);
      engine.register(c);
    });


    const numNg = await components[0].createNode();
    const imageNode = await components[1].createNode();
    const debugNode = await components[2].createNode();
    const imageViewerNode = await components[3].createNode();
    const imageRoiNode = await components[4].createNode();
    numNg.position = [180, 200];
    imageNode.position = [80, 400];
    imageViewerNode.position = [500, 240];
    debugNode.position = [300, 230];
    imageRoiNode.position = [400, 260];
    editor.addNode(numNg);
    editor.addNode(imageNode);
    editor.addNode(debugNode);
    editor.addNode(imageViewerNode);
    editor.addNode(imageRoiNode);
    editor.on(
      [
        "process",
        "nodecreated",
        "noderemoved",
        "connectioncreated",
        "connectionremoved"
      ], async () => {
        console.log("process");
        await engine.abort();
        await engine.process(editor.toJSON());
      }
    );


    editor.view.resize();
    editor.trigger("process");
    AreaPlugin.zoomAt(editor);

  }
}
