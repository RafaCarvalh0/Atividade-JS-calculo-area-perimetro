const PI = 3.1415;

class Figura {
    constructor() {
        this.perimetro = 0;
        this.area = 0;
    }
    calcularPerimetro() { }
    calcularArea() { }
}

class Triangulo extends Figura {
    constructor(lado1, lado2, lado3) {
        super();
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    calcularPerimetro() {
        this.perimetro = this.lado1 + this.lado2 + this.lado3;
    }

    calcularArea() {
        let sp = this.perimetro / 2;
        this.area = Math.sqrt(sp * (sp - this.lado1) * (sp - this.lado2) * (sp - this.lado3));
    }
}

class Retangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularPerimetro() {
        this.perimetro = 2 * (this.base + this.altura);
    }

    calcularArea() {
        this.area = this.base * this.altura;
    }
}

class Circulo extends Figura {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularPerimetro() {
        this.perimetro = 2 * PI * this.raio;
    }

    calcularArea() {
        this.area = PI * this.raio * this.raio;
    }
}

class Quadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularPerimetro() {
        this.perimetro = 4 * this.lado;
    }

    calcularArea() {
        this.area = this.lado * this.lado;
    }
}

class Elipse extends Figura {
    constructor(semimajor, semiminor) {
        super();
        this.semimajor = semimajor;
        this.semiminor = semiminor;
    }

    calcularPerimetro() {
        // Fórmula aproximada para o perímetro de uma elipse
        this.perimetro = Math.PI * (3 * (this.semimajor + this.semiminor) - Math.sqrt((3 * this.semimajor + this.semiminor) * (this.semimajor + 3 * this.semiminor)));
    }

    calcularArea() {
        this.area = Math.PI * this.semimajor * this.semiminor;
    }
}

const tipoFiguraMap = {
    '1': Triangulo,
    '2': Retangulo,
    '3': Circulo,
    '4': Quadrado,
    '5': Elipse
};

function createFigura(figuraConstructor) {
    switch (figuraConstructor) {
        case Triangulo:
            return new Triangulo(
                Number(document.getElementById("lbLado1").value),
                Number(document.getElementById("lbLado2").value),
                Number(document.getElementById("lbLado3").value)
            );
        case Retangulo:
            return new Retangulo(
                Number(document.getElementById("lbBase").value),
                Number(document.getElementById("lbAltura").value)
            );
        case Circulo:
            return new Circulo(
                Number(document.getElementById("lbRaio").value)
            );
        case Quadrado:
            return new Quadrado(
                Number(document.getElementById("lbLadoQuadrado").value)
            );
        case Elipse:
            return new Elipse(
                Number(document.getElementById("lbSemimajor").value),
                Number(document.getElementById("lbSemiminor").value)
            );
        default:
            return null;
    }
}

function mudarCamposEntrada() {
    const figuraTipo = document.getElementById("tipoFigura").value;
    document.getElementById("tri").style.display = figuraTipo === '1' ? 'block' : 'none';
    document.getElementById("ret").style.display = figuraTipo === '2' ? 'block' : 'none';
    document.getElementById("cir").style.display = figuraTipo === '3' ? 'block' : 'none';
    document.getElementById("quad").style.display = figuraTipo === '4' ? 'block' : 'none';
    document.getElementById("eli").style.display = figuraTipo === '5' ? 'block' : 'none';
}

function eventoClickBotao() {
    const figuraConstructor = tipoFiguraMap[document.getElementById("tipoFigura").value];
    const figura = createFigura(figuraConstructor);
    figura.calcularPerimetro();
    figura.calcularArea();
    document.getElementById("perimetro").value = figura.perimetro;
    document.getElementById("area").value = figura.area;
}
