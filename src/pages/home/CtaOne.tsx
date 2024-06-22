const CtaOne = () => {
  return (
    <>
      <section className="cta_section">
        <div className="py-12 sm:py-20 cta_section_cont px-2.5 text-white flex justify-center items-center flex-col">
          <div className="header w-full max-w-4xl mx-auto text-center">
            <p className="h-px w-16 bg-[#F0A202] text-center mx-auto"></p>

            <h2 className="crimson mx-auto text-center text-3xl sm:text-4xl font-semibold py-2.5">
              Ready to embark on your spiritual journey?
            </h2>

            <p className="mt-2 font-normal text-sm tracking-wide">
              Ensure a smooth and hassle-free ride to the holy sites with our
              trusted taxi service.
            </p>
            <button
              type="button"
              className="crimson mt-8 px-8 py-2 text-lg bg-[#F0A202] hover:bg-[#f0a102de] text-white rounded-3xl mx-auto text-center"
            >
              Book a Ride
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaOne;
