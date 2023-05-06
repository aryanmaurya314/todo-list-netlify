import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <div>
        <FaTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
          tabIndex="0"
          aria-label={`Delete ${item.item}`} // its an image make it button using ariel-label attribute
        />
      </div>
    </li>
  );
};

export default ListItem;
