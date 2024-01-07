// Retrieve card from cards array at the 0-based position
export function getItem(cards, position) {
  return cards[position];
}

// Exchange card with replacementCard at the 0-based position
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

// Insert newCard at the end of the cards array
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

// Remove the card at the 0-based position
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

// Remove card from the end of the cards array
export function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

// Insert newCard at beginning of the cards array
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

// Remove card from the beginning of the cards
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

// Compare the number of cards with the given stackSize
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
}
