import PropTypes from "prop-types";
import FriendItem from "./FriendList";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li className={s.item} key={friend.id}>
          <FriendItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
