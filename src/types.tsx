export interface LocationList extends Array<Pin>{};

export interface Pin {
  id: number,
  name: string,
  lat: number,
  lng: number
}