import Hero from '../../components/Hero'
import HomeAppSection from '../../components/HomeAppSection'
import HomeOverviewSection from '../../components/HomeOverviewSection'
import HomeStatsSection from '../../components/HomeStatsSection'

function HomeScreen() {
  return (
    <>
      <Hero />
      <HomeStatsSection />
      <HomeOverviewSection />
      <HomeAppSection />
    </>
  )
}

export default HomeScreen
