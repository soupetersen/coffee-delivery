import ExpressoTradicional from "../assets/coffee-images/expresso_tradicional.png";
import ExpressoAmericano from "../assets/coffee-images/expresso_americano.png";
import ExpressoCremoso from "../assets/coffee-images/expresso_cremoso.png";
import ExpressoGelado from "../assets/coffee-images/expresso_gelado.png";
import CafeComLeite from "../assets/coffee-images/cafe_com_leite.png";
import Latte from "../assets/coffee-images/latte.png";
import Capuccino from "../assets/coffee-images/capuccino.png";
import Macchiato from "../assets/coffee-images/macchiato.png";
import Mocaccino from "../assets/coffee-images/mocaccino.png";
import ChocolateQuente from "../assets/coffee-images/chocolate_quente.png";
import Cubano from "../assets/coffee-images/cubano.png";
import Havaiano from "../assets/coffee-images/havaiano.png";
import Arabe from "../assets/coffee-images/arabe.png";
import Irlandes from "../assets/coffee-images/irlandes.png";

export const coffees = [
    {
        id: 1,
        tags: ["tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        amount: 0,
        image: ExpressoTradicional,
        price: 9.9,
    },
    {
        id: 2,
        tags: ["tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        amount: 0,
        image: ExpressoAmericano,
        price: 9.9,
    },
    {
        id: 3,
        tags: ["tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        amount: 0,
        image: ExpressoCremoso,
        price: 9.9,
    },
    {
        id: 4,
        tags: ["tradicional", "gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        amount: 0,
        image: ExpressoGelado,
        price: 9.9,
    },
    {
        id: 5,
        tags: ["tradicional", "com leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        amount: 0,
        image: CafeComLeite,
        price: 9.9,
    },
    {
        id: 6,
        tags: ["tradicional", "com leite"],
        name: "Latte",
        description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        amount: 0,
        image: Latte,
        price: 9.9,
    },
    {
        id: 7,
        tags: ["tradicional", "com leite"],
        name: "Capuccino",
        description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
        amount: 0,
        image: Capuccino,
        price: 9.9,
    },
    {
        id: 8,
        tags: ["tradicional", "com leite"],
        name: "Macchiato",
        description:
            "Café expresso misturado com um pouco de leite quente e espuma",
        amount: 0,
        image: Macchiato,
        price: 9.9,
    },
    {
        id: 9,
        tags: ["tradicional", "com leite"],
        name: "Mocaccino",
        description:
            "Café expresso com calda de chocolate, pouco leite e espuma",
        amount: 0,
        image: Mocaccino,
        price: 9.9,
    },
    {
        id: 10,
        tags: ["especial", "com leite"],
        name: "Chocolate Quente",
        description:
            "Bebida feita com chocolate dissolvido no leite quente e café",
        amount: 0,
        image: ChocolateQuente,
        price: 9.9,
    },
    {
        id: 11,
        tags: ["especial", "alcoólico", "gelado"],
        name: "Cubano",
        description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
        amount: 0,
        image: Cubano,
        price: 9.9,
    },
    {
        id: 12,
        tags: ["especial"],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        amount: 0,
        image: Havaiano,
        price: 9.9,
    },
    {
        id: 13,
        tags: ["especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        amount: 0,
        image: Arabe,
        price: 9.9,
    },
    {
        id: 14,
        tags: ["especial", "alcoólico"],
        name: "Irlandês",
        description:
            "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        amount: 0,
        image: Irlandes,
        price: 9.9,
    },
];
