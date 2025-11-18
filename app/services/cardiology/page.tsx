import CardiologyPageClient from "./client"

export const metadata = {
  title: "Cardiology Diagnostics | Dynasty Global Medical",
  description:
    "Heart and vascular assessment including ECG, echocardiography, Holter monitoring, stress testing, and coronary imaging.",
}

export default function CardiologyPage() {
  return <CardiologyPageClient />
}
