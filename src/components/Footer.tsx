export default function Footer({ messages }: { messages: any }) {
  const dict = messages.Footer;

  return (
    <footer className="bg-[#0f2149] text-white py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {/* Title */}
          <div>
            <h3 className="text-[20px] font-ubuntu font-semibold inline-block border-b border-gray-400 pb-1 mb-2">
              {dict.Item1.Title1} {dict.Item1.Title2} {dict.Item1.Title3}
            </h3>
            <div className="flex items-start gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 18.333A8.333 8.333 0 1 0 10 1.667a8.333 8.333 0 0 0 0 16.666Zm2.5-5-2.012-2.012A2.083 2.083 0 0 1 10 10.143V5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-sm">
                <p>{dict.Item1.Text1}</p>
                <p>{dict.Item1.Text2} (8:30 - 17:30)</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-1 font-ubuntu text-sm">
            <a
              href="/en"
              className="hover:text-[#3f63d1] transition"
            >
              {messages.Students.Bread.TitleMain}
            </a>
            <a
              href="/en/institute/institute/normative-documents"
              className="hover:text-[#3f63d1] transition"
            >
              {messages.Header.HeaderList.ListTitle1}
            </a>
            <a
              href="/en/students/point-rating"
              className="hover:text-[#3f63d1] transition"
            >
              {messages.Header.HeaderList.ListTitle2}
            </a>
            <a
              href="/en/abiturients/rules-for-docs"
              className="hover:text-[#3f63d1] transition"
            >
              {messages.Header.HeaderList.ListTitle3}
            </a>
            <a
              href="/en/abiturients/documents-for-applying"
              className="hover:text-[#3f63d1] transition"
            >
              {messages.HomePageMain.Enrollment.Title1}
            </a>
          </div>

          {/* Watermark */}
          <div className="text-xs font-pt-sans border-t border-gray-400 pt-4 mt-4">
            © Bishkek International Medical Institute. All rights reserved.
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-1/2">
          {/* Contacts */}
          <div className="flex flex-col gap-2">
            <h3 className="text-[20px] font-semibold inline-block border-b border-gray-400 pb-1 mb-2">
              {dict.Item3.Title}
            </h3>
            <div className="flex gap-2 items-start">
              <img
                src="/images/icon-mobile.png"
                alt="Phone"
                className="w-5 h-5 mt-1"
              />
              <span className="text-sm sm:text-base">{dict.Item3.Number}</span>
            </div>
            <div className="flex gap-2 items-start">
              <img
                src="/images/address_icon.png"
                alt="Address"
                className="w-5 h-5 mt-1"
              />
              <span className="text-sm sm:text-base">
                {dict.Item3.Adress1}
                <br />
                {dict.Item3.Adress2}
              </span>
            </div>
            <div className="flex gap-2 items-start">
              <img
                src="/images/mail_icon.png"
                alt="Mail"
                className="w-5 h-5 mt-1"
              />
              <span className="text-sm sm:text-base">bimi.edu.kg@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[20px] font-semibold inline-block border-b border-gray-400 pb-1 mb-2">
              {dict.Item4.Title}
            </h3>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.youtube.com/channel/UCYWWDa4X2Z0o9jyTgPngx3g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/logos_youtube-icon.png"
                  alt="YouTube"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.instagram.com/bimi.edu.kg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/instagram_logo.png"
                  alt="Instagram"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://www.facebook.com/bimi.kg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/Icon_facebook.png"
                  alt="Facebook"
                  className="w-7 h-7"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
