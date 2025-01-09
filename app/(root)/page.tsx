import Header from '@/components/ui/Header'
import RightSidebar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
const Home = () => {
  const loggedIn = {firstName: 'mohamed', lastName: 'Kazafy', email: 'Kazafy@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <Header 
         type='greeting'
         title="welocome"
         user= {loggedIn?.firstName || "User"}
         subtext = "Access and manage your account effecintly"
         />
         <TotalBalanceBox 
         accounts = {[]}
         totalBanks = {1}
         totalCurrentBalance = {1250.35}
         />

        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance:123.50},{currentBalance:623.50}]}
      />
    </section>
  )
}

export default Home