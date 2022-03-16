"use strict";

//функция-конструктор DomElement со свойствами selector, height, width, bg, fontSize
const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  //метод, который создает элемент на странице в зависимости от условия:
  this.createElement = function () {
    let element;
    let elementClass = this.selector.slice(1);
    //если строка selector начинается с точки, создаем div с классом
    if (this.selector[0] === ".") {
      element = document.createElement("div");
      element.classList.add(elementClass);
      element.innerText = "Hello, world!!!";
      //если строка selector начинается с решетки # то создаем параграф с id
    } else if (this.selector[0] === "#") {
      element = document.createElement("p");
      element.setAttribute("id", elementClass);
      element.innerText = "Привет, мир!!!";
    }

    document.body.append(element);

    //с помощью cssText задал стили
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

//Создал новый объект на основе класса DomElement
const createNewObject1 = new DomElement(".block", 100, 300, "red", 30);
const createNewObject2 = new DomElement("#best", 100, 200, "blue", 30);

//Вызвал его метод чтобы создать элемент на странице
createNewObject1.createElement();
createNewObject2.createElement();
