import {FaTrashAlt} from 'react-icons/fa';
export default function ListItem({item, handleChange, handleDelete}){
    return (
        <li>
          <div>
          <input 
            onChange={() => handleChange(item.id)} 
            type="checkbox" 
            checked={item.check} 
            />

            <label style={(item.check) ? {textDecoration: 'line-through'} : null} 
            onDoubleClick={() => handleChange(item.id)}
            >
                {item.item}
            </label>
          </div>
            <button><FaTrashAlt onClick={() => handleDelete(item.id)}/></button>
            
        </li>
    )
}