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
  constructor(){
    super();
    this.prop1='';
    this.prop2=0;
    this.prop3=false;
    this.prop4=[];
    this.prop5={};
  }

  render() {
    return html`
      <p>prop1 ${this.prop1}</p>
      <p>prop2 ${this.prop2}</p>
      <p>prop3 ${this.prop3}</p>

      <p>prop4: ${this.prop4.map((item, index) =>
        html`<span>[${index}]:${item}&nbsp;</span>`)}
      </p>

      <p>prop5:
        ${Object.keys(this.prop5).map(item =>
          html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
      </p>

      <button @click="${this.changeProperties}">change properties</button>
      <button @click="${this.changeAttributes}">change attributes</button>
    `;
  }
}
customElements.define("my-element", MyElement);
