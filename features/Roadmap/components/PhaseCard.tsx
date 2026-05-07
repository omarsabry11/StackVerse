"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2 } from 'lucide-react'
import { PhaseCardProps } from '../types/roadmap'


export function PhaseCard({
  phase,
  index,
  isExpanded,
  onToggleExpand,
}: PhaseCardProps) {
  return (
    <div className="relative">
      {/* Timeline connector dot */}
      <div
        className={`absolute -start-8.5 md:-start-10.25 top-8 w-5 h-5 rounded-full border-4 border-white shadow-sm z-10 ${phase.color.bg} dark:border-[#0A0F1A]`}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: '-50px',
        }}
        className={`bg-white rounded-xl shadow-sm border transition-all duration-300 border-gray-200 hover:shadow-md dark:bg-[#0D1322] dark:border-gray-600`}
      >
        {/* Card Header */}
        <button
          onClick={onToggleExpand}
          className={`w-full text-left px-6 py-5 flex items-center justify-between cursor-pointer`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg font-bold  ${phase.color.lightBg} ${phase.color.text}`}
            >
              {index + 1}
            </div>
            <div>
              <h3
                className={`text-lg font-bold text-gray-900 dark:text-white`}
              >
                {phase.title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-sm text-gray-500 dark:text-gray-300">
                  {phase.topics.length} topics
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">

            <motion.div
              animate={{
                rotate: isExpanded ? 180 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <ChevronDown className="text-gray-400" size={24} />
            </motion.div>

          </div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-content dark:text-contentDark">
                  {phase.topics.map((topic, index) => {
                    return (
                      <div key={topic.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group dark:hover:bg-[#0D1322]">
                        <div
                          className={`flex items-center gap-2 transition-transform group-hover:scale-110`}
                        > <span className={`${phase.color.text} text-xs size-5 font-bold flex justify-center items-center border-2 rounded-full`}>{index + 1}</span> <span className='font-medium'> {topic.title}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div >
    </div >
  )
}
