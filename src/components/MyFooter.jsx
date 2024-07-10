import React from "react";
import { Footer } from "flowbite-react";
import {
  BsLinkedin,
  BsDiscord,
  BsInstagram,
  BsSlack,
} from "react-icons/bs";
import logo from "../assets/logo.png";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block items-center"
              />
              <span className="text-[#263238]">TALENTPULSE</span>
            </a>
            <div>
              <p className="mb-1">
                Copyright © 2024 TalentPulse ltd.
              </p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Foros" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://acortar.link/5P8WQy"
                  target="_blank"
                >
                  Slack
                </Footer.Link>
                <Footer.Link
                  href="https://discord.gg/zdmwfKxQ"
                  target="_blank"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Sigueme" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/company/recruiter-talent-pulse"
                  target="_blank"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/recruitertalentpulse/"
                  target="_blank"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="emi&vico™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://www.linkedin.com/company/recruiter-talent-pulse"
              target="_blank"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://www.instagram.com/recruitertalentpulse/"
              target="_blank"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://acortar.link/5P8WQy"
              target="_blank"
              icon={BsSlack}
            />
            <Footer.Icon
              href="https://discord.gg/zdmwfKxQ"
              target="_blank"
              icon={BsDiscord}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
