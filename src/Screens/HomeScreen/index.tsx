import Hero from '../../components/Hero'
import HomeAppSection from '../../components/HomeAppSection'
import HomeCTASection from '../../components/HomeCTASection'
import HomeOverviewSection from '../../components/HomeOverviewSection'
import HomePartnersSection from '../../components/HomePartnersSection'
import HomeStatsSection from '../../components/HomeStatsSection'

function HomeScreen() {
  return (
    <>
      <Hero />
      <HomeStatsSection />
      <HomeOverviewSection />
      <HomeAppSection />
      <HomePartnersSection />
      <HomeCTASection />
    </>
  )
}

export default HomeScreen
