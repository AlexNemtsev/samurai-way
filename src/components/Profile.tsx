import styles from './Profile.module.css';

function Profile() {
  return (
    <div className={styles.content}>
      <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg " alt="background" />
      <div>ava + desc</div>
      <div>
        my posts <div>New post</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
