import UserDisplay from './components/UserDisplay'
import { useQuery, gql } from 'urql'
import { User } from './types'

const GET_USERS = gql`
  query GetUser {
    users {
      id
      name
      messages {
        body
      }
    }
  }
`

function App() {
  const [results] = useQuery({
    query: GET_USERS
  })

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        results.data?.users.map((user: User, i:number) => <UserDisplay user={user} key={i}/>)
      }
    </div>
  )
}

export default App