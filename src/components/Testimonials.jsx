import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin min-h-56 flex flex-col justify-between">
              <p className="text-neutral-300 font-light">{testimonial.text}</p>
              <div className="flex">
                <img
                  src={testimonial.image}
                  alt={testimonials.user}
                  className="w-12 h-12 mr-4 rounded-full border border-neutral-100"
                />
                <div>
                  <h6 className="text-neutral-400 font-light">
                    {testimonial.user}
                  </h6>
                  <span className="text-sm font-normal italic text-neutral-500">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
