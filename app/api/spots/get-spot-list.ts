import { SpotItem } from '@/schemas/SpotMap';

type Response = SpotItem[];
export const spotList: Response = [
  {
    id: 1,
    name: '서울숲',
    thumbnail: 'https://cdn.pixabay.com/photo/2016',
    address: {
      main: '서울특별시 성동구',
      detail: '서울숲로 273',
    },
    x: '127.02790941672053',
    y: '37.49704028978622',
  },
];
