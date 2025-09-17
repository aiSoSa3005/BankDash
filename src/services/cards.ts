export interface CreditCard {
  balance: number;
  cardNumber: number;
  cardHolder: string;
  expiry: string;
}

export function fetchCreditCardsData(): CreditCard[] {
  return [
    {
      balance: 5000,
      cardNumber: 1234567890123456,
      cardHolder: "John Doe",
      expiry: "12/24",
    },
    {
      balance: 3200,
      cardNumber: 9876543210987654,
      cardHolder: "John Doe",
      expiry: "11/23",
    },
  ];
}
