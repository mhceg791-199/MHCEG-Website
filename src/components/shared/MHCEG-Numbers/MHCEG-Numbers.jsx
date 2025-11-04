import { useInView } from "react-intersection-observer";
import useCountUp from '../../../hooks/useCountUp';


export default function NumbersSection({
  title = "In Numbers",
  items = [],
  duration = 3000,
  bgColor = "bg-[#0c0c0c]",
  textColor = "text-white",
  columns = "sm:grid-cols-3",
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const numbers = items.map((item) => useCountUp(item.max, inView, duration));

  return (
    <div className={`${bgColor} ${textColor} mt-3 md:p-8 p-5`}>
      {title && (
        <h3 className="mb-3 font-bold heading md:text-left text-center">
          {title}
        </h3>
      )}

      <div ref={ref} className={`grid grid-cols-1 ${columns} gap-6`}>
        {items.map(({ text, max, icon }, index) => {
          const number = numbers[index];
          const progress = Math.min((number / max) * 100, 100);

          return (
            <div key={index} className="flex flex-col items-center py-8">
              <p className="md:text-lg text-base mb-2 text-gray-300">{text}</p>

              <div className="flex justify-center items-baseline heading font-bold leading-none">
                <span>{number}</span>
                <span className="ml-1">{icon}</span>
              </div>

              <div className="w-3/4 h-4 bg-gray-800 mt-4 overflow-hidden border border-gray-600">
                <div
                  className="h-full bg-gradient-to-r from-mainGold to-yellow-400 transition-all duration-700 ease-linear"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
