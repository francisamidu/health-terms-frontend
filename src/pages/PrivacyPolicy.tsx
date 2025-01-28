import { formatHumanReadableDate } from '@/utils/formatDateTime'
import React from 'react'

const readableDate = formatHumanReadableDate(new Date())
const PrivacyPolicy: React.FC = () => (
  <div className="p-8">
    <p>
      <em>[Last updated: (</em>
      <em>
        <u>on {readableDate}</u>)]
      </em>
    </p>
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      Your privacy is important to us. This policy outlines how we handle your
      data:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>We collect data to improve user experience and functionality.</li>
      <li>Your data will not be shared with third parties without consent.</li>
      <li>Our platform uses cookies for better service delivery.</li>
    </ul>
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-4">General</h2>
      <p className="mb-4">
        MediSync GLOBAL SOLUTIONS, Inc. and its affiliates ("MediSync" "we,"
        "our," or "us") are committed to protecting your privacy. This privacy
        policy sets out how we collect, store, process, transfer, share, and use
        data that identifies or is associated with you ("personal information")
        and information regarding our use of cookies and similar technologies.
      </p>
      <p className="mb-4">
        MediSync operates a platform ("MediSync") used to recruit crowd
        resources globally to support hosted projects, process work for
        different projects, and track resources working hours; users can
        register via our websites under the https://www.medisync.com domain (our
        "Website") and browse, apply for published job opportunities, and take
        tasks from the online interface. ("Service").
      </p>
      <p className="mb-4">
        This privacy policy applies to MediSync and all the tools that are part
        of it. Terms used in this privacy policy have the same meaning as in our
        Terms and Conditions, unless otherwise defined in this privacy policy.
      </p>
      <p className="mb-4">
        Before accessing or using MediSync, please ensure that you have read and
        understood our collection, storage, use, and disclosure of your Personal
        Information as described in this privacy policy.
      </p>
      <p className="mb-4">
        MediSync is the data controller of the Personal Information we hold
        about you. You can reach out to MediSync at the address: 14980 NE 31st
        Way, Suite 100, Redmond, WA, U.S. 98052; contact email:
        data_protection@MediSync.com; phone: 1.425.233.8578.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        PERSONAL INFORMATION WE COLLECT ABOUT YOU AND HOW WE USE IT
      </h2>
      <p className="mb-4">
        We collect Personal Information about you when you voluntarily submit
        information directly to us when using MediSync. This can include
        information you provide to us when you register for an account; fill in
        a form on MediSync; create or edit your profile on MediSync; correspond
        with us via the Website, phone, e-mail, or otherwise; subscribe to our
        mailing lists, newsletters, or other forms of marketing communications;
        respond to surveys; or use some other feature of MediSync as available
        from time to time.
      </p>
      <p className="mb-4">
        If you choose not to provide Personal Information, we may not be able to
        provide certain services to you or respond to your requests.
      </p>
      <p className="mb-4">
        The table at Annex 1 sets out the categories of Personal Information we
        collect about you and how we use that information. The table also lists
        the legal basis on which we rely to process the Personal Information,
        the categories of recipients of the Personal Information, and
        information as to how we determine applicable retention periods.
      </p>
      <p className="mb-4">
        We also automatically collect Personal Information about you indirectly
        about how you access and use MediSync and information about the device
        you use to access MediSync.
      </p>
      <p className="mb-4">
        The table at Annex 2 sets out the categories of Personal Information we
        collect about you automatically and how we use that information. The
        table also lists the legal basis which we rely on to process the
        Personal Information, the categories of recipients of the Personal
        Information, and information as to how we determine applicable retention
        periods.
      </p>
    </div>
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-4">Security</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to
        protect your Personal Information against accidental or unlawful
        destruction, loss, change, or damage. All Personal Information we
        collect will be stored on secure servers. All electronic transactions
        entered into via our Website will be protected by SSL encryption
        technology. While we use these precautions to safeguard your Personal
        Information, we cannot guarantee the security of the networks, systems,
        servers, devices, and databases we operate or that are operated on our
        behalf.
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        International Transfers of your Personal Information
      </h2>
      <p className="mb-4">
        The Personal Information we collect may be transferred to and stored in
        countries outside of the jurisdiction you are in where we and our
        third-party service providers have operations. We will only disclose the
        Personal Information to third-party service providers who perform
        services on behalf of us in accordance with applicable data protection
        laws and on the basis that they are bound by contractual obligation to
        use it only for the specific business purposes for which we disclose it
        to them, to comply with applicable data protection obligations, and to
        provide a same or higher level of privacy protection on the Personal
        Information.
      </p>
      <p className="mb-4">
        If you are located in the European Union ("EU"), your Personal
        Information will be processed outside of the EU; these international
        transfers of your Personal Information are made pursuant to appropriate
        safeguards, such as standard data protection clauses adopted by the
        European Commission. If you wish to enquire further about these
        safeguards used, please contact us using the details set out at the end
        of this privacy policy.
      </p>
      <p className="mb-4">
        We will take reasonable steps to ensure that your Personal Information
        is treated securely and in accordance with applicable law and this
        privacy policy.
      </p>
    </div>
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-4">
        If you are located in the EU, in accordance with applicable privacy law,
        you have the following rights in respect of the Personal Information
        that we hold:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Right of access:</strong> The right to obtain access to your
          Personal Information.
        </li>
        <li>
          <strong>Right to rectification:</strong> The right to obtain
          rectification of your Personal Information without undue delay where
          that Personal Information is inaccurate or incomplete.
        </li>
        <li>
          <strong>Right to erasure:</strong> The right to obtain the erasure of
          your Personal Information without undue delay in certain
          circumstances, such as where the personal information is no longer
          necessary in relation to the purposes for which it was collected or
          processed.
        </li>
        <li>
          <strong>Right to restriction:</strong> The right to obtain the
          restriction of the processing undertaken by us on your Personal
          Information in certain circumstances, such as where the accuracy of
          the Personal Information is contested by you, for a period enabling us
          to verify the accuracy of that Personal Information.
        </li>
        <li>
          <strong>Right to Data Portability:</strong> You have the right to
          receive personal data concerning you in a structured, common, and
          machine-readable format or request transmission of the data to a third
          party, if the conditions in Article 20 of the GDPR are met.
        </li>
        <li>
          <strong>Right to Object:</strong> You have the right to object to the
          processing of your personal data based on our legitimate interests at
          any time. We will no longer process the data, unless there are
          compelling legitimate grounds for our processing that override the
          interests, rights, and freedoms of the data subject, or the processing
          serves the purpose of asserting, exercising, or defending legal
          claims. You also have the right to object at any time to the use of
          your data for direct marketing.
        </li>
        <li>
          <strong>Right to Withdraw Consent:</strong> If we are processing your
          personal data based on your consent, you have the right to withdraw
          your consent at any time.
        </li>
      </ul>
      <p className="mb-4">
        If you wish to exercise one of these rights, please contact us using the
        contact details at the end of this privacy policy (“Contact Us”). You
        may also review and edit the Personal Information you have submitted to
        us by logging into your account on MediSync.
      </p>
      <p>
        You also have the right to lodge a complaint to the Supervisory
        Authority in your jurisdiction.
      </p>
    </div>
  </div>
)

export default PrivacyPolicy
