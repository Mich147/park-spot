import Hero from '../../components/Hero'
import HomPartnersSection from '../../components/HomPartnersSection'
import HomeAppSection from '../../components/HomeAppSection'
import HomeCTASection from '../../components/HomeCTASection'
import HomeOverviewSection from '../../components/HomeOverviewSection'
import HomeStatsSection from '../../components/HomeStatsSection'

function HomeScreen() {
  return (
    <>
      <Hero />
      <HomeStatsSection />
      <HomeOverviewSection />
      <HomeAppSection />
      <HomPartnersSection />
      <HomeCTASection />
    </>
  )
}

export default HomeScreen
