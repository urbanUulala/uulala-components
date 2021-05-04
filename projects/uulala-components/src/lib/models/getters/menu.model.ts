export interface MenuModel {
  key: string;
  parent: string;
  description: string;
  level: string;
  urlV2: string;
  imgUrl: string;
  childs?: MenuModel[];
  allChilds?: MenuModel[];
}
