const pelis = [
    {titulo: "hola", rating: 4, id: 1},
    {titulo: "peli 2", rating: 4, id:2}
]

function getAll() {
    return pelis;
}

function getById(id:number) {
    const peliEncontrada = pelis.find((p) => {
        return p.id == id;
    });

    return peliEncontrada;
}

export {
    getAll, 
    getById
};