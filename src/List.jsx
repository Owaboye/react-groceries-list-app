
import ListItem from './ListItem';
export default function List({items, handleChange, handleDelete}){
    return (
        <ul>
            {
                items.map((item) => {
                return <ListItem key={item.id} item={item} handleChange={handleChange} handleDelete={handleDelete}/>
                })
            }
        </ul>
    )
}