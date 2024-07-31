import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-purple-700">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">5. Mediation of Rental Car Bookings</h2>
        <p>
          Rental car services booked via the Portal are mediated by Booking.com Transport Limited ("Rentalcars.com").
          All queries in connection with the booking and any change or cancellation requests must therefore be made
          directly to Rentalcars.com. You can find the contact details for Rentalcars.com here: For local contact
          details please see Rentalcars web site. You can access the terms and conditions of Rentalcars.com here.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">6. Special Provisions for the Mediation of Bookings of Multiple Services</h2>
        <p>
          Portal offers the possibility to mix and match multiple individual services as You wish. In this case, You
          instruct us to act as an intermediary for the booking of various travel services from various suppliers. The
          relevant suppliers will be clearly presented to You during the booking procedure before the booking is
          completed. In the event that You combine individual services, no travel contract is concluded between You and
          us; instead, You conclude several contracts for the provision of individual services with each separate
          supplier. In this case, We solely operate within our capacity as an intermediary in relation to each individual
          travel service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">7. Information on Passport, Visa and Health Provisions</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">1. Passport, Visa and Health Requirements</h3>
          <p>
            Passport, visa and/or health requirements can change and You should therefore check with the relevant
            authority (embassy, consulate etc.) well in advance of travel. It is your responsibility to be in possession
            of a valid passport and, if appropriate, a visa. It is important to remember to include all transit points in
            your journey which may also require You to obtain a visa. It can often take some time to obtain a visa, so
            You are advised to apply well ahead of time. We accept no responsibility for customers who do not possess the
            correct documents.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-purple-700">2. Destination Requirements</h3>
          <p>
            Each destination has its own requirements as far as entry formalities, vaccinations, etc. which can also vary
            depending on the passenger's nationality. It is your responsibility to collect that information. No incidents
            arising from the failure to comply with such official regulations will be considered our responsibility. We
            therefore urge You to always verify the different formalities of the chosen destination or transit countries,
            as well as the time needed to take all of the related steps.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">8. Our Own Services</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">A. Flexible Ticket</h3>
          <p>
            If purchased during the booking procedure, the Flexible Ticket allows You to change date and/or time of your
            flight booking under the terms set out in this section. When providing our Flexible Ticket service, We only
            mediate the transport contract between You and the relevant airline. As the Flexible Ticket is our own service
            (i.e. You cannot make use of our Flexible Ticket service by contacting the airline directly) all rebooking
            requests making use of the Flexible Ticket service must be made via our customer service (see Section 9.1.4).
          </p>
          <p>
            The Flexible Ticket allows flights to be rebooked under the following conditions:
            <ul className="list-disc ml-6 mt-2 text-purple-600">
              <li>All rebookings must be made in accordance with Section 9.1.4 and at least 24 hours before the original time of departure.</li>
              <li>Rebooking is only possible within the same airline, i.e., a flight can only be rebooked to a flight operated by the same airline as the one operating the originally booked ticket.</li>
              <li>Flight segments must be used in the same order in which they were originally booked.</li>
              <li>Upgrading to a different cabin or booking class on the same flight is not permitted.</li>
              <li>Rebooking a ticket for a "stop-over" (i.e., staying in a connection city longer than originally booked) is not permitted.</li>
              <li>A change of origin and/or destination is not possible, neither for the outbound nor the return flight.</li>
              <li>The Flexible Ticket does not allow any names to be changed or corrected.</li>
              <li>Rebooking under the Flexible Ticket can only be done once, either for a part of the booking or for the entire booking covered by the Flexible Ticket. Once the change has been confirmed, the Flexible Ticket has been used up.</li>
              <li>The new trip may not commence within 24 hours from the time of change request.</li>
              <li>The Flexible Ticket must be booked and paid for during the booking process and cannot be added afterwards.</li>
            </ul>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">B. Self-transfer Guarantee</h3>
          <p>
            If our connection guarantee assistance services as outlined in this section 9.2 (hereinafter referred to as the "Self-transfer Guarantee") is included in your booking this will be clearly stated during the booking process and on your booking confirmation. If your booking also includes other flight connections, please note that the Self-transfer Guarantee only applies for the part of your booking that is marked with "self-transfer".
          </p>
          <p>
            With the exception of the exclusions below, the Self-transfer Guarantee applies in the following cases (each a "Change"):
            <ul className="list-disc ml-6 mt-2 text-purple-600">
              <li>In case any of your flight(s) are rescheduled, delayed or canceled by the respective airline causing you to miss the flight(s) to your destination;</li>
              <li>If you miss a connecting flight due to baggage delays or losses outside your reasonable control; and</li>
              <li>If you miss a connecting flight because of customs- or immigration processes outside your reasonable control.</li>
            </ul>
          </p>
          <p>
            The Self-transfer Guarantee does not apply:
            <ul className="list-disc ml-6 mt-2 text-purple-600">
              <li>If the Change only affects flight(s) within the same ticket (issued as one e-ticket/PNR). The airline providing the flight(s) is responsible for any issues and for managing the Flight Changes (you may contact the applicable airline directly for assistance and/or questions);</li>
              <li>If the Change is due to force majeure situations, meaning circumstances outside the airline’s reasonable control such as (without limitation) political instability, extreme weather conditions, security risks, strikes, major limitation of airport operation and/or airline bankruptcy/insolvency;</li>
              <li>For any action (or lack of action) which is reasonably within your control, including for example if you miss a flight because (i) you don’t have an appropriate visa, travel documents or any other documentation required for your travel; or (ii) you breach any airline rules and restrictions;</li>
              <li>If you travel with a checked baggage despite booking a self-transfer trip marked with “no checked bag”, i.e. a self-transfer trip with a short connection time;</li>
              <li>If you have made changes to your Booking without our previous approval.</li>
            </ul>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-purple-700">C. Cancellation Guarantee</h3>
          <p>
            If the Cancellation Guarantee is purchased during the booking procedure, You can for any reason contact us after your flight booking to cancel your flights and instead receive an electronic voucher corresponding to 90% of the flight price. The voucher can then be used for a new booking on the Portal. The terms in this Section 9.3 apply to our own service ‘Cancellation Guarantee’, while We are acting within our capacity as an intermediary between You and the relevant airline.
          </p>
          <p>
            The following applies when using the Cancellation Guarantee:
            <ul className="list-disc ml-6 mt-2 text-purple-600">
              <li>Cancellations must be made in accordance with Section 9.1.4 at least 24 hours before the original time of departure;</li>
              <li>The voucher is valid for 12 months from the date of issue;</li>
              <li>The voucher cannot be transferred to any other person;</li>
              <li>The Cancellation Guarantee is only valid for flights purchased on the Portal; and</li>
              <li>The Cancellation Guarantee cannot be added to an existing flight booking after it has been completed.</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
