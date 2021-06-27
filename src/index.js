import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
  static get properties(){
    return{
     prop1:{type:String,reflect:true},
     prop2:{type:Number,reflect:true},
     prop3:{type:Boolean,reflect:true},
     prop4:{type:Array,reflect:true},
     prop5:{type:Object,reflect:true}
    }
  }
}
customElements.define("my-element", MyElement);
