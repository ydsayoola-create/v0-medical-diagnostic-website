import { create } from 'zustand'

interface FormState {
  showAppointmentForm: boolean
  showContactForm: boolean
  setShowAppointmentForm: (show: boolean) => void
  setShowContactForm: (show: boolean) => void
}

export const useFormStore = create<FormState>((set) => ({
  showAppointmentForm: false,
  showContactForm: false,
  setShowAppointmentForm: (show) => set({ showAppointmentForm: show }),
  setShowContactForm: (show) => set({ showContactForm: show }),
}))
