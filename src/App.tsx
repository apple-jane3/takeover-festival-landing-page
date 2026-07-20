import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/src/pages/HomePage'
import GalleryPage from '@/src/pages/GalleryPage'
import TicketsPage from '@/src/pages/TicketsPage'
import LocationPage from '@/src/pages/LocationPage'
import FaqPage from '@/src/pages/FaqPage'
import CausesIndexPage from '@/src/pages/CausesIndexPage'
import CauseDetailPage from '@/src/pages/CauseDetailPage'
import ExpoIndexPage from '@/src/pages/ExpoIndexPage'
import ExpoDetailPage from '@/src/pages/ExpoDetailPage'
import ArtistDetailPage from '@/src/pages/ArtistDetailPage'
import MediaPage from '@/src/pages/MediaPage'
import PartnersPage from '@/src/pages/PartnersPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/causes" element={<CausesIndexPage />} />
        <Route path="/causes/:slug" element={<CauseDetailPage />} />
        <Route path="/expo" element={<ExpoIndexPage />} />
        <Route path="/expo/:slug" element={<ExpoDetailPage />} />
        <Route path="/artists/:slug" element={<ArtistDetailPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/partners" element={<PartnersPage />} />
      </Routes>
    </BrowserRouter>
  )
}
