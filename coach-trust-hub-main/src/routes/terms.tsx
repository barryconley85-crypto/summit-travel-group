import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Summit Travel Group" },
      { name: "description", content: "Terms and conditions of hire for Summit Travel Group coach bookings across the UK." },
      { property: "og:title", content: "Terms & Conditions — Summit Travel Group" },
      { property: "og:description", content: "The terms governing coach hire bookings made with Summit Travel Group." },
    ],
  }),
  component: TermsPage,
});

const sections: { title: string; body: (string | string[])[] }[] = [
  {
    title: "1. Definitions",
    body: [
      "“Company”, “we”, “us” or “our” means Summit Travel Group, a coach hire brokerage based in Manchester, UK, arranging passenger transport with vetted third-party PSV-licensed operators.",
      "“Hirer”, “you” or “your” means the person, business, school or organisation entering into the contract of hire with the Company.",
      "“Operator” means the licensed Public Service Vehicle (PSV) operator contracted by the Company to fulfil all or part of the booking.",
      "“Booking” means the confirmed contract of hire between the Hirer and the Company for the supply of vehicle(s), driver(s) and related services.",
    ],
  },
  {
    title: "2. The Contract",
    body: [
      "A contract is formed when the Hirer accepts a written quotation in writing (including email) and the Company issues a written booking confirmation. The booking confirmation and these terms together form the entire agreement between the parties.",
      "Summit Travel Group acts as a broker, sourcing transport from a network of vetted UK PSV operators. The day-to-day carriage of passengers is performed by the Operator under their own PSV Operator’s Licence, insurance and Driver CPC compliance.",
      "Any variation to the booking must be agreed by the Company in writing. Verbal changes given to a driver on the day are not binding unless subsequently confirmed by the Company.",
    ],
  },
  {
    title: "3. Quotations & Pricing",
    body: [
      "Quotations are valid for 14 days from the date of issue unless otherwise stated and are subject to vehicle availability at the time of booking.",
      "Quotations are based on the itinerary, passenger numbers, timings and vehicle type provided by the Hirer. Any changes — including additional mileage, extended hours, additional pick-up points or upgraded vehicles — may incur additional charges.",
      "All prices are quoted in GBP. Where VAT applies it will be shown separately on the invoice.",
      "Toll charges, congestion zone charges, ferry crossings, parking, driver accommodation on multi-day trips, and venue access fees are not included unless expressly stated in the quotation.",
    ],
  },
  {
    title: "4. Payment Terms",
    body: [
      "Unless agreed otherwise in writing, bookings made more than 30 days in advance require a 25% non-refundable deposit to confirm, with the balance payable no later than 14 days before the date of travel.",
      "Bookings made within 14 days of travel are payable in full at the time of confirmation.",
      "Account customers with agreed credit terms must settle invoices within 30 days of invoice date. Overdue invoices may incur interest at 4% above the Bank of England base rate in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.",
      "The Company reserves the right to refuse to commence or continue a journey where payment terms have not been met.",
    ],
  },
  {
    title: "5. Cancellation by the Hirer",
    body: [
      "All cancellations must be made in writing. Cancellation charges are calculated against the total hire price as follows:",
      [
        "More than 28 days before travel: loss of deposit only.",
        "15–28 days before travel: 50% of the total hire charge.",
        "8–14 days before travel: 75% of the total hire charge.",
        "7 days or less before travel: 100% of the total hire charge.",
      ],
      "Where the booking includes pre-purchased event tickets, ferry crossings, accommodation or other third-party costs, these are non-refundable from the moment they are committed by the Company.",
    ],
  },
  {
    title: "6. Cancellation or Variation by the Company",
    body: [
      "The Company will use all reasonable endeavours to fulfil every booking as confirmed. In the unlikely event of vehicle breakdown, driver illness, severe weather, industrial action, road closures or other circumstances beyond our reasonable control, we reserve the right to substitute a vehicle of similar or higher specification, or to source an alternative Operator from our network.",
      "Where the Company is unable to fulfil a booking and no suitable alternative can be provided, our liability is limited to a full refund of monies paid in respect of that booking. We are not liable for consequential losses including missed events, missed flights, accommodation costs or loss of profit.",
    ],
  },
  {
    title: "7. Use of the Vehicle",
    body: [
      "The driver is responsible for the safe operation of the vehicle at all times and decisions regarding routing, breaks and safety are at the driver’s discretion in accordance with EU/UK Drivers’ Hours Regulations.",
      "The vehicle is hired for the journey detailed in the booking confirmation only. The driver is not obliged to deviate from the agreed route or exceed legally permitted driving and duty hours.",
      "Standing passengers are not permitted on any vehicle in our network unless the vehicle is specifically equipped and licensed for standees. Seatbelts must be worn at all times where fitted.",
      "Passenger numbers must not exceed the seating capacity of the vehicle. The Hirer is responsible for ensuring all passengers are accounted for before departure from each pick-up point.",
    ],
  },
  {
    title: "8. Conduct of Passengers",
    body: [
      "The Hirer is responsible for the conduct of all passengers throughout the hire. The driver has the authority to refuse travel to, or remove from the vehicle, any passenger whose behaviour is, in the driver’s reasonable opinion, dangerous, abusive, disruptive or in breach of UK law.",
      "Smoking, vaping and the consumption of illegal substances are strictly prohibited on all vehicles. Alcohol is only permitted with prior written agreement and in line with the Operator’s policy; alcohol is never permitted on school or under-18 hires.",
      "Any damage to the vehicle caused by passengers, including soiling that requires deep cleaning, will be charged to the Hirer at cost. A minimum charge of £150 applies to internal soiling.",
    ],
  },
  {
    title: "9. Luggage & Personal Property",
    body: [
      "Luggage is carried subject to available capacity and at the owner’s risk. The Hirer should ensure adequate travel insurance is in place for valuable items.",
      "Neither the Company nor the Operator accepts liability for loss of, or damage to, luggage or personal property left on the vehicle, save where caused by our negligence.",
      "Lost property recovered will be held for 28 days and may be returned by courier at the owner’s expense.",
    ],
  },
  {
    title: "10. Delays & Force Majeure",
    body: [
      "We are not liable for delays caused by traffic, weather, road closures, accidents, mechanical failure, acts of third parties, government action, pandemics, or any other event outside our reasonable control (each a “Force Majeure” event).",
      "Where a Force Majeure event prevents performance of the booking, our obligations are suspended for the duration of the event and we will refund payments fairly in proportion to the services not delivered.",
    ],
  },
  {
    title: "11. Insurance & Liability",
    body: [
      "All Operators in the Summit network hold a valid PSV Operator’s Licence and carry comprehensive passenger liability insurance in accordance with UK law.",
      "Our liability to the Hirer for any claim arising from the booking is, save in respect of death or personal injury caused by negligence, limited to the total price paid for the booking.",
      "Nothing in these terms excludes or limits liability that cannot lawfully be excluded under English law.",
    ],
  },
  {
    title: "12. Children & Vulnerable Passengers",
    body: [
      "On school, college and youth-group hires the Hirer must provide adequate adult supervision in accordance with current Department for Education guidance. The driver is not a chaperone.",
      "Where requested, the Company can arrange operators whose drivers hold enhanced DBS certification. Please specify this requirement at the point of quotation.",
    ],
  },
  {
    title: "13. Complaints",
    body: [
      "Any complaint should be raised with the driver and the Company on the day where possible, and confirmed in writing to hello@summittravelgroup.co.uk within 14 days of travel so we can investigate while the matter is fresh.",
      "We will acknowledge written complaints within 5 working days and aim to provide a full response within 28 days.",
    ],
  },
  {
    title: "14. Data Protection",
    body: [
      "We process personal data in line with the UK GDPR and the Data Protection Act 2018. Information provided in connection with a booking will only be used to deliver the service, share necessary details with the assigned Operator, and meet our legal obligations.",
    ],
  },
  {
    title: "15. Governing Law",
    body: [
      "These terms and any contract of hire are governed by the laws of England and Wales. The parties submit to the exclusive jurisdiction of the courts of England and Wales.",
    ],
  },
];

function TermsPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm">Legal</p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold">Terms &amp; Conditions of Hire</h1>
          <p className="mt-5 max-w-2xl text-white/75 leading-relaxed">
            These terms apply to all coach hire bookings arranged by Summit Travel Group. Please read them carefully — by confirming a booking you accept these terms on behalf of yourself and all passengers travelling under the booking.
          </p>
          <p className="mt-4 text-sm text-white/55">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="text-xl lg:text-2xl font-bold text-navy">{s.title}</h2>
              <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
                {s.body.map((b, i) =>
                  Array.isArray(b) ? (
                    <ul key={i} className="list-disc pl-6 space-y-1.5">
                      {b.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={i}>{b}</p>
                  )
                )}
              </div>
            </article>
          ))}

          <div className="rounded-lg border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
            <p className="font-semibold text-navy">Need a copy for your records?</p>
            <p className="mt-2">
              Email <a href="mailto:hello@summittravelgroup.co.uk" className="text-brand font-medium">hello@summittravelgroup.co.uk</a> or call <a href="tel:07425866205" className="text-brand font-medium">07425 866205</a> and we’ll send a PDF of these terms with your booking confirmation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
