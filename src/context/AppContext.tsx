import React, { createContext, useContext, useState, useEffect } from 'react';
import { TattooItem, TATTOOS_DATA } from '../data/tattoosData';

export interface BookingRecord {
  id: string;
  bookingRef: string;
  serviceType: string;
  artistId: string;
  artistName: string;
  placement: string;
  approxSize: string;
  conceptNotes: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  status: 'Confirmed' | 'Pending Review' | 'Completed';
  createdAt: string;
}

export interface InquiryRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: 'general' | 'academy' | 'piercing';
  createdAt: string;
}

interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface AppContextType {
  favorites: string[];
  toggleFavorite: (tattooId: string) => void;
  isFavorite: (tattooId: string) => boolean;
  getFavoriteTattoos: () => TattooItem[];
  bookings: BookingRecord[];
  addBooking: (booking: Omit<BookingRecord, 'id' | 'bookingRef' | 'createdAt' | 'status'>) => BookingRecord;
  cancelBooking: (id: string) => void;
  inquiries: InquiryRecord[];
  addInquiry: (inquiry: Omit<InquiryRecord, 'id' | 'createdAt'>) => void;
  selectedTattooModal: TattooItem | null;
  openTattooModal: (tattoo: TattooItem) => void;
  closeTattooModal: () => void;
  toasts: ToastMessage[];
  showToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEYS = {
  FAVORITES: 'blacktattooshade_favorites',
  BOOKINGS: 'blacktattooshade_bookings',
  INQUIRIES: 'blacktattooshade_inquiries',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Favorites persistence
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return saved ? JSON.parse(saved) : ['lion-guardian-sleeve', 'sacred-lotus-mandala'];
    } catch (e) {
      console.warn('Could not read favorites from localStorage', e);
      return [];
    }
  });

  // Bookings persistence with demo default so "My Bookings" has a real example
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'demo-booking-1',
          bookingRef: 'BTS-7821',
          serviceType: 'Custom Black & Grey Tattoo',
          artistId: 'sanket-varhadi',
          artistName: 'Sanket Varhadi',
          placement: 'Forearm',
          approxSize: '6 x 4 inches',
          conceptNotes: 'Chronos pocket watch and delicate thorny rose integration with soft realism shading.',
          date: '2026-11-20',
          timeSlot: '02:00 PM',
          fullName: 'Aman Kumar',
          email: 'aman@example.com',
          phone: '+91 98765 43210',
          status: 'Confirmed',
          createdAt: '2026-11-01T10:30:00Z',
        }
      ];
    } catch (e) {
      console.warn('Could not read bookings from localStorage', e);
      return [];
    }
  });

  // Inquiries persistence
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('Could not read inquiries from localStorage', e);
      return [];
    }
  });

  // Modal State
  const [selectedTattooModal, setSelectedTattooModal] = useState<TattooItem | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
    } catch (e) {
      console.warn('Error saving favorites to localStorage', e);
    }
  }, [favorites]);

  // Sync bookings
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    } catch (e) {
      console.warn('Error saving bookings to localStorage', e);
    }
  }, [bookings]);

  // Sync inquiries
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
    } catch (e) {
      console.warn('Error saving inquiries to localStorage', e);
    }
  }, [inquiries]);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = 'toast-' + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleFavorite = (tattooId: string) => {
    setFavorites((prev) => {
      const exists = prev.includes(tattooId);
      if (exists) {
        showToast('Removed from Favorites', 'Tattoo removed from your saved inspirations.', 'info');
        return prev.filter((id) => id !== tattooId);
      } else {
        showToast('Saved to Inspirations', 'Added to your favorites list for consultation.', 'success');
        return [...prev, tattooId];
      }
    });
  };

  const isFavorite = (tattooId: string) => favorites.includes(tattooId);

  const getFavoriteTattoos = () => {
    return TATTOOS_DATA.filter((item) => favorites.includes(item.id));
  };

  const addBooking = (bookingData: Omit<BookingRecord, 'id' | 'bookingRef' | 'createdAt' | 'status'>) => {
    const refNum = 'BTS-' + Math.floor(1000 + Math.random() * 9000);
    const newRecord: BookingRecord = {
      ...bookingData,
      id: 'book-' + Date.now(),
      bookingRef: refNum,
      status: 'Confirmed',
      createdAt: new Date().toISOString(),
    };

    setBookings((prev) => [newRecord, ...prev]);
    showToast(
      'Appointment Confirmed!',
      `Booking ${refNum} scheduled for ${bookingData.date} at ${bookingData.timeSlot}.`,
      'success'
    );
    return newRecord;
  };

  const cancelBooking = (id: string) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
    showToast('Booking Cancelled', 'Your appointment record has been cancelled.', 'info');
  };

  const addInquiry = (inquiryData: Omit<InquiryRecord, 'id' | 'createdAt'>) => {
    const newInquiry: InquiryRecord = {
      ...inquiryData,
      id: 'inq-' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    setInquiries((prev) => [newInquiry, ...prev]);
    showToast('Message Received', 'Our studio concierge will respond within 2-4 business hours.', 'success');
  };

  const openTattooModal = (tattoo: TattooItem) => setSelectedTattooModal(tattoo);
  const closeTattooModal = () => setSelectedTattooModal(null);

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        getFavoriteTattoos,
        bookings,
        addBooking,
        cancelBooking,
        inquiries,
        addInquiry,
        selectedTattooModal,
        openTattooModal,
        closeTattooModal,
        toasts,
        showToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
