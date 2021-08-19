

export interface ProductType {
   id: number,
   title: string,
   image: string,
   price: number,
   category: string,
}

export interface ProductsDetailType {
    id: number,
   title: string,
   image: string,
   price: number,
   category: string,
    description: string,
} 

export interface SignUpType {
    email: string,
    username: string,
    password: string,
    name: {
      firstname: string,
      lastname: string,
    },
    address: {
      city: string,
      street: string,
      number: string,
      zipcode: string,
      geolocation: {
        lat: string,
        long: string,
      },
    },
    phone: string,
  };

