import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

export default function TitleWithList({ title, text, list = [] }) {
  return (
    <motion.div
      className="my-10 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md transition hover:shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {title && (
        <h3 className="heading text-mainGold mb-4 tracking-wide flex items-center gap-2">
          <FaChevronRight className="text-mainGold" size={16} />
          {title}
        </h3>
      )}

      <p className="leading-relaxed mb-5 text-justify flex items-start gap-2">
        <FaChevronRight className="mt-1 text-mainGold shrink-0" size={16} />
        <span>{text}</span>
      </p>

      {list.length > 0 && (
        <ul className="space-y-3">
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 leading-relaxed">
              <FaChevronRight
                className="mt-1 text-mainGold shrink-0"
                size={12}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
