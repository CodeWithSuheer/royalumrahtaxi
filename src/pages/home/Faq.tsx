const data = [
  {
    id: 1,
    title: "How Much a taxi from Makkah airport to Madinah",
    desc: "lorem20",
  },
  {
    id: 2,
    title: "How Much a taxi from Makkah airport to Madinah",
    desc: "lorem20",
  },
  {
    id: 3,
    title: "How Much a taxi from Makkah airport to Madinah",
    desc: "lorem20",
  },
  {
    id: 4,
    title: "How Much a taxi from Makkah airport to Madinah",
    desc: "lorem20",
  },
  {
    id: 5,
    title: "How Much a taxi from Makkah airport to Madinah",
    desc: "lorem20",
  },
];

const Faq = () => {
  return (
    <>
      <section className="relative w-full bg-white antialiased">
        <div className="max-w-4xl mx-auto pt-16 pb-7 px-4 sm:px-6 xl:px-0 ">
          <div className="header w-full max-w-4xl mx-auto text-center">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-3xl sm:text-4xl font-semibold py-2.5">
              Frequently Ask Questions?
            </h2>

            <p className="mt-2 font-normal text-sm tracking-wide">
              Lorem ipsum dolor sit amet consectetur. Id pellentesque lectus
              nunc tincidunt magnis varius proin. Massa volutpat ac sit lectus
              pretium augue est felis. Eu tellus odio vulputate tincidunt
              elementum. Sed accumsan ut tellus eget id.Sed accumsan ut tellus
              eget id.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#2A4D3E] text-white antialiased">
        <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 xl:px-0 ">
          <div className="space-y-6 mt-10">
            {data.map((data) => (
              <details
                key={data.id}
                className="group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 border rounded-lg bg-white p-4 text-gray-900">
                  <h2 className="font-medium text-sm sm:text-md">
                    {data.title}
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180 text-[#2A4D3E]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-black bg-white py-3 rounded-lg">
                  {data.desc}
                </p>
              </details>
            ))}
          </div>
        </div>
        <div className="custom-shape-divider-top-1717971167">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Faq;
