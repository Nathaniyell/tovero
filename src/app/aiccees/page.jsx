"use client"

import ConferenceHero from "@/components/hero/conference";
import HeroImg from "../../../public/images/aicess/aicess_hero.png";
import aicessImg from "../../../public/images/aicess/aicess_aicess.png";
import {
  ConferencesInfo,
  ConferenceStats,
  ConferenceStatsAicess,
} from "@/components/conferences/conferences";
import { aicess } from "@/data_models/conferences";
import Sponsors from "@/components/conferences/sponsors";
import DetailsItemized from "@/components/conferences/itemized";
import Submissions from "@/components/conferences/submissions";
import { motion } from "framer-motion";

function Aicess() {
  const title =
    "Africa International Conference on Clean Energy & Energy Storage";
  const description = "AICCEES 2024";
  return (
    <main>
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />
      <ConferenceHero
        HeroImg={HeroImg}
        image={aicessImg}
        title={title}
        description={description}
      />
      <br />
      <br />

      <div className="w-[90%] my-0 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row justify-between"
        >
          {aicess["aicessInfo"].map((info, index) => (
            <div key={index} className="w-full lg:w-[60%]">
              <ConferencesInfo
                title={info.title}
                paragraph1={info.paragraph1}
                paragraph2={info.paragraph2}
              />
            </div>
          ))}

          <ConferenceStatsAicess />
        </motion.div>
        <br />
        <br />
        <Sponsors />
        <br />
        <br />
        <DetailsItemized />
        <br />
        <br />
      </div>

      <Submissions />
      <br />
      <br />
    </main>
  );
}

export default Aicess;