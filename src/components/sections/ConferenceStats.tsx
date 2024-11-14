"use client"

import { motion } from "framer-motion"
import { Users, Presentation, Globe, Award, Youtube, BookText, FileText } from "lucide-react"

import { ConferenceMaterials } from "./ConferenceMaterials"
import { containerVariants, itemVariants } from "@/components/data-models/conferences"

const stats = [
  {
    id: 1,
    number: "500+",
    title: "Attendees",
    description: "From academia and industry",
    icon: Users,
    color: "text-blue-500",
  },
  {
    id: 2,
    number: "150+",
    title: "Presentations",
    description: "Research papers and posters",
    icon: Presentation,
    color: "text-green-500",
  },
  {
    id: 3,
    number: "25+",
    title: "Countries",
    description: "Global participation",
    icon: Globe,
    color: "text-purple-500",
  },
  // {
  //   id: 4,
  //   number: "30+",
  //   title: "Awards",
  //   description: "Recognition for excellence",
  //   icon: Award,
  //   color: "text-amber-500",
  // },
]
const materials = [
    {
      id: 1,
      header: "YOUTUBE",
      link: "https://www.youtube.com/@toveroenergy3932/streams",
      icon: Youtube,
      description: "Watch conference presentations and highlights",
      color: "text-red-600",
      bgColor: "bg-red-50",
      iconBgColor: "bg-red-600",
      iconColor: "text-white",
    },
    {
      id: 2,
      header: "PROCEEDINGS",
      link: "https://www.scientific.net/book/africa-international-conference-on-clean-energy-and-energy-storage/978-3-0357-3771-4",
      icon: BookText,
      description: "Access published conference proceedings",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-600",
      iconColor: "text-white",
    },
    {
      id: 3,
      header: "ABSTRACTS",
      link: "https://drive.google.com/uc?export=download&id=1lE93VeauJnyykfAe1ogiYFDLHE_V4KDD",
      icon: FileText,
      description: "Download conference abstracts",
      color: "text-green-600",
      bgColor: "bg-green-50", 
      iconBgColor: "bg-green-600",
      iconColor: "text-white",
    },
  ]


const CounterAnimation = ({ number }: { number: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      }}
      className="text-4xl md:text-5xl font-bold"
    >
      {number}
    </motion.span>
  )
}

export default function ConferenceStats() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-700 to-green-900">
      <div className="container md:w-11/12 mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-6 text-white"
            >
              AICCEES 2023 Impact
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed text-center mb-6"
            >
              Last year&apos;s conference brought together researchers, industry experts, and innovators from around the world.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-green-200 rounded-2xl shadow-lg transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 space-y-4">
                  <div className={`${stat.color} w-12 h-12 rounded-xl bg-opacity-10 flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-2">
                    <CounterAnimation number={stat.number} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <ConferenceMaterials 
            year={2023}
            materials={materials}
          />

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <p className="text-gray-100 italic">
              {/* Join us this year as we aim to make an even bigger impact! */}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 