"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElement = function () {
    let element;
    let elementClass = this.selector.slice(1);
    if (this.selector[0] === ".") {
      element = document.createElement("div");
      element.classList.add(elementClass);
      element.innerText = "Hello, world!!!";
    } else if (this.selector[0] === "#") {
      element = document.createElement("p");
      element.setAttribute("id", elementClass);
      element.innerText = "Привет, мир!!!";
    }

    document.body.append(element);

    element.style.cssText =
      "height:" +
      this.height +
      "px;" +
      "width:" +
      this.width +
      "px;" +
      "background:" +
      this.bg +
      ";" +
      "font-size:" +
      this.fontSize +
      "px";

    // element.style.height = this.height + "px";
    // element.style.width = this.width + "px";
    // element.style.background = this.bg;
    // element.style.cssText = this.fontSize + "px";

    // return element;
  };
};

const createNewObject1 = new DomElement(".block", 100, 300, "red", 30);
const createNewObject2 = new DomElement("#best", 100, 200, "blue", 30);

createNewObject1.createElement();
createNewObject2.createElement();
