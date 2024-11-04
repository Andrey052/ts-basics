// Перепишите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit"
  }
  
  interface ICustomer {
    firstName: string;
    lastName: string;
    dateBirthday: Date;
  }
interface IAdress{
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    detiveryTime?: string;
}
interface IPayment {
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: "EUR" | "USD" | "RUB";
  }
  
