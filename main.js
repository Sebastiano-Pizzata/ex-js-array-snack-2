const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];



//SNACK 1
//Crea un array (longBooks) con i libri che hanno più di 300 pagine;
//Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
//Stampa in console ogni titolo nella console.

const longBooks = books.filter(b => b.pages > 300);
const longBooksTitles = longBooks.map(l => l.title)
console.log(longBooksTitles);




//SNACK 2
//Creare un array (availableBooks) che contiene tutti i libri disponibili.
//Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo).
//Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).


const availableBooks = books.filter(b => b.available === true)
const discountedBooks = availableBooks.map(a => {
    const price = parseFloat(a.price.replace('€', ''));
    const discountPrezzo = (price * 0.8).toFixed(2)
    return {
        ...a,
        price: `${discountPrezzo}€`
    }
})
const fullPricedBook = discountedBooks.find(d => {
    const price = parseFloat(d.price.replace('€', ''));
    return price % 1 === 0
})
console.log(fullPricedBook)




//SNACK 3
//Creare un array (authors) che contiene gli autori dei libri.
//Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
//Ordina l’array authors in base all’età, senza creare un nuovo array.
//(se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)


const authors = books.map(b => b.author)
const areAuthorsAdult = authors.every(a => a.age > 18)
authors.sort((a, b) => areAuthorsAdult === true ? a.age - b.age : b.age - a.age)
console.log(authors)



//SNACK 3 CON .REDUCE()
//Creare un array (ages) che contiene le età degli autori dei libri.
//Calcola la somma delle età (agesSum) usando reduce.
//Stampa in console l’età media degli autori dei libri.

const ages = books.map(book => book.author)
const ageSum = ages.reduce((acc, curr) => acc + curr.age, 0)
console.log('Età media :', ageSum / books.length)

