class Beer {
  constructor(id, name, owner) {
    this.id = id;
    this.name = name;
    this.owner = owner;
  }

  toString() {
    return this.name;
  }
}

// Firestore data converter
const beerConverter = {
  toFirestore(beer) {
    return {
      name: beer.name,
      owner: beer.owner,
    };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return new Beer(snapshot.id, data.name, data.owner);
  },
};

export {
  Beer,
  beerConverter,
};
