const filterCards = (cards = [], filterBy = "default") => {
  let filteredCards = [];
  if (filterBy === "default") {
    return;
  }
  filteredCards = cards.filter((card) => {
    if (card.category === filterBy) return true;
    return false;
  });
  return filteredCards;
};
export default filterCards;
