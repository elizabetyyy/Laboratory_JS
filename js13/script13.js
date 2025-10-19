const film = {
    title: "Інтерстеллар",
    director: "Крістофер Нолан",
    year: 2014
};

const keysAndValues = [...Object.keys(film), ...Object.values(film)];
console.log(keysAndValues);
