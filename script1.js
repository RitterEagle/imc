class IMC {
  constructor() {
    this.heightInput = document.getElementById("height");
    this.weightInput = document.getElementById("weight");
    this.resultArea = document.getElementById("text_area");
    this.calculateButton = document.querySelector("button");

    this.calculateButton.addEventListener("click", this.calculate.bind(this));

    this.loadSessionData();
  }

  calculate() {
    var height = this.heightInput.value / 100;
    var weight = this.weightInput.value;

    var imc = weight / (height ** 2);
    var text = "";

    if (imc < 18.5) {
      text = "Você está magro";
    } else if (imc < 24.9) {
      text = "Você está normal";
    } else if (imc < 29.9) {
      text = "Você está com sobrepeso";
    } else if (imc < 39.9) {
      text = "Você está com obesidade";
    } else if (imc > 39.9) {
      text = "Você está com obesidade mórbida";
    }

    this.displayResult(text);
    this.saveSessionData(height, weight, text);
  }

  displayResult(text) {
    this.resultArea.value = text;
  }

  saveSessionData(height, weight, text) {
    sessionStorage.setItem("imcData", JSON.stringify({ height, weight, text }));
  }

  loadSessionData() {
    const imcData = sessionStorage.getItem("imcData");
    if (imcData) {
      const { height, weight, text } = JSON.parse(imcData);
      this.heightInput.value = height;
      this.weightInput.value = weight;
      this.displayResult(text);
    }
  }
}

const imcCalculator = new IMC();
