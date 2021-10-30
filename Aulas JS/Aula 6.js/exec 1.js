/* 
    Temos uma petshop, então precisamos:
    - ter os nossos pets (class Pet);
    - vão ter, nome, raça, idade;
    - nossos pets vão poder latirOuMiar() // 'oi meu nome é xxx e minha raça é xxx e idade é xxx';
*/


class Animal {
    nome = '';
    raca = '';
    idade = 0;
    tipo = ''

    constructor(nameParameter, breedParameter, ageParameter, typeParameter) {
        this.nome = nameParameter;
        this.raca = breedParameter;
        this.idade = ageParameter;
        this.tipo = typeParameter;
    }

    animalApresentation() {
        console.log(`Olá, me chamo ${this.nome}, tenho ${this.idade} anos, sou um ${this.tipo} da raça ${this.raca}`);
    }
}

const bunny = new Animal('Bunny', 'Poodle', 6, 'Cachorro');
const pacoca = new Animal('Paçoca', 'Vira Lata', 9, 'Cachorro');
const theo = new Animal('Theo', 'Poodle', 2, 'Cachorro');
const mitsy = new Animal('Mitsy', 'Siames', 5, 'Gato');
