"use client";

import { SectionWrapper, SectionHeader } from "..";
import { Card } from "@/components";
import Image from "next/image";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="xl:p-16 p-8 lg:min-h-[calc(100dvh-128px)] xl:min-h-[calc(100dvh-136px)] flex"
    >
      <div className="h-full lg:grid grid-cols-4 lg:space-x-16 space-y-8 lg:space-y-0 grow">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="rounded-box shadow-lg h-full">
            <Image
              src="https://us-west-2.graphassets.com/cmkxlquti0e1z07ls6wq75986/cmkygekm08m0e08loi445oxg0"
              width={2560}
              height={1708}
              alt="Neishastylist"
              className="h-full object-cover rounded-box"
            />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col space-y-8 xl:space-y-16 col-span-2 text-center lg:text-left h-full"
        >
          <SectionHeader>About Us</SectionHeader>

          <p className="text-sm sm:text-base 2xl:text-lg leading-8 sm:leading-10 2xl:leading-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae nisi massa. Donec luctus, odio efficitur ullamcorper
            efficitur, sapien quam aliquam erat, in consectetur odio magna eget
            nisi. Donec faucibus sollicitudin erat, non sodales dolor
            pellentesque a. Vestibulum venenatis fermentum mauris, eget gravida
            quam hendrerit quis.
            <br />
            <br />
            Cras ultricies felis vel purus ultricies, vitae laoreet nisi rutrum.
            Nam sollicitudin, nulla a blandit scelerisque, dui elit gravida
            magna, eu ornare felis dolor ac elit. Etiam iaculis, metus sed
            commodo molestie, lacus risus laoreet magna, eget semper nunc ex ut
            neque. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
