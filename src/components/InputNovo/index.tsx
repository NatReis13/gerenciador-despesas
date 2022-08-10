import * as C from './styles'
import {Item} from '../../types/Item'
import { Category, Value } from '../TabelItem/styles';

type Props = {
    onAdd: (item: Item)
}

export const InputNovo = ({onAdd}: Props) => {

const handleAddEvent = () => {
let newItem: Item = {
    date: new Date ()
    category: ''
    title: ''
    Value: 
};
    onAdd();
}

    return(
<C.Container>
    <button onClick={handleAddEvent}>Adicionar</button>
</C.Container>
    );
};