import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MyReteEditorModule } from "./rete/rete.module";
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyReteEditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
