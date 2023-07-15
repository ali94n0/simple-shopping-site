const initialState = {
  selectedItems: [],
  itemsCount: 0,
  totalPrice: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCount = items.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = items
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCount, totalPrice };
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedCard = [...state.selectedItems];
      if (!updatedCard.find((item) => item.id === action.payload.id)) {
        updatedCard.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        selectedItems: updatedCard,
        checkout: false,
        ...sumItems(updatedCard),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItems],
        checkout: false,
        ...sumItems(newSelectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedCardIncrease = [...state.selectedItems];
      const selectedItemIncrease = { ...updatedCardIncrease[indexI] };
      selectedItemIncrease.quantity++;
      updatedCardIncrease[indexI] = selectedItemIncrease;

      return {
        ...state,
        selectedItems: updatedCardIncrease,
        ...sumItems(updatedCardIncrease),
        checkout: false,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedCardDecrease = [...state.selectedItems];
      const selectedItemDecrease = { ...updatedCardDecrease[indexD] };
      selectedItemDecrease.quantity--;
      updatedCardDecrease[indexD] = selectedItemDecrease;

      return {
        ...state,
        selectedItems: updatedCardDecrease,
        ...sumItems(updatedCardDecrease),
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCount: 0,
        totalPrice: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCount: 0,
        totalPrice: 0,
        checkout: false,
      };
    default:
      return state;
  }
};
export default cardReducer;
