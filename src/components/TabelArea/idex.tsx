import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TabelItem/index";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
        <C.TableHeadColumn width={130}>Categoria</C.TableHeadColumn>
        <C.TableHeadColumn>Titulo</C.TableHeadColumn>
        <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
