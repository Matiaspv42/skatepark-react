import { useContext } from 'react'
import Header from '../components/Home/Header'
import TablaParticipantes from '../components/Home/TablaParticipantes'
export default function Home(){
    // const token = useContext(AuthContext)
    return (
        <>
            <Header/>
            <TablaParticipantes/>
            {/* <div>Authenticated as {token}</div> */}
        </>
    )
}