import { LitElement, html, css } from "lit-element";

class MyElement extends LitElement {
  static get properties() {
    return {
      myBool: { type: Boolean },
    };
  }
  static get styles() {
    return css`
      div{
        height:100px;
        width:100px;
        border:1px solid black;
      }
      .red {
        background-color:red;
      }
      .blue {
        background-color: blue;
      }
    `;
  }
  constructor() {
    super();
    this.color='red';
    this.myBool = true;
    this.addEventListener("change-color", (e) => {
      this.myBool = e.detail;
    });
    this.changeText();
  }
  render() {
    return html` 
      <div class=${this.color}> 
      Im changing
      </div>
      <div class=${this.color}> 
      Im changing
      </div>
    `;
  }

  changeText() {
    setInterval(() => {
      let change = new CustomEvent("change-color", {
        detail: !this.myBool,
      });
      this.dispatchEvent(change);
      this.myBool ? this.color='blue': this.color="red";
    }, 1000);
  }
  
}
customElements.define("my-element", MyElement);
