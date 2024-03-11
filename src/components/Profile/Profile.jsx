import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.userCard}>
      <div className={css.userInfo}>
        <img className={css.userImg} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.userStatus}>
        <li className={css.statusItem}>
          <span className={css.statusTitle}>Followers</span>
          <span className={css.statusNumber}>{stats.followers}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusTitle}>Views</span>
          <span className={css.statusNumber}>{stats.views}</span>
        </li>
        <li className={css.statusItem}>
          <span className={css.statusTitle}>Likes</span>
          <span className={css.statusNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
