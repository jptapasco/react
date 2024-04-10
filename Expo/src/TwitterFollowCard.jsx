import { useState } from 'react'

// ------ Prop normal ------
// export function TwitterFollowCard ({ name, userName, isFollowing }) {

// ------ Prop con funcion ------
// export function TwitterFollowCard ({ formatUserName, name, userName, isFollowing }) {

// ------ Prop con elemento ------
// export function TwitterFollowCard ({ formattedUserName, name, userName, isFollowing }) {

// ------ Prop con children ------
export function TwitterFollowCard ({ children, userName, isFollowing }) {

// ------ Full ------
// export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
//   const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  // console.log('[TwitterFollowCard] render with userName: ', userName)

  // const text = isFollowing ? 'Siguiendo' : 'Seguir'
  // const buttonClassName = isFollowing
  //   ? 'tw-followCard-button is-following'
  //   : 'tw-followCard-button'

  // const handleClick = () => {
  //   setIsFollowing(!isFollowing)
  // }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          {/* ------ Prop normal - funcion - elemento ------ */}
          {/* <strong>{name}</strong> */}

          {/* ------ Prop normal - funcion - elemento ------ */}
          <strong>{children}</strong>


          {/* ------ Prop normal ------ */}
          {/* <span className='tw-followCard-infoUserName'>@{userName}</span> */}

          {/* ------ Prop con funcion ------ */}
          {/* <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span> */}

          {/* ------ Prop con elemento ------ */}
          {/* <span className='tw-followCard-infoUserName'>{formattedUserName}</span> */}

          {/* ------ Prop con children ------ */}
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          Seguir
        </button>

        {/* <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button> */}
      </aside>
    </article>
  )
}
