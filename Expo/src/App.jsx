import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

// const users = [
//   {
//     userName: 'midudev',
//     name: 'Miguel Ángel Durán',
//     isFollowing: true
//   },
//   {
//     userName: 'pheralb',
//     name: 'Pablo H.',
//     isFollowing: false
//   },
//   {
//     userName: 'PacoHdezs',
//     name: 'Paco Hdez',
//     isFollowing: true
//   },
//   {
//     userName: 'TMChein',
//     name: 'Tomas',
//     isFollowing: false
//   }
// ]

export function App () {
  // ------ Prop con funciones ------
  // const format = (userName) => `@${userName}`

  // ------ Prop con elementos ------
  // const formattedUserName = (<span>Hola que tal</span>)

  // ------ Prop con objetos ------
  const damaez = { isFollowing: true, userName: 'Damaez_'}
  const pelo = { isFollowing: false, userName: '_SrPelo_'}

  return (

    // ------ Componentes props y booleanos ------
    // <section className='App'>
    //   <TwitterFollowCard isFollowing userName="Damaez_" name="Damaez"/>
    //   <TwitterFollowCard isFollowing="false" userName="_SrPelo_" name="Pelo"/>
    //   <TwitterFollowCard isFollowing="false" userName="LuisFDiaz19" name="Luis Fernando Díaz"/>
    //   <TwitterFollowCard isFollowing userName="MoSalah" name="Mohamed Salah"/>
    // </section>

    // ------ Prop con funciones ------
    // <section className='App'>
    //   <TwitterFollowCard
    //     formatUserName={format}
    //     isFollowing 
    //     userName="Damaez_" 
    //     name="Damaez"/>

    //   <TwitterFollowCard
    //     formatUserName={format}
    //     isFollowing="false" 
    //     userName="_SrPelo_" 
    //     name="Pelo"/>

    //   <TwitterFollowCard
    //     formatUserName={format}
    //     isFollowing="false" 
    //     userName="LuisFDiaz19" 
    //     name="Luis Fernando Díaz"/>

    //   <TwitterFollowCard 
    //     formatUserName={format}
    //     isFollowing
    //     userName="MoSalah"
    //     name="Mohamed Salah"/>
    // </section>

    // ------ Prop con elementos ------
    // <section className='App'>
    //   <TwitterFollowCard
    //     formattedUserName={formattedUserName}
    //     isFollowing 
    //     userName="Damaez_" 
    //     name="Damaez"/>

    //   <TwitterFollowCard
    //     formattedUserName={formattedUserName}
    //     isFollowing="false" 
    //     userName="_SrPelo_" 
    //     name="Pelo"/>

    //   <TwitterFollowCard
    //     formattedUserName={formattedUserName}
    //     isFollowing="false" 
    //     userName="LuisFDiaz19" 
    //     name="Luis Fernando Díaz"/>

    //   <TwitterFollowCard 
    //     formattedUserName={formattedUserName}
    //     isFollowing
    //     userName="MoSalah"
    //     name="Mohamed Salah"/>
    // </section>

    // ------ Prop con children ------
    // <section className='App'>
    //   <TwitterFollowCard isFollowing userName="Damaez_">
    //     Damaez
    //   </TwitterFollowCard>

    //   <TwitterFollowCard isFollowing userName="_SrPelo_">
    //     Pelo
    //   </TwitterFollowCard>
    // </section>

    // ------ Prop con objeto ------
    <section className='App'>
      <TwitterFollowCard {... damaez}>
        Damaez
      </TwitterFollowCard>

      <TwitterFollowCard {... pelo}>
        Pelo
      </TwitterFollowCard>
    </section>

    // <section className='App'>
    //   {
    //     users.map(({ userName, name, isFollowing }) => (
    //       <TwitterFollowCard
    //         key={userName}
    //         userName={userName}
    //         initialIsFollowing={isFollowing}
    //       >
    //         {name}
    //       </TwitterFollowCard>
    //     ))
    //   }
    // </section>
  )
}
