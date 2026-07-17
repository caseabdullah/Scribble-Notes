import { Grid2x2, Link, Users } from "lucide-react";

const Specification = () => {
  const features = [
    {
      title: "Flexible Canvas",
      desc: "Drag and drop notes anywhere. Create mind maps, vision boards, or simple lists without rigid structures holding you back.",
      icon: <Grid2x2 size={18} />,
      color: "bg-[#b9c9f5]",
      rotate: "-rotate-6",
    },
    {
      title: "Expressive Styling",
      desc: "Highlight, scribble, and color-code. Make your notes look as vibrant as your ideas with our playful formatting tools.",
      icon: <Link size={18} />,
      color: "bg-[#f8df7a]",
      rotate: "rotate-3",
    },
    {
      title: "Real-time Sync",
      desc: "Collaborate with friends or teammates instantly. See their cursors dance across the canvas as you brainstorm together.",
      icon: <Users size={18} />,
      color: "bg-[#8fd0ed]",
      rotate: "rotate-6",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f5f7] py-24">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold italic text-gray-900">
          Not just another notepad.
        </h2>

        <p className="mt-4 text-gray-400 max-w-md mx-auto text-sm">
          Everything you need to organize your chaotic brain,
          wrapped in a beautiful, distraction-free interface.
        </p>
      </div>


      {/* Cards */}
      <div className="flex justify-center gap-12 px-10">

        {features.map((item,index)=>(
          <div
            key={index}
            className={`
              ${item.color}
              ${item.rotate}
              w-70
              h-55
              rounded-md
              border
              border-gray-700
              shadow-lg
              p-6
              transition-transform
              hover:scale-105
            `}
          >

            {/* Icon */}
            <div className="bg-white w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 mb-5">
              {item.icon}
            </div>


            <h3 className="font-bold text-lg text-gray-900">
              {item.title}
            </h3>


            <p className="text-xs text-gray-700 mt-3 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Specification;