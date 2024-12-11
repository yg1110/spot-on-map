export type SpotItem = {
  id: number;
  name: string;
  thumbnail: string;
  address: {
    main: string;
    detail?: string;
  };
  x: string;
  y: string;
};
