import {
    PrivacyPolicyHeroCard,
    PrivacyPolicyHeroTitle,
    PrivacyPolicyHeroSubTitle,
    PrivacyPolicyContentWrapper,
    PrivacyPolicyContent,
    PrivacyPolicyFooter,
    PrivacyPolicyFooterTitle,
} from "./generalPolicyStyling";
import Footer from "../../components/footer/footer";
import HelmetTags from "../../components/Helmet/HelmetTags";

export default function GeneralPolicy() {
    return (
        <>
            <HelmetTags title="Help | Anystay" />
            <PrivacyPolicyHeroCard>
                <PrivacyPolicyHeroTitle>Terms of Service</PrivacyPolicyHeroTitle>
            </PrivacyPolicyHeroCard>
            <PrivacyPolicyContentWrapper>
                <PrivacyPolicyContent>
                    {/* <PrivacyPolicyHeroSubTitle>Guests</PrivacyPolicyHeroSubTitle> */}
                    <strong>1. Introduction</strong>
                    <br />
                    <br />
                    1.1 Anystay.com (“The Platform”, “We”, “Our”, “Us”) provides an online platform and various tools, services, and functions which enable property owners to list property and
                    travellers to book such property (together the “Services”). Services are provided via country specific URL’s, including, in Australia, www.anystay.com.au and via mobile
                    applications (for mobile phone, tablet and other devices or interfaces) (collectively, the "Site"). Booking payments conducted through the Site (the “Payment Services”) are handled
                    by third party payment providers, and/or Owners that are integrated property managers. Payment Services are subject to the terms and conditions of those Owners and third-party
                    payment providers, outlined in Terms of Payment Services.
                    <br />
                    <br />
                    1.2 These terms and conditions (the “Traveller T&Cs”) together with the Privacy Statement govern the relationship between Anystay.com and any individual using or accessing the Site
                    and any of the content or services available through it as a traveller or potential traveller, and who is not using it in their capacity as a property owner or property manager
                    (each, a “Traveller” or “you”). Travellers include people who use the Site to access information about and to book properties, whether for business or leisure purposes, from
                    property owners or property managers.
                    <br />
                    <br />
                    1.3 The Traveller T&Cs constitute a legally binding agreement between Anystay.com and the Traveller. By using or accessing the Site or our platforms or systems, you acknowledge
                    that you agree to and are subject to the Traveller T&Cs and our Privacy Statement on behalf of yourself and all persons named or otherwise travelling on your booking. A Traveller’s
                    booking through or use of Anystay.com is governed by the terms and conditions on this site through which the booking is finalised. If you do not accept and agree to the Traveller
                    T&Cs without modification, you are not authorised to access or otherwise use the Site.
                    <br />
                    <br />
                    1.4 Anystay.com does not authorise anyone to register with, or to otherwise use, this Site unless they have the capacity to enter into legally binding contracts.
                    <br />
                    <br />
                    1.5 Anystay.com may revise these Traveller T&Cs at any time by posting an updated version to this web page. You should visit this page periodically to view the most current
                    Traveller T&Cs because they are binding on you. Any changes made after you have made a booking will not affect that booking unless we are required to make the change by law.
                    <br />
                    <br />
                    <strong>2. The Basics</strong>
                    <br />
                    <br />
                    2.1 This Site is a place where Travellers can view listings of, and obtain information about, properties offered for rent (each a "Property" and together the “Properties”) by
                    others, including property owners, lessees and managers (each, an “Owner” and collectively with a Traveller, the “users”). We may also offer other tools or services to allow users
                    to communicate with each other and to enter into rental agreements or other transactions with each other.
                    <br />
                    <br />
                    2.2 The Site acts only as a platform for users to interact with each other. Anystay.com is not, and does not become, a party to any contractual relationship between the Traveller
                    and the Owner in respect of any booking, Property or payment, and does not mediate between the Traveller and the Owner in the event of any dispute arising between them. You
                    acknowledge and agree that the Traveller and the Owner will be responsible for performing the obligations of any such agreements, that Anystay.com is not a party to such agreements
                    and that Anystay.com disclaims all liability arising from or related to any such agreements. This is true even if the Site facilitates a booking for a Property or the use of other
                    Services, as Anystay.com is not a party to any rental or other agreement between Travellers and Owners.
                    <br />
                    <br />
                    2.3 Travellers are responsible for, and agree to abide by, all laws, rules and regulations applicable to their use of the Site, their use of any Services and any transaction they
                    enter into either on the Site or in connection with their use of the Site. Travellers should please note that Owners are responsible for and agree to abide by all laws, rules and
                    regulations applicable to the listing and rental of their Property and the conduct of their rental property business. Please be aware that even though we are not a party to any
                    rental transaction and assume no liability for legal or regulatory compliance pertaining to any Property Listed on the Site, there may be circumstances where we are nevertheless
                    obligated or required (as we may determine in our sole discretion) to provide information relating to any listing in order to comply with governmental or regulatory body
                    investigations, litigation or administrative proceedings, and we may choose to comply with or disregard such obligation in our sole discretion.
                    <br />
                    <br />
                    2.4 Anystay.com may charge a service fee payable by Travellers who book a Property on the Site via the Site checkout. The service fee covers the use of the Site, including such
                    features as ongoing support, and is calculated as a percentage of the total rental amount (which may include additional fees and damage deposits charged by the Owner). Depending on
                    the laws of the jurisdiction where the Traveller and/or Owner resides, the service fee may be subject to (or may include) GST, Stay Taxes (as detailed in section 2.7), or any other
                    equivalent indirect taxes that are applicable. Owners agree not to encourage or advise a Traveller to avoid or circumvent the service fee charged by Anystay.com, and Traveller
                    agrees not to avoid or circumvent the service fee.
                    <br />
                    <br />
                    2.5 Anystay.com may be required to collect and remit taxes (inclusive of GST, sales taxes, or other equivalent taxes) on the Service Fee. Where required, Anystay.com will provide
                    the Traveller with an invoice stating the amount of taxes charged on such Service Fee. If the Traveller is entitled to an exemption from indirect taxes or their equivalent on the
                    Service Fee, it must provide Anystay.com with required documentation and support for such exemption
                    <br />
                    <br />
                    2.6 If the Traveller is a business traveller that is GST registered or an employee of a company that will reimburse GST charged, it must provide Anystay.com with the valid GST
                    number and its related billing address, in order for Anystay.com to apply the reverse charge mechanism, where applicable, to the Service Fee. If the Traveller has a billing address
                    in Australia, the reverse charge mechanism is not applicable and an Australian GST charge will apply.
                    <br />
                    <br />
                    2.7 Collection and remittance of the Stay Tax: Travellers are liable for the payment of any tourist tax, lodging tax, tourism tax, or other similar taxes as requested by local
                    jurisdiction (“Stay Tax”), which tax must be generally collected by the Owners. In certain jurisdictions, Anystay.com may decide in its sole discretion to directly collect and
                    remit the Stay Tax on behalf of the Owners. In such case, the Owners will have no action to take regarding the collection from the Travellers and the remittance to the city of this
                    tax. In any jurisdictions in which such process will be implemented, Owner instructs and authorizes Stays to collect the Stay Tax from the Travellers on their behalf and to proceed
                    to the relevant tax filing requirements before the City, including its remittance.
                    <br />
                    <br />
                    2.8 The Site contains Listings (defined below) provided by Owners and content from other third parties. Such content is the responsibility of the Owner or third party creator of
                    the content. We have no responsibility for such content as we merely provide access to the content as a service to you and provide you with the facility to communicate directly
                    with the Owner to enquire about a Property and make bookings with the Owner for the rental of such Property. All bookings you make are made directly with the Owner and your
                    contract will be with the Owner. Any such contract will govern your right to occupy and use the Property, and may contain obligations to pay additional fees and taxes. Anystay.com
                    has no liability to you for the Owner’s provision of the Property. We do not endorse, support, represent or guarantee the truthfulness, accuracy or reliability of any information
                    in the Listings or any opinions/content posted by third parties.
                    <br />
                    <br />
                    2.9 Anystay.com allows Travellers to display prices on the Site in the currency of their choice and may also allow Travellers to pay in the currency of their choice. Different
                    currency choices are generally based on publicly available currency rates and are not guaranteed to be the best rate available. If your currency of choice is not supported for a
                    booking, you'll be charged in the Owner's selected currency. In any event, the currency and exact amount you will pay will be displayed clearly at check out. Our overall
                    compensation may be affected by the currency you choose to pay in. Note that if you pay in a currency different than the currency of your card, your bank or card provider may
                    charge you foreign exchange, transaction, or other fees.
                    <br />
                    <br />
                    <strong>3. Property Listings and Interaction with Owners</strong>
                    <br />
                    <br />
                    3.1 Please note that Owners are entirely responsible for all of the information, including images, text and other content, relating to the Properties they offer (“Listings”), for
                    updating them and ensuring (where relevant) that they are correctly translated. Thus, where a Listing is linked to an automated translation facility, such as Google Translate, it
                    is the Owner’s responsibility to ensure that the resulting translation is accurate, and to correct any deficiencies.
                    <br />
                    <br />
                    3.2 Travellers that use the Site to send enquiries, book a property or who register with us will receive our newsletter. Anystay.com may offer different newsletters from time to
                    time intended to enhance the services offered by Anystay.com or our partners. Travellers may opt-in to receiving newsletters when sending enquiries or opt-out of receiving
                    newsletters when booking on the Site, or cancel their subscription to these email newsletters at any time through the Communications Preference Centre, although it may take a short
                    while for the changes in your preferences to become effective.
                    <br />
                    <br />
                    3.3 The Traveller will receive a confirmation email from Anystay.com once an Enquiry has been sent to the Owner.
                    <br />
                    <br />
                    3.4 The Owner may then communicate with the Traveller directly in connection with the Enquiry and Travellers and Owners may also communicate with each other via the Site (and via
                    other tools on the Anystay.com platform).
                    <br />
                    <br />
                    3.5 Traveller can request a booking online, which: (i) for instant confirmation properties, can be confirmed without a delay from requesting the booking; and (ii) for all other
                    properties, shall be approved or declined by the Owner within 24 hours. For online payment, a Traveller whose booking was confirmed can pay with their credit card or other
                    supported payment methods through the payments gateway offered by our third party payment provider and/or the Owner. The online payment service is subject to the terms and
                    conditions of the third party payment provider, or the Owner and Traveller agrees and acknowledges that (with exception of any obligation to instruct third party service providers)
                    Anystay.com has no control over or any responsibility for this service.
                    <br />
                    <br />
                    3.6 Enquiries sent by a Traveller to an Owner on the Site, may include Traveller’s personal information (including email address, phone numbers and other information the Traveller
                    provides) and the Owner may use such personal information in order to respond to the Traveller.
                    <br />
                    <br />
                    3.7 Any communication between Travellers and Owners using the Anystay.com platform must not include email addresses or phone numbers. Please be aware that any communication on the
                    Site (or through the Anystay.com platform) may be monitored and will be available to view by Anystay.com employees and representatives. Please also be aware, in accordance with our
                    security and account requirements, we may remove or redact information from any such communications (for example, email addresses, phone numbers or other content we deem to be
                    inappropriate or non-compliant with the Traveller T&Cs or applicable laws and regulations).
                    <br />
                    <br />
                    3.8 Anystay.com may, from time to time, use third party email servers to send and track receipt of the Enquiry emails, and analyse the pattern of Enquiry usage reported by these
                    third party tracking systems. Our system does not hold messages indefinitely and they may not be accessible after the message has been delivered to you. Please print a copy of any
                    message which is important to you – for example a payment receipt or a booking confirmation.
                    <br />
                    <br />
                    3.9 Anystay.com has no responsibility for or otherwise stated involvement in, the communications between the Owner and Traveller.
                    <br />
                    <br />
                    <strong>4. Registration and establishing an Account</strong>
                    <br />
                    <br />
                    4.1 Should Travellers wish to use any Services available on the Site other than simply searching for a listing, they must register with the Site. Anystay.com does not authorise
                    anyone to register with the Site unless they are able to enter into legally binding contracts. As a result of successfully completing the registration process, the Traveller
                    obtains a user account for the Site (an “Account”).
                    <br />
                    <br />
                    4.2 To obtain an Account, a Traveller must follow all of the instructions given by Anystay.com during the registration process. A Traveller can sign up for an Account using a
                    personal phone number or alternatively can sign up using Facebook and/or Google login credentials by clicking on the respective login button on the registration screen.
                    <br />
                    <br />
                    4.3 The Traveller’s Account includes information which is made publicly available to other users of the Site and can also be seen by other internet users not registered on the
                    Site, for example, it may show up in Google search engines. An Account includes, amongst other things:
                    <br />
                    <br />
                    • A dedicated page, known as “Profile info” page, on which the Traveller’s profile name will be listed as a mandatory field. Other personal and travel information are optional, at
                    the discretion of the Traveller;
                    <br />
                    • The ability to monitor specific Properties;
                    <br />
                    • Save favourite Properties;
                    <br />
                    • Add notes and create lists;
                    <br />
                    • Save comments on Properties;
                    <br />
                    • Place reviews of rented Properties;
                    <br />
                    • Link Traveller’s Facebook account. By logging in with Facebook or linking an Account with Facebook, the Traveller agrees to transfer their login credentials from Facebook and to
                    display the list of Facebook friends who also have an account with Anystay.com. This information will be displayed on Traveller profile page.
                    <br />
                    • Share favourite Properties or lists with others, such as friends and family and social networks.
                    <br />
                    • A link to Owner Reviews (as defined below)
                    <br />
                    <br />
                    4.4 Travellers can deactivate their Account at any time and they can also unlink their Account and public page from Facebook at any time. Travellers can unlink their Accounts by
                    going directly to their Traveller profile settings page. You understand and accept that even if you deactivate your Account data could be retained by Anystay.com under the terms of
                    the Privacy Statement. You understand and consent to the use of your data as outlined in the Privacy Statement. You also understand and accept that data relating to your
                    transactions with Anystay.com could have been transmitted to and remain on other sites.
                    <br />
                    <br />
                    4.5 Anystay.com also uses Google Analytics to gather statistics on Site usage. There are more details in the Privacy Statement and in Google’s own privacy policy. Google may
                    aggregate data they collect from their various services including Google Analytics, Google Translate, Google Maps and other Google services including YouTube. You understand and
                    accept that the Anystay.com has no control over Google’s data collection.
                    <br />
                    <br />
                    <strong>5. Rights and obligations of Anystay.com</strong>
                    <br />
                    <br />
                    5.1 Anystay.com will endeavour to reproduce accurately on the Site any photographs supplied by Owner.
                    <br />
                    <br />
                    5.2 Further, you acknowledge that each Owner and not Anystay.com is responsible for the accuracy with which the photos and descriptions depict the relevant Property.
                    <br />
                    <br />
                    5.3 Anystay.com may occasionally undertake upgrades and maintenance of the Site, its platforms and systems. These works may result in restrictions on usage. Anystay.com will, where
                    possible, aim to ensure that such works are undertaken at a time when most Travellers’ usage is least affected.
                    <br />
                    <br />
                    5.4 User verification on the Internet is difficult and we cannot and do not assume any responsibility for verification of each user's purported identity. We encourage Travellers
                    and Owners to communicate directly with each other through the tools available on the Site. We further encourage Travellers to take other reasonable measures to assure yourself of
                    an Owner's identity and of the Property and relevant details of your booking or proposed booking. You agree to: (i) keep your password and online ID for both your Account and your
                    email account secure and strictly confidential, providing it only to authorised users of such accounts, (ii) instruct each person to whom you give your online ID and password that
                    he or she is not to disclose it to any unauthorised person, (iii) notify us immediately and select a new online ID and password if you believe your password for your Account may
                    have become known to an unauthorised person or has otherwise been compromised, and (iv) notify us immediately if you are contacted by anyone requesting your online ID and/or
                    password. Further, if we suspect any unauthorised access to or use of your Account, upon our request you must promptly change your ID and password and take any other related
                    action(s) as we may reasonably request. We discourage you from giving anyone access to your online ID and password for your Account. However, if you do give someone your Account ID
                    and/or password, or if you fail to adequately safeguard such information, you are responsible for any and all transactions that the person performs while using your Account and/or
                    your email account, even those transactions that are fraudulent or that you did not intend or want performed. For the avoidance of doubt, Anystay.com will have no liability to you
                    in any such event.
                    <br />
                    <br />
                    5.5 You acknowledge and agree that Anystay.com is not responsible for checking the identity, or for the behaviour, of Owners or for establishing the nature, condition or existence
                    of a Property.
                    <br />
                    <br />
                    5.6 Anystay.com reserves the right to transfer these Traveller T&Cs, and to assign or subcontract any or all of its rights and obligations under these Traveller T&Cs, to a third
                    party, but will not do so in such a way as to reduce any guarantees you are given under these Traveller T&Cs.
                    <br />
                    <br />
                    5.7 The property listings displayed in a given set of search results depend primarily on the particular combination of property parameters and filters entered by the traveller.
                    Search criteria may include such things as property location, dates of stay, number of travellers, type and nature of accommodations, desired property attributes and amenities, and
                    price range, all of which are processed in accordance with our computer algorithms to find listings that most closely match those criteria. The order of appearance of those
                    listings among all of the properties on the platform that meet the traveller’s search criteria (i.e., the sort order) then may be influenced further by traveller-selected sort
                    preferences, such as low-to-high pricing or high-to-low ratings; as well as factors that are compared automatically by sort-algorithms, such as popularity of the property among
                    other travellers, quality of the property and the listing content, competitiveness of rates and availability, and the amount we will earn in service fees, all relative to other
                    properties that meet the traveller’s criteria. Traveller search-results and property sort-order are dynamic, and will vary from search to search, based on demand, availability,
                    changes in partner status or listing popularity, and so on. In addition, as we continue to make improvements in our programs and tools, we may run tests or modify our default
                    sort-order algorithms from time to time to help improve both the traveller and partner platform experience.
                    <br />
                    <br />
                    5.8 When you make a booking for a Property sourced through the Site, Anystay.com in most instances will receive a commission for that booking.
                    <br />
                    <br />
                    <strong>6. Intellectual Property</strong>
                    <br />
                    <br />
                    6.1 All content that appears on the Site is protected by copyright and other applicable intellectual property rights. To the maximum extent permitted by law, reproduction of the
                    Site, in whole or in part, including the copying of text, graphics or designs, is prohibited.
                    <br />
                    <br />
                    6.2 Travellers are permitted to download, display or print individual pages of the Site to evidence any agreement with Anystay.com and to retain a copy of their bookings. The
                    relevant file or the relevant printout must clearly bear the text “© Copyright [Present Year] Anystay.com - All Rights Reserved”.
                    <br />
                    <br />
                    6.3 Where a Traveller submits to or transmits through the Site (or Anystay.com’s platform or systems) any content of any type, including text or images, the Traveller undertakes
                    that it has the legal rights to do so.
                    <br />
                    <br />
                    6.4 To the extent that Travellers’ reviews or other content may contain trademarks or other proprietary names or marks, Travellers undertake that they have the right to use such
                    names or marks.
                    <br />
                    <br />
                    6.5 By submitting any form of content to the Site (including but not limited to all text, descriptions, reviews, photographs, and the like), the Traveller grants Anystay.com and
                    each of their subsidiary and affiliate companies, a non-exclusive, royalty-free, perpetual, transferable, irrevocable and fully sub-licensable (through multiple tiers) right to
                    use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from and publicly display and perform any such content throughout the world in any media, now
                    known or hereafter devised for any purpose.
                    <br />
                    <br />
                    6.6 Copyright Infringement Complaints -- Pursuant to the Digital Millennium Copyright Act (in the US), the E-Commerce Directive (in the EU), and similar laws relating to
                    copyrighted online content, if you believe your copyrighted work is being infringed on or through the Site, please complete and submit a written Anystay.com Copyright Infringement
                    Complaint Form (the "Notice") to our general contact email. Upon receipt of a Notice, Anystay.com will take appropriate action, including removal of the challenged material from
                    the Site and/or termination of the account of the Anystay user in appropriate circumstances. Please include in the Notice:
                    <br />
                    <br />
                    1. Identification of the copyrighted work claimed to have been infringed, or, if multiple copyrighted works at a single online site are covered by a single notification, a
                    representative list of such works at that site.
                    <br />
                    2. Identification of the images or material that is allegedly infringing your copyrighted work or is the subject of infringing activity and that you believe should be removed, with
                    sufficient information to enable Anystay.com to locate the specific images or material. <br />
                    3. Your contact information, including your name, address, telephone number, and, if available, an email address at which you may be contacted. <br />
                    4. The following statement: I have a good faith belief that use of the material in the manner complained of is not authorised by the copyright owner, its agent, or the law. <br />
                    5. The following statement: The information in this Notice is accurate, and, under penalty of perjury, I declare that (choose one) (i) I am the owner or (ii) I am authorised to act
                    on behalf of the owner, of an exclusive right that is allegedly infringed. <br />
                    6. And a physical or electronic signature of a person authorised to act on behalf of the owner of the exclusive right that is allegedly being infringed. <br />
                    <br />
                    <br />
                    <strong>7. Travellers’ Accounts, Communications and Reviews</strong>
                    <br />
                    <br />
                    7.1 Travellers must provide only accurate, complete and truthful information concerning their identity in their Accounts and profile pages, and any other communications on the
                    Site, including reviews of Properties.
                    <br />
                    <br />
                    7.2 Messages sent via Anystay.com’s systems should only relate to genuine booking Enquiries. We do not tolerate spam or unsolicited commercial electronic communications of any
                    kind. It is prohibited to misuse Anystay.com’s systems, such as by sending unsolicited commercial communications (spam) or disclosing personal information of users to a third
                    party, unless you have the express permission from the user. Emails and Site recommendations transmitted via the “Recommend this Site” function should only be sent with the
                    recipient’s consent. You agree that you will protect other users’ personal information with the same degree of care with which you protect your own confidential information (using
                    at minimum a reasonable standard of care), and you assume all liability for the misuse, loss, or unauthorised transfer of such information.
                    <br />
                    <br />
                    7.3 Travellers may post their reviews of Owners’ Properties (“Traveller Reviews”) on the Site. The Owner is given the opportunity to view Traveller Reviews and to respond to them
                    (an “Owner Response”). Owners will also be given the opportunity to rate the Traveller’s stay (“Owner Review(s)”) and such Owner Reviews will be made available to other Owners you
                    contact. Owner Reviews cannot be used to exclude or discriminate against individuals. The Traveller’s sole remedy in relation to Owner Reviews, and Anystay.com’s sole obligation in
                    relation to Owner Reviews, is to permit the Traveller to post a Traveller Review within 14 days of the submission of the Owner Review. Anystay.com otherwise expressly disclaims any
                    liability for any Traveller Review or Owner Review. Traveller acknowledges and agrees that Anystay.com may make such Owner Review available to other Owners who the Traveller
                    contacts through the Site. More detail as to the Owner Review process is available here.
                    <br />
                    <br />
                    7.4 Please note that Anystay.com does not, and realistically does not have the resources to, verify the accuracy or otherwise of Traveller Reviews, Owner Responses or Owner
                    Reviews.
                    <br />
                    <br />
                    7.5 Anystay.com nevertheless requires all Traveller Reviews, Owner Responses, Owner Reviews and other communications using Anystay.com’s systems to conform to the Content
                    Guidelines, and may decline to post any of them that Anystay.com finds do not comply.
                    <br />
                    <br />
                    7.6 Anystay.com does not generally conduct identity checks. If Travellers suspect that an Owner has supplied false information, they are invited to notify Anystay.com through the
                    contact form.
                    <br />
                    <br />
                    7.7 Anystay.com complies with its Privacy Statement. Further details can be obtained from the Privacy Statement. The Traveller consents to the collection, use and handling of their
                    data as outlined in the Privacy Policy. Travellers should note, Owners have generally authorised Anystay.com to forward the Owner’s contact details, including telephone number, to
                    Travellers in connection with a Property booking. Travellers may ask for these details to be supplied on production of proof of the booking; alternatively, these details may be
                    made available to Travellers through their Accounts.
                    <br />
                    <br />
                    <strong>8. Indemnification</strong>
                    <br />
                    <br />
                    You agree to defend, indemnify and hold harmless Anystay.com and its equity holders, officers, directors, employees and agents against any claims, causes of action, demands,
                    recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature, including but not limited to reasonable legal and accounting fees, brought or
                    occasioned by third parties alleging, arising out of, or in connection with: (a) any material or content you provide in connection with the Site; (b) your use of the Site
                    (including, without limitation, any content on the Site); (c) any breach by you of these Traveller T&Cs; or (d) your use of the Property. Anystay.com will provide notice to you
                    promptly of any such claims.
                    <br />
                    <br />
                    <strong>9. Prohibitions</strong>
                    <br />
                    <br />
                    The Traveller must not directly or indirectly:
                    <br />
                    <br />
                    • with respect to the Site, its content, and databases comprised in the Site, in any form, whether by using automatic devices or manual processes, exploit, copy, distribute,
                    reproduce, edit, translate, make publicly accessible or decompile any of the same; • monitor content on the Site or Anystay.com’s platform or systems by means of robots, spiders,
                    or other automatic instruments; provided, however, that a limited exception from the foregoing exclusion is provided to general purpose internet search engines (not including any
                    website or search engine or other service that provides classified listings or adverts for properties available for booking, or any subset of the same or which is in the business
                    of providing services that compete with Anystay.com) and non-commercial public archives that use tools to gather information for the sole purpose of displaying hyperlinks to the
                    Site, provided they each do so from a stable IP address or range of IP addresses using an easily identifiable agent and comply with Anystay.com’s robots.txt file;
                    <br />
                    • use the Site or Anystay.com’s platform or systems for purposes other than those referred to in these Traveller T&Cs;
                    <br />
                    • use the Site or the Services for the purpose of booking or soliciting a rental for a property other than a Property under a valid Listing;
                    <br />
                    • reproduce any portion of the Site on another website or otherwise, using any device including, but not limited to, use of a frame or border environment around the Site, or any
                    other framing technique to enclose any portion or aspect of the Site, or mirror or replicate any portion of the Site;
                    <br />
                    • upload or send to the Site (or Anystay.com’s platform or systems) any contents or programs, which on account of their size or nature, might damage Anystay.com’s computers or
                    networks;
                    <br />
                    • include content on the Site (or Anystay.com’s platform or systems) that breaches any applicable criminal or other laws, or encourages any such breach;
                    <br />
                    • use or access the Site or Anystay.com’s platform or systems in any way that might endanger any computer system or network, including by making available any virus (for which
                    purpose, “virus” includes any program introduced into a system deliberately which carries out a useless and/or destructive function, such as displaying an irritating message or
                    systematically over-writing the information on a user's hard disk);
                    <br />
                    • post or transmit information that is in any way false, fraudulent, or misleading, or engage in any act that may be considered “phishing” (whether primary, secondary or other) or
                    that would give rise to criminal or civil liability;
                    <br />
                    • post or transmit any unlawful, threatening, abusive, libellous, defamatory, obscene, vulgar, indecent, inflammatory, sexually explicit, pornographic or profane material
                    <br />
                    <br />
                    <strong>10. Right to delete content</strong>
                    <br />
                    <br />
                    Travellers are responsible for ensuring that their communications, and content posted, through or in connection with the Site, including Traveller Reviews and communications with
                    Owners, do not infringe applicable law, the rights of any person or entity, or contain false information, personal insults, anything libellous, slanderous or defamatory, anything
                    that infringes copyright, data protection law or the Content Guidelines. Anystay.com may review any content on the Site or Anystay.com’s platform or systems and delete it or alter
                    it when it is no longer accurate or up-to-date. Without prejudice to any other available remedies, Anystay.com shall be entitled immediately to remove from the Site any
                    communications or content that infringes these requirements, and to suspend or prevent the usage of any related Account.
                    <br />
                    <br />
                    <strong>11. Notifications</strong>
                    <br />
                    <br />
                    11.1 Any messages to us may be sent using the contact form.
                    <br />
                    <br />
                    11.2 Notifications of copyright infringement must contain:
                    <br />
                    <br />
                    • your postal address, telephone number and email address;
                    <br />
                    • precise details about the content in question (insertion of the text or image) including a link to the website;
                    <br />
                    • a signed declaration in lieu of an oath, which evidences that you:
                    <br />
                    o hold the exclusive rights to use the work; and
                    <br />
                    o have not authorised the use of the material in question in this form.
                    <br />
                    <br />
                    <strong>12. Liability of Anystay.com</strong>
                    <br />
                    <br />
                    12.1 The Site is merely a platform allowing you to view Properties listed on the Site, communicate with Owners in respect of any queries or questions you may have, or to make a
                    booking with an Owner for the rental of a Property. We accept no liability in relation to any contract you enter into with an Owner or for any Property you book, nor do we accept
                    liability for the acts or omissions of any Owners or other person(s) or party(ies) connected with the Property. For all Properties, your contract will be with the Owner and their
                    terms and conditions will apply to your booking. These terms and conditions may limit and/or exclude their liability to you and you should read them carefully before making a
                    booking.
                    <br />
                    <br />
                    12.2 We do not provide liability insurance protection for Owners, property managers, or Travellers; regardless of whether a user obtains insurance coverage through one of our third
                    party providers. Travellers are advised to obtain suitable travel insurance to cover their booking for the Property from an Owner, including in the event they have to cancel their
                    booking. It is the Traveller’s responsibility to ensure that the insurance it purchases is adequate and appropriate for the Traveller’s particular needs.
                    <br />
                    <br />
                    12.3 To the extent permitted by law, but subject to clause 12.4, in no event will Anystay.com or any of its subsidiaries, affiliates, officers, directors, consultants, agents
                    and/or employees or any third party provider of a tool offered on any site of a member of Anystay.com be liable for any lost profits or any indirect, consequential, special,
                    incidental, or punitive damages arising out of, based on, or resulting from the Site or Anystay.com’s platform or systems, any materials or content you submit to the Site, and your
                    use of the Site and/or any transaction between users, even if Anystay.com has been advised of the possibility of such damages. These limitations and exclusions apply without regard
                    to whether the damages arise from breach of contract, negligence or any other cause of action. If you are dissatisfied with the Site (or the Anystay.com platform or systems) or you
                    do not agree with any part of these Traveller T&Cs, then your sole and exclusive remedy against Anystay.com is to discontinue using the Site.
                    <br />
                    <br />
                    12.4 Nothing in these Traveller T&Cs affects any rights you may have and which by law cannot be excluded, including under the Competition and Consumer Act 2010 (Cth) (including,
                    without limitation, under the Australian Consumer Law, contained in Schedule 2 of that Act) and under State and Territory consumer protection legislation.
                    <br />
                    <br />
                    <strong>13. Disputes</strong>
                    <br />
                    <br />
                    13.1 Anystay.com is committed to customer satisfaction, so if you have a problem or dispute, we will try to resolve your concerns. But if we are unsuccessful, you may pursue claims
                    as explained in this section.
                    <br />
                    <br />
                    13.2 You agree to first give us an opportunity to resolve any disputes or claims relating in any way to the Site, these Traveller T&Cs, any dealings with our customer service
                    agents, any services or products provided, any representations made by us, or our Privacy Policy (“Claims”) by contacting us. If we are not able to resolve your Claims within 60
                    days, you may seek relief through arbitration or in small claims court, as set forth below.
                    <br />
                    <br />
                    13.10 These Traveller T&Cs are governed by the laws of New South Wales, Australia. Use of this Site is unauthorised in any jurisdiction that does not give effect to all provisions
                    of this Agreement, including, without limitation, this paragraph.
                    <br />
                    <br />
                    <strong>14. Miscellaneous</strong>
                    <br />
                    <br />
                    14.1 These Traveller T&Cs and the Privacy Policy constitute the entire agreement between Anystay.com and Traveller relating to their subject matter.
                    <br />
                    <br />
                    14.2 Anystay.com recommends that you save your own copy of these Traveller T&Cs in a separate file on your device or in print-out form.
                    <br />
                    <br />
                    14.3 Anystay.com’s failure to act with respect to a breach of these Traveller T&Cs by the Traveller or others does not waive Anystay.com’s right to act with respect to subsequent
                    or similar breaches.
                    <br />
                    <br />
                    14.4 The headings are for ease of reference only and do not affect the interpretation or construction of these Traveller T&Cs.
                    <br />
                    <br />
                    14.5 The invalidity of one or more provisions of these Traveller T&Cs shall not affect the validity of the other provisions.
                    <br />
                    <br />
                    14.6 Travellers staying in a Property in New South Wales must comply with their obligations under the NSW Short-term Rental Accommodation Industry Code of Conduct. The Code also
                    places obligations on Owners and platforms (like us). We recommend you familarise yourself with any obligations applicable to you under the Code, which for Travellers can be found
                    in section 2.5.
                    <br />
                    <br />
                </PrivacyPolicyContent>
                <PrivacyPolicyContent>
                    Host Terms of Service 1. General introduction 1.1 Anystay Pty Ltd (“Anystay”, “We”, “Site”, “The Platform”) provides an online platform and various tools that allow property owners
                    and agents (Hosts) to list their properties and guests to book them. These services are available through https://www.anystay.com.au, and through mobile applications. Booking
                    payments are handled by third-party payment providers, integrated partners, or Anystay Pty Ltd (for payment services only). The terms and conditions of these providers apply to the
                    payment services. 1.2 The terms and conditions (“Host ToS”), along with the Privacy Policy, govern the relationship between Anystay and anyone who uses the site to offer or list a
                    property for rent, including property owners, lessees, and property managers (“Hosts”). 1.3 The Host ToS form a legally binding agreement between Anystay and the Host. By using or
                    accessing the site or Anystay’s platforms or systems as a Host, you agree to the Host ToS. These apply to all Hosts. If you do not accept and agree to the Host ToS without
                    modification, you are not authorized to access or use the site. 1.4 If the Host is a company, partnership, or other entity, any person who uses the site and agrees to the Host ToS
                    on behalf of the Host represents that they have the authority to bind the Host to these ToS. 1.5 Anystay only allows registration on this site by those who can enter into legally
                    binding contracts. Each Host promises that all information submitted to us and to the site during registration will be complete, true, and correct. Hosts also agree to promptly
                    notify Anystay of any updates to any contact information previously submitted. 1.6 Anystay may revise the Host ToS at any time by posting an updated version on this web page. You
                    should periodically visit this page to view the most current Host ToS because they are binding on you. 1.7 Hosts who violate the Host ToS may have their access to and use of the
                    site suspended, and their listings may be amended and/or removed from the site, at Anystay’s discretion. This is in addition to any other legal rights and remedies available to
                    Anystay under these Host ToS or otherwise. 2. This platform is a venue only 2.1 This Site serves as a marketplace that allows Hosts to list one or more properties for rent
                    (“Properties”) with various pricing structures for potential guests (and all individuals named in the booking) (“Guests”). Together, Hosts and Guests are referred to as “Users”.
                    The site may also provide online booking requests, instant bookings, and other tools or services to facilitate communication and transactions between Users. 2.2 The Site merely
                    provides a platform for Users to interact. Anystay is not a party to any contractual relationship between the Guest and the Host regarding any booking, Property, or payment, and
                    does not mediate disputes between them. It is acknowledged and agreed that the Guest and the Host are responsible for fulfilling the obligations of any such agreements. Anystay is
                    not a party to these agreements and disclaims all liability related to these agreements. This holds true even if the Site facilitates a Property booking or the use of other
                    Services, as Anystay is not a party to any rental or other agreement between Guests and Hosts. 2.3 Hosts and Guests agree to comply with all laws, rules, and regulations applicable
                    to their use of the Site, their use of any Services, and any transaction they enter into on the Site or in connection with their use of the Site. Hosts further agree to comply with
                    all laws, rules, and regulations applicable to the listing of their Property and the operation of their business. This includes, but is not limited to, laws, rules, regulations, or
                    other requirements related to taxes, credit cards, data security, data privacy, permits, planning or license requirements, local authority requirements, health and safety
                    compliance, and compliance with all anti-discrimination and housing laws, lease or other property restrictions. Even though Anystay is not a party to any rental transaction and
                    assumes no liability for legal or regulatory compliance related to any Property listed on the Site, there may be situations where we are obligated or required to provide
                    information related to any Listing to comply with governmental or regulatory bodies in relation to investigations, litigation, or administrative proceedings. We may choose to
                    comply with or disregard such obligations at our discretion. 3. Terms of property listings 3.1 Hosts, in accordance with the Host ToS, can list a specific property on the Site via
                    a pay-per-booking listing (“Listing”). 3.2 Upon signing up as a Host on the Site, you will receive our Host newsletter, which is an essential part of the services we offer. We may
                    occasionally offer different newsletters to enhance the services we provide. Hosts can opt-out at the time of signing up or unsubscribe from these email newsletters at any time
                    through Settings, though it may take some time for preference changes to take effect. 3.3 Host Eligibility for Listings 3.3.1 To create a Listing, Hosts must adhere to the
                    practices outlined in this clause 3 and any other requirements that Anystay may notify the Host about from time to time. 3.3.2 Hosts must manage all communications, inquiries, and
                    bookings through Anystay’s platform and tools. The use of external tools and bookings not processed through Anystay’s platform are strictly prohibited. 3.3.3 Payments to Anystay
                    must be made via direct debit. All banking and other payment-related fees are the responsibility of the Host. 3.3.4 Hosts who qualify as Property Managers may apply to Anystay to
                    enter into a separate Property Manager Listing Contract. 3.3.5 Anystay reserves the right to refuse any Listing without reason, including any Listing that could infringe or be
                    associated with the infringement of any provision of these Host ToS. 3.3.6 Hosts must provide only accurate and current information in each Listing and must not impose different
                    conditions on the Guest than those outlined in the Listing. Failure to comply with these Host ToS may result in the Host’s permanent exclusion from the Site and any of our
                    affiliated sites. 3.4 Payment Terms for Listings 3.4.1 Each Listing is made without any upfront fee. However, in return, the Host will be charged and must pay Anystay a Service fee
                    equal to a percentage of the total rental amount inclusive of any additional fees set by the Host on every booking made through the Site (“Service fee”). Anystay reserves the right
                    to change the method for calculating the Service fee, with any changes notified to the Host at least 30 days before the new Service fee calculation method is applied. The new
                    Service fee calculation method will be considered accepted if the Host does not remove their Listing by the time the new Service fee calculation method is applied. 3.4.2 The
                    Service fee will be calculated excluding any amounts charged for taxes and any other product or service purchased by the Guest and charged by Anystay, such as insurance products.
                    It is the Hosts’ responsibility to accurately breakdown the different amounts charged to the Guests. 3.4.3 A breakdown of the applicable fees for your account will be displayed
                    when you list your property on the Site. 3.4.4 All Listings are subject to additional terms, conditions, and requirements as set out during the registration for such Listing
                    (including those of third-party providers). 3.4.5 In addition to online bookings, online payments are required for all Listings. Online payments are handled by third-party payment
                    providers subject to the terms and conditions and privacy policies of such providers. 3.4.6 Listings might be shown on other websites within the Anystay, and on websites of
                    companies that have distribution agreements with Anystay, provided these websites support online payment. However, Anystay only guarantees publication on the Site where the Host
                    initially registered its Listing, subject to Anystay’s discretion to publish or not publish a Listing. 3.4.7 Listings will be shown on the Site indefinitely. However, Anystay
                    reserves the right to remove or refuse to publish any Listing at any time at its sole discretion. The Host also has the option to suspend or remove their Listing at any time,
                    either through their dashboard or by contacting customer service. 4. Using the platform 4.1 When a Host registers, they are provided with a user profile, known as the “Dashboard”,
                    where their contributed data is stored and all their listed Properties are detailed. 4.2 The Dashboard offers various features designed to help Hosts manage their Properties on the
                    site. However, these features and the Dashboard itself are provided “as is”, and Anystay does not guarantee that they will be complete or free from errors. 4.3 The “Online booking”
                    feature allows Guests to book properties online. Guests can pay the Host through an online payments gateway provided by a third-party payment provider. The online payments service
                    is governed by the terms and conditions of the third-party payment provider or the Accommodation Fee Collection Agreement. The Host acknowledges that, apart from Anystay Payments’
                    obligations under the Accommodation Fee Collection Agreement, Anystay has no control over or responsibility for online payment services. 4.4 The Dashboard also gives the Host
                    access to Guest’s Reviews of the Host’s Properties and any available Host Review for a Guest who has contacted the Host. 4.5 Both Guests and Hosts can post reviews on the Site. By
                    posting a review, the reviewer grants Anystay a perpetual, worldwide, irrevocable, unrestricted, non-exclusive, royalty-free, and fully paid-up license to use, copy, license,
                    sublicense, adapt, distribute, display, publicly perform, reproduce, transmit, modify, edit, and exploit the review in connection with the Property and the business of Anystay or
                    its affiliates. Guests can also post their own reviews of Hosts’ Properties (“Guest Reviews”) on the site. The Host can view Guest Reviews and respond to them (“Host Response”).
                    Hosts can also review the Guests’ stay (“Host Review(s)”). The Host guarantees that any posted review complies with Anystay’s Content Guidelines. More details about the Host review
                    process can be found here. Anystay reserves the right to make Host Reviews available to other Hosts whom the Guest contacts via the Site. The Host may not disclose or use Host
                    Reviews further without the Guest’s express consent. Anystay does not verify the accuracy of Guest Reviews or Host Reviews and is not responsible for doing so. Host Reviews cannot
                    be used to exclude or discriminate against individuals. The Host acknowledges that its only remedy in relation to Guest Reviews, and Anystay’s only obligation, is to allow the Host
                    to post a Host Response. Anystay expressly disclaims any liability for any Guest or Host Review. 4.6 Anystay requires all Guest Reviews, Host Responses, Host Reviews, and other
                    communications to comply with the Content Guidelines and may refuse to post any that do not. If any Guest Review, Host Response, Host Review, or other communication appears on the
                    Site but does not comply with the Content Guidelines, Anystay reserves the right to immediately remove the non-compliant content from the Site. 4.7 Communications on the Site and
                    other Services can be reviewed by the Guest and the Host involved in the communication, as well as by Anystay employees and representatives. Please be aware that, in line with our
                    security and account requirements, we may remove or redact information from these communications (such as email addresses, phone numbers, or other content we consider inappropriate
                    or non-compliant with applicable laws and regulations). Hosts are advised to print a copy of any important message, like a payment receipt or booking confirmation, for their
                    records. 4.8 Messages sent through Anystay’s systems should pertain only to legitimate booking inquiries. We do not accept spam or any form of unsolicited commercial electronic
                    communications. Misusing Anystay’s systems, such as by sending unsolicited commercial communications (spam) or disclosing Users’ personal information to a third party without the
                    User’s express permission, is prohibited. Emails and Site recommendations sent via the “recommend this site” function should only be sent with the recipient’s consent. You agree to
                    protect other Users’ personal information in compliance with applicable laws and regulations, and at the very least, with a reasonable standard of care. You assume all liability
                    for the misuse, loss, or unauthorized transfer of such information. 4.9 Anystay is not responsible for or involved in the communications between the Host and Guest. 4.10 Anystay
                    imposes a service fee on Guests who book a Property on the Site through the Site checkout and Hosts who list their Property, subject to the service fee mode selected by Hosts. This
                    service fee, which covers the use of the Site and features like 24/7 support, is calculated as a percentage of the total rental amount (which may include additional fees, taxes,
                    and damage deposits charged by the Host). Depending on the laws of the jurisdiction where the Guest and/or Host resides, the service fee may be subject to (or may include) GST,
                    accommodation taxes, or any other equivalent indirect taxes. Hosts are not allowed to encourage or advise a Guest to evade or bypass the service fee charged by Anystay. 5. Third
                    party services 5.4 Anystay has integrated the Google Translate service into the Site. Hosts can use this service at no cost to translate their Listings. The Host acknowledges and
                    agrees that this is a static machine translation system that may contain errors. After the translation, the Host must review and correct any inaccuracies. Anystay is not
                    responsible for the operation, accuracy, or any other aspect of the Google Translate service. The Host agrees that Google Translate is provided under Google’s terms and conditions
                    of service, which the Host should review before using Google Translate. 5.5 Anystay requires all Hosts to confirm the location of their Listing in their Dashboard. This involves
                    using information from Google Maps to accurately place the Listing location on a map and in regional searches. The Host agrees that Google Maps is provided under Google’s terms and
                    conditions and that Anystay is not responsible for the operation, accuracy, or any other aspect of Google Maps. The Host acknowledges and agrees that Google Maps’ service is not
                    error-free and the Host will ensure that the correct location of the Property is displayed by Google Maps when using this service. 5.6 Anystay also uses Google Analytics (and other
                    analytics platforms) to collect statistics on Site usage. More details can be found in the Privacy Policy and in Google’s own privacy policy. Google may aggregate data they collect
                    from various services, including Google Analytics, Google Translate, Google Maps, and other Google services including YouTube. The Host accepts that the Anystay has no control over
                    Google’s data collection. 5.7 The Host can enable a free SMS service, which notifies the Host about incoming Guest inquiries and booking requests for Listings. The Host understands
                    and agrees that SMS is not 100% reliable and may be subject to connectivity issues, disruptions, and blocking issues beyond Anystay’s control. Additionally, the use of SMS
                    messages, especially when traveling, may incur additional costs for Hosts from telecommunications and network providers, which the Host agrees to accept when signing up for the SMS
                    service. The Host understands and agrees that SMS messages may be monitored and disclosed in accordance with the Privacy Policy. 6. Search ranking Anystay cannot assure that any
                    Listing will appear in a specific order in the search results on a Site. The order of search results can vary based on numerous factors such as search parameters, Listing quality,
                    the frequency of calendar updates, Guest preferences, Host response times, our Service fee level, adherence to our published requirements (including the Marketplace Standards),
                    booking history, online booking capability, and other factors that Anystay may consider important to the user experience from time to time. Anystay reserves the right to employ
                    various search algorithms or methods to optimize search results for specific Guest experiences and the overall marketplace. Listings may not always be included in search results.
                    Listings distributed on third-party sites are not guaranteed to appear on such third-party site in any specific order or at all. Search results and their order may differ on
                    Anystay’s mobile application compared to its website. To enhance the search experience for both Hosts and Guests and to improve the search process, Anystay retains the right to
                    conduct tests of limited duration that may modify how we display Listings and search results. 7. Property Managers Anystay may offer special terms to Hosts who have Listings for
                    more than 15 Properties, referred to as “Property Managers”. These terms can be requested by contacting Anystay. 9. Termination 9.1 Anystay reserves the right to take action if it
                    determines or suspects that: a Host’s listings or other content violate any applicable laws, regulations, or infringe upon the rights of any individual or entity; a Host has
                    misused the Site or submitted inappropriate material; a Host’s listing or rental practices are deemed unfair or unacceptable (for instance, if a Host double-books a property for
                    multiple Guests on the same date, fails to accept bookings when the property is available, cancels previously accepted bookings, or engages in any behavior considered improper
                    within the short-term property rental industry); a Host has repeatedly or significantly violated these Host ToS (including, but not limited to, breaches of clause 4 ‘Using the
                    Service’, clause 12 ‘Rights and obligations of the Host’ or clause 14 ‘Prohibitions’) or any other obligations to Anystay, any Anystay Affiliate, or Guest; a Host has been
                    offensive or abusive to any Guest or any employee or representative of Anystay; a Host has violated clause 14.1.4; a Host’s conversion rate of Guest inquiries and booking requests
                    to confirmed bookings is significantly lower than the average conversion rate on the Site over the past 6 months; a Host has used a false identity; Anystay’s systems or
                    communication platforms have been misused; or Anything similar to the above has occurred in relation to any of Anystay’s Affiliates. In such cases, without limiting any of its
                    other rights, Anystay may, at its sole discretion, (i) modify; (ii) suspend; or (iii) terminate either: (a) any affected Listings, or (b) all Listings associated with that Host
                    (including any additional paid goods and services related to those Listings) immediately and without refunding Listing Fees or any other fees or charges paid by the Host. 9.2 In
                    addition to the right to modify, suspend, or terminate any Listing, Anystay reserves the right to respond to any violation of the Terms or misuse of the Site by, among other
                    things, restricting the Host’s use of the Site, impacting the ranking of a Listing in search results, marking a Listing as “inactive,” and removing or altering information that may
                    be false, misleading, or non-compliant with these Host ToS or any applicable law or regulation. 9.3 Anystay does not assume any obligation or responsibility to investigate
                    complaints. 10. Rights and obligations of Anystay 10.1 Anystay reserves the right to alter, pause, or cease any part of the Site at any time, including the layout and the
                    availability of any Services or content, without prior notice or liability. 10.2 Anystay will strive to accurately reproduce on the Site any photographs provided by the Host.
                    However, Hosts recognize that variations from original photos can occur when scanning non-digital images and due to individual screen settings, and Anystay bears no responsibility
                    or liability for such variations. 10.3 Anystay may periodically perform upgrades of the Site to keep up with technological advancements. As a result, maintenance work may
                    occasionally be required, which could lead to limitations on the Site. Anystay will aim to conduct such maintenance when it least affects the majority of users. 10.4 Anystay may
                    perform identity checks and request proof to verify the existence of a Property and/or a Host and the ownership of the Property. The Host acknowledges that Anystay has the right to
                    conduct identity checks and due diligence on the Host or to require the Host to validate the existence of a Property. If asked, the Host agrees to promptly provide Anystay with
                    such proof of identity or of a Property’s existence as requested by Anystay. Each Host acknowledges that failure to comply with such a request constitutes a violation of these Host
                    ToS. 10.5 Anystay adheres to its Privacy Policy. The Host gives Anystay permission to share the Host’s contact details, including phone number, with Guests in relation to a
                    Property booking. The Privacy Policy provides more details. Anystay may, if necessary (including to prevent fraudulent actions of a third party), disclose a Host’s contact details
                    to a Guest. The Host confirms that they have read the Privacy Policy and consents to the data processing as outlined in those policies. 10.6 Anystay retains the right to transfer
                    these Host ToS, and to delegate or subcontract any or all of its rights and obligations under these Host ToS, to a third party or to any other entity within the Anystay, but will
                    not do so in a way that diminishes any guarantees provided to the Host under these Host ToS. 10.7 We may occasionally offer or facilitate services to Hosts to enhance or improve
                    the quality of their Property Listings. We may also create new or modify the location or geographic descriptions we use to identify properties in Listings and search results. As a
                    result, we may alter the location or geographic description associated with any Listing. However, we do not take responsibility for verifying Listing content or the accuracy of the
                    location. Hosts are solely responsible for ensuring the accuracy of Listing content and location or geographic descriptions and agree to quickly correct (or contact us to correct)
                    any inaccuracies. 11. Intellectual property 11.1 Anystay Pty Ltd owns the Site. All content on the Site is safeguarded by copyright and other relevant intellectual property rights.
                    Any reproduction of the Site, in whole or in part, including copying of text, graphics, or designs, is prohibited to the fullest extent allowed by law. 11.2 Hosts are allowed to
                    download, display, or print individual pages of the Site to demonstrate their agreement with Anystay. The corresponding file or printout must prominently display the text “©
                    [Present Year] Anystay Pty Ltd - All Rights Reserved”. 11.3 When a Host submits any type of content, including text or images, to the Site or through Anystay’s platform or systems,
                    the Host guarantees that they have the right to do so and have obtained all necessary consents or permissions from any owners of featured items (‘property release’). 11.4 If a
                    Host’s reviews or other content contain trademarks or other proprietary names or marks, the Host guarantees that they have secured all necessary legal permissions and rights for
                    Anystay to use such content on the Site. 11.5 By submitting content to the Site (and Dashboard) (including but not limited to all text, descriptions, reviews, photographs, etc.),
                    Hosts give Anystay permission to use such content both on the Site and in separately published form. The Host grants each member of the Anystay a nonexclusive, royalty-free,
                    perpetual, transferable, irrevocable, and fully sub-licensable right to use, reproduce, modify, adapt, translate, distribute, publish, create derivative works from, and publicly
                    display and perform any such submitted content globally in any media, now known or later developed, for any purpose. 11.6 If Hosts’ Listings and other submissions contain
                    trademarks, the Host assures that they have the right to use them, including the rights to sublicense. 12. Rights and obligations of Hosts 12.1 The Host is required to provide
                    accurate, complete, and truthful information about their personal identity, payment details, Property offered in Listings, and other communications using Anystay’s systems. 12.2
                    The Host continuously guarantees and asserts as long as any Property is listed on the Site or any stay regarding a booking for a Property is pending that: (i) they own and/or
                    possess all necessary rights and authority to rent out and proceed with bookings for the Property listed by the Host; (ii) they will not unjustly retain a rental deposit in
                    violation of the underlying rental agreement with the Guest; (iii) all of the information provided to Anystay is accurate and current, including all representations about any
                    Property, its amenities, location, price, and its availability for a specific date or range of dates; (iv) each Listing pertains to an individual and uniquely identified Property;
                    (v) they will not unjustly deny any Guest access to any Property; and (vi) they will provide all due refunds in accordance with the applicable cancellation policy or underlying
                    rental agreement. 12.3 The Host commits to ensuring that the information on the Listing is kept accurate, complete, and current for the entire duration the Listing is on the Site,
                    and: (i) if a translation is provided, to ensure that it is carefully and correctly translated, and: (ii) to adhere to the listing guidelines when creating the Listing. The Host
                    shall not provide misleading details about the origin of any information or include details that may hide the true source of any information. 12.4 The Host must adhere to Anystay’s
                    Marketplace Standards found at Listing Policies as updated from time to time. These Standards outline certain requirements for Listings including but not limited to: The Host must
                    keep an accurate reservation calendar on their Listing(s); The Host must make commercially reasonable efforts to respond to all booking requests from Guests within 24 hours of
                    receiving such a request; The Host must also agree to make commercially reasonable efforts to ensure all Guest payments are processed within 24 hours of authorization by the Guest
                    for such payment; The Host must respond to and accept a significant number of enquiries and booking requests received in the interest of the Guest experience; and The Host is
                    prohibited from cancelling a significant number of accepted bookings. 12.5 The Host commits to ensuring that the calendar for each Listing is kept accurate and current to reflect
                    the availability of the relevant Property as it is booked. On date-based searches, Listings with calendars that are out of date may be filtered out of results. 12.6 Hosts are
                    responsible for ensuring that their Listings do not violate the law or the rights of any person or entity. Listings must not contain false information, personal insults, anything
                    libellous, slanderous or defamatory, or anything that infringes copyright or data protection law. 12.7 Photographs included in a Listing should accurately represent the Property,
                    must not be false or misleading, must not include people, and must not infringe the privacy rights, intellectual property rights or any other rights of a third party. 12.8 If any
                    Listing violates these Host ToS, Anystay reserves the right to suspend, amend or terminate the relevant Listing or all Listings associated with the Host in accordance with clause 9
                    of these Host ToS. 12.9 Verifying user identities on the Internet is challenging, and we do not take responsibility for confirming each User’s claimed identity. We advise Hosts and
                    Guests to communicate directly with each other using the tools provided on the Site, although this does not guarantee the identity of the person you are communicating with. We also
                    recommend taking other reasonable steps to confirm the other person’s identity. You agree to: (i) keep your password and online ID for both your account with us and your email
                    account secure and strictly confidential, sharing it only with authorized users of your accounts, (ii) instruct each person to whom you give your online ID and password not to
                    disclose it to any unauthorized person, (iii) immediately notify us and choose a new online ID and password if you believe your password for either your account with us or your
                    email account may have been compromised or known to an unauthorized person, and (iv) immediately notify us if anyone contacts you asking for your online ID and password. Moreover,
                    if we suspect unauthorized access to your account, you agree to promptly change your ID and password and take any other related action as we may reasonably request upon our
                    request. We advise against sharing your online ID and password for your account with us and your email account with anyone. However, if you do share your online ID and online
                    password, or if you fail to adequately protect such information, you are responsible for all transactions that the person performs while using your account with us and/or your
                    email account, even those transactions that are fraudulent or unintended. 12.10 a Host cannot transfer a Listing to another party. In case of a Property sale or change in Property
                    management, Anystay will offer guidance on options for creating a new Listing. 12.11 If Anystay compensates a Guest for a loss caused by actions or omissions attributable to a Host
                    through one of our guarantee or warranty programs at our sole discretion, Anystay reserves the right to seek reimbursement from the Host for the amount paid or contributed by
                    Anystay toward the loss. 13. Taxes 13.1 As a property owner, it’s your sole responsibility to identify and fulfill your tax obligations, such as reporting, collecting, remitting,
                    or including in your Listing any applicable GST or equivalent indirect taxes, sales, occupancy and tourist taxes, gross receipts, real property or other visitor taxes or income
                    taxes (“Taxes”), unless otherwise specified by the regulations of your country. Anystay doesn’t offer tax advice, so it’s recommended that you consult with a tax specialist. 13.2
                    We may be required by tax regulations to collect relevant Tax information from Hosts, withhold Taxes from payouts to Hosts, or both. If a Host doesn’t provide us with sufficient
                    documentation to alleviate our obligation (if any) to withhold Taxes from payouts, we will withhold such amounts as required by law, or do both, until such information is provided.
                    You, as the Host, are solely responsible for ensuring that your tax forms are up-to-date, complete, and accurate. 13.3 The Host is responsible for all charges related to the
                    Property and the Listings and must report all applicable Taxes on the payments they receive to the relevant authorities. Anystay may need to collect Taxes on the Service fees
                    charged to the Host. If required, Anystay will provide the Host with an invoice stating the amount of Taxes charged on these Service fees. If the Host is eligible for an exemption
                    from any Taxes on the Service fee, they must provide Anystay with the necessary documentation and support for this exemption. 13.4 If the Host resides in a country that is an EU
                    member state and is VAT registered in that member state, they must provide Anystay with a valid VAT number for Anystay to apply the reverse charge mechanism to the Service fees. If
                    the Host resides in Australia, the reverse charge mechanism doesn’t apply and an Australian GST charge will be applied. 13.5 You should be aware that a relevant governmental
                    agency, department, and/or authority (“Tax Authority”) where your Listing is located may require certain taxes to be collected from Guests or Hosts related to such Listing and
                    remitted to the respective Tax Authority. The laws may vary by jurisdiction, but these taxes may need to be collected and remitted as a percentage of the Rental Amount set by
                    Hosts, a set amount per day, an amount based on the number of guests, or other variations. These taxes are sometimes referred to as “transient occupancy taxes,” “hotel taxes,”
                    “lodging taxes,” “city taxes,” “room taxes,” or “tourist taxes” (“Stay Taxes”). 13.6 In some jurisdictions, Anystay may choose to facilitate the collection and remittance of Stay
                    Taxes from or on behalf of Guests or Hosts, in accordance with these Terms (“Collection and Remittance”) if such jurisdiction asserts that Anystay or Hosts have a Stay Tax
                    collection and remittance obligation. In any jurisdiction where we decide to facilitate direct Collection and Remittance, you irrevocably instruct and authorize Anystay to collect
                    Stay Taxes from Guests on the Host’s behalf at the time the first online payment is made by the Guest, and remit these Stay Taxes to the Tax Authority. The amount of Stay Taxes, if
                    any, collected and remitted by Anystay will be visible and separately stated to both Hosts and Guests on their respective transaction documents. Where Anystay is facilitating
                    Collection and Remittance, Hosts are not allowed to collect any Stay Taxes being collected by Anystay related to their Listings in that jurisdiction. When Anystay facilitates
                    Collection and Remittance of Stay Taxes in a jurisdiction for the first time, Anystay will notify existing Hosts with Listings in such jurisdictions. 13.7 You agree that any legal
                    action related to Anystay’s facilitation of Collection and Remittance of Stay Taxes will not involve any supplier or vendor used by Anystay in this process. Hosts agree that we may
                    request additional amounts from you if the Stay Taxes collected and/or remitted are not enough to fulfill your obligations to the Tax Authority. Your only recourse for collected
                    Stay Taxes is a refund from the Tax Authority, following their procedures. 13.8 You agree to protect, indemnify, and hold harmless the Anystay and their officers, directors,
                    employees, and agents from any claims, liabilities, damages, losses, debts, obligations, and expenses, including legal and accounting fees, related to Stay Taxes. This includes the
                    applicability, calculation, collection, or remittance of Stay Taxes for your transactions. In jurisdictions where we facilitate Collection and Remittance, Hosts grant us permission
                    to store, transfer, and disclose data and other information related to them or their transactions, Bookings, Listings, and Stay Taxes to the relevant Tax Authority. 13.9 Anystay
                    reserves the right to stop the Collection and Remittance in any jurisdiction, with prior notice to Hosts. At this point, Hosts become solely responsible for the collection and/or
                    remittance of any Taxes that may apply to Listings in that jurisdiction. In jurisdictions where we have not provided notice of, or are not facilitating the collection or remittance
                    of Taxes, Hosts remain solely responsible for the collection and/or remittance of any Taxes that may apply to Listings. 13.10 Hosts acknowledge that in some jurisdictions, Anystay
                    may choose not to facilitate the collection or remittance of Taxes or may be unable to do so. Nothing in these Terms of Service guarantees that Anystay will facilitate the
                    collection and/or remittance of Tax in any specific jurisdiction or at all. Anystay reserves the right to stop any facilitation of collection and remittance of Tax for any reason,
                    and will provide reasonable notice to Hosts in any jurisdiction where it decides to stop such facilitation. 14. Restricted use 14.1 The Host must not, either directly or
                    indirectly: 14.1.1 Exploit, copy, distribute, reproduce, edit, translate, make publicly accessible, or decompile the Site, its content, or databases in any form, whether by using
                    automatic devices or manual processes; 14.1.2 Monitor content on the Site or communications with Guests using robots, spiders, or other automatic instruments, except for general
                    purpose internet search engines (excluding any website or search engine or other service that provides classified listings or property advertisements, or any subset of the same, or
                    which is in the business of providing short term property rental services or other services that compete with the Site or Anystay) and non-commercial public archives that use tools
                    to gather information for the sole purpose of displaying hyperlinks to the Site, provided they each do so from a stable IP address or range of IP addresses using an easily
                    identifiable agent and comply with Anystay’s robots.txt file; 14.1.3 Use the Site, Anystay’s platform or systems, or any information provided by a Guest, for purposes other than
                    those permitted by these Host ToS; 14.1.4 Use the Site or the Services to book or solicit a booking for a property other than a Property under a valid Listing; 14.1.5 Reproduce any
                    part of the Site on another website or otherwise, using any device including, but not limited to, use of a frame or border environment around the Site, or any other framing
                    technique to enclose any portion or aspect of the Site, or mirror or replicate any portion of the Site; 14.1.6 Upload or send to the Site (or Anystay’s platform or systems) any
                    content or programs that, due to their size or nature, might damage Anystay’s computers or networks; 14.1.7 Include content on the Site or Anystay’s platform or systems that
                    violates any applicable criminal, intellectual property or other laws, or encourages any such violation; 14.1.8 Use or access the Site or Anystay’s platform or systems in a way
                    that might harm any computer system or network, including by making available any virus (for which purpose, “virus” includes any program introduced into a system deliberately which
                    carries out a useless and/or destructive function, such as displaying an irritating message or systematically over-writing the information on a User’s hard disk); 14.1.9 Post or
                    transmit information that is false, fraudulent, or misleading in any way, or engage in any act that may be considered “phishing” (whether primary, secondary or other) or that would
                    result in criminal or civil liability; 14.1.10 Post or transmit any unlawful, threatening, abusive, libellous, defamatory, obscene, vulgar, indecent, inflammatory, sexually
                    explicit, pornographic or profane material. 14.1.11 Do not make any references to any member of the Anystay or any of their respective affiliates in a way that could lead someone
                    to believe that the Host, any Property, Listing or website is sponsored by, affiliated with, or endorsed by any member of the Anystay or any of their respective affiliates. 14.1.12
                    Do not replace a Property in a Listing with another Property without Anystay’s prior approval. Prohibited substitution activities include: 14.1.12.1 Substitution: Changing the
                    Property displayed in a Listing when that Property becomes booked; and 14.1.12.2 Leeching: Offering a Guest who enquires through the Site a different property than the one
                    displayed in the relevant Listing. 14.1.13 If online booking is enabled, do not delay responding to booking requests or processing Guest payments (Hosts with online booking enabled
                    will make commercially reasonable efforts to respond to all booking requests from Guests within 24 hours of receiving a booking request and will also ensure all Guest payments are
                    processed within 24 hours of the Guest authorising such payment). 14.2 If a Host breaches this clause, Anystay reserves the right to suspend, amend or terminate the relevant
                    Listing or all Listings associated with the Host in accordance with clause 9 of these Host ToS. 15. Distribution of Listings to Third Party Websites. To help Hosts achieve wider
                    distribution of their properties, we may distribute your Listing information and content, or otherwise facilitate the distribution of your Listing on a third party website.
                    Additional terms and conditions may apply to such distributions, which we may notify you of via your Host Dashboard or email. 16. Responsibility of Hosts 16.1 We don’t offer
                    liability insurance protection for Hosts, property managers, or Guests, even if a User secures insurance coverage through third-party providers. Users are solely responsible for
                    securing sufficient insurance coverage to safeguard their properties and guests or their trip, as applicable. Hosts agree to obtain and maintain adequate insurance coverage for the
                    rental of the Properties they list on the Site from the arrival of their first Guest until the departure date of any Guest they have secured via our Sites. 16.2 The Host will bear
                    sole responsibility for all financial consequences arising from any loss or damage to Anystay due to content or any program sent by the Host that causes any damage to Anystay’s
                    hardware or software, including damage to the Site, system, or data, or causing the Site or system to fail or experience faults. The aforementioned financial consequences include
                    reasonable legal fees. 17. Indemnification The Host agrees to defend, indemnify, and hold harmless Anystay, any of their subsidiaries affiliates, their respective officers,
                    directors, employees, and agents, from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties, or other costs or expenses of any kind or
                    nature including but not limited to reasonable legal and accounting fees, brought or occasioned by third parties alleging, arising out of, or in connection with (a) any content or
                    material the Host submits or provides for inclusion on the Site; (b) any use by the Host of the Site; any breach of these Host ToS by the Host; and (d) the Guest’s stay at the
                    Property and use of associated services and facilities provided by the Host. 18. Contacting us 18.1 Any messages should be sent to Anystay using the contact form or Anystay’s
                    platform. 18.2 Notices regarding copyright infringements must include the following: Your address, telephone number, and email; Detailed information about the content in question
                    (display of the image or text), including a link to the site; and A formal declaration indicating that you: (i) Hold the exclusive right to the work; and (ii) Have not authorised
                    the use of the relevant material in this manner. 19. Dispute resolution 19.1 Anystay prioritizes customer satisfaction and will attempt to address any issues or disputes you may
                    have. If we fail to resolve your concerns, you can proceed with claims as detailed in this section. 19.2 You agree to allow us the first chance to settle any disputes or claims
                    related to the Site, these Host ToS, interactions with our customer service agents, any services or products provided, any statements made by us, or our Privacy Policy (“Claims”)
                    by reaching out to us. If we cannot resolve your Claims within 60 days, you may seek redress through arbitration or in small claims court, as outlined below. 19.3 You accept and
                    agree that all Claims will be settled by binding arbitration, not in court, except that: (a) you can present Claims individually in small claims court or tribunal if they qualify;
                    and (b) either party can seek immediate equitable relief in a court of competent jurisdiction to prevent actual or threatened infringement, misappropriation, or violation of a
                    party’s intellectual property rights (including, but not limited to, copyright or trademarks), or in other urgent situations (such as any actual or threatened crime or
                    cyber-attack). This includes any Claims you bring against us, our subsidiaries, travel suppliers, or any companies offering products or services through us (which are beneficiaries
                    of this arbitration agreement). This also includes any Claims that arose before you accepted these Terms of Use, regardless of whether previous versions of the Terms of Use
                    mandated arbitration. 19.4 There is no judge or jury in arbitration, and court review of an arbitration award is restricted. However, an arbitrator can award on an individual basis
                    the same damages and relief as a court (including statutory damages, attorneys’ fees, and costs), and must adhere to and enforce these Terms of Use as a court would. 19.5 The
                    requirement to settle a Claim by binding arbitration will not apply if you provide us with written notice (including by email) that you reject the arbitration provisions of these
                    Terms of Use within thirty (30) days following the date you first accept these provisions. If you don’t provide us with such notice within the thirty (30) day period, you will be
                    considered to have fully waived (and without modification) your right to resolve any Claim or to seek any other relief by initiating proceedings in a court (except as set out in
                    paragraphs 20(a) and (b) above). 19.6 Arbitrations will be conducted by the Australian Centre for International Commercial Arbitration (ACICA) under its rules, as adopted or
                    amended from time to time. The seat of arbitration shall be Sydney (or, if you notify us in writing, your nearest state or territory capital city of Australia). The language of the
                    arbitration shall be English. Payment of all filing, administration, and arbitrator fees will be governed by the ACICA’s rules. 19.7 You have the option to conduct an arbitration
                    over the phone, through written submissions, or in person in your home state or any other location agreed upon by both parties. 19.8 To initiate an arbitration process, you need to
                    send a letter that requests arbitration and outlines your Claims to “Anystay Legal: Arbitration Claim Manager,” located at Level 17, 1 Martin Place, Sydney NSW 2000 Australia. If
                    we initiate arbitration against you, we will notify you at the email or postal address you’ve provided. The rules and filing instructions of the ACICA can be found at
                    https://acica.org.au/ or by calling +61 (0) 2 9223 1099. 19.9 All proceedings to resolve Claims will be carried out on an individual basis, not as a class, consolidated, or
                    representative action. If a Claim is taken to court instead of arbitration for any reason, we both forfeit any right to a jury trial. The Commercial Arbitration Act 2010 (NSW)
                    governs this agreement. Any court of competent jurisdiction may confirm an arbitration decision. 19.10 The laws of New South Wales, Australia, govern these Terms of Use. Any use of
                    this Site that does not comply with all provisions of this Agreement, including this paragraph, is unauthorized. 20. General 20.1 If a court of competent jurisdiction deems any
                    provision of the Host ToS invalid, the remaining provisions will stay in effect. The clause headings are for reference only and do not influence the interpretation or construction
                    of these Host ToS. No waiver of any term of the Host ToS will be considered a further or ongoing waiver of that term or any other term. Anystay’s failure to enforce any term of the
                    Host ToS does not constitute a waiver of that term and does not affect Anystay’s ability to enforce that term in the future. These Host ToS and the Privacy Policy make up the
                    entire agreement between the Host and Anystay regarding the use of the Site. Changes to the Host ToS can only be made through a revised posting on this page.
                    {/* <PrivacyPolicyHeroSubTitle>Host</PrivacyPolicyHeroSubTitle> */}
                </PrivacyPolicyContent>
            </PrivacyPolicyContentWrapper>
            <Footer />
        </>
    );
}
