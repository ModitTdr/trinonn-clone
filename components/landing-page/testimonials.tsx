import Image from "next/image";

interface props {
  id: number;
  name: string;
  role: string;
  text: string;
}

const Testimonials = ({ testimonials }: { testimonials: props[] }) => {
  return (
    <section className="flex gap-x-4 overflow-x-scroll no-scrollbar py-20 px-2">
      {
        testimonials.map(({ id, name, role, text }) => (
          <div
            key={id}
            className="
              w-full min-w-[20vw] max-w-[75vw] lg:max-w-[45vw]
              min-h-[55vh] lg:h-[42vw]
              py-[5vw] px-[2.8vw]
              flex flex-col justify-between items-center
              rounded-[6vw] lg:rounded-[3vw]
              border border-foreground hover:border-background-secondary
              transition-all duration-400 ease-in-out
              shrink-0
            "
          >

            <div className="text-[10vw] lg:text-[5vw] text-gray-300 leading-none">
              &quot;
            </div>
            <h1
              className="
                text-[1.2rem] lg:text-[1.6vw] leading-none lg:leading-[2.3vw]
                text-gray-300
                text-center
              "
            >{text}</h1>

            <div className="flex flex-col items-center gap-[2vh] pt-8">
              <Image
                src="https://i.pravatar.cc/150"
                alt="profile"
                width={80}
                height={80}
                className="
                lg:w-[6vw] lg:h-[6vw]
                rounded-full object-cover
              "
              />

              <div className="text-center">
                <p className="text-[1.2rem] lg:text-[1.3vw] text-white">
                  {name}
                </p>
                <p className="text-[1rem] lg:text-[1vw] text-gray-400">
                  {role}
                </p>
              </div>
            </div>
          </div>
        ))
      }
    </section>
  );
};

export default Testimonials;