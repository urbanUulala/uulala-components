export interface MenuModel {
  key: string;
  parent: string;
  description: string;
  level: string;
  url: string;
  imgUrl: string;
  childs?: MenuModel[];
  allChilds?: MenuModel[];
}
