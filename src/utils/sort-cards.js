const sortCards = (cards = [], sortBy = "default") => {
  let sortedCard = [];
  if (sortBy === "default") {
    return cards;
  }
  sortedCard = cards.slice().sort((a, b) => {
    const A = a[sortBy];
    const B = b[sortBy];
    if (A > B) return 1;
    if (A < B) return -1;
    else return 0;
  });
  return sortedCard;
};
export default sortCards;
