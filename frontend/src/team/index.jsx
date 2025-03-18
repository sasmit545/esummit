
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import '../App.css';
import React, { useState, useEffect } from "react";
import Loader from "../loader/loader";

const Team = () => {
    const [loading, setLoading] = useState(true);
    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setTeamData(head_data);
            setLoading(false);
        }, 1000); // Simulating data fetch delay
    }, []);


    const head_data = [
        {
            role: "Overall Coordinators",
            data: [
                {
                    name: "Mayank Sen",
                    role: "Overall Coordinator",
                    image: '/team/Mayank sen - Mayank Sen.jpg',
                    socials: {
                        linkedin: "https://www.linkedin.com/in/mayank-sen-41227a256/",
                        instagram: "https://www.instagram.com/mayanksen.in",
                        github: "https://github.com/Senmayank",
                    },
                },
                {
                    name: "Tanay Chhajed",
                    role: "Overall Coordinator",
                    image: "/team/Tanay.jpg",
                    socials: {
                        linkedin: "https://www.linkedin.com/in/tanaychhajed/",
                        instagram: "https://www.instagram.com/_tanay21/",
                    },
                },
            ],
        },
        {
            role: "Heads",
            data: [
                {
                    name: "Kumar Nalin Singh",
                    role: "Head",
                    image: "/team/nalin.jpeg",
                    socials: {
                        linkedin: "https://in.linkedin.com/in/knalins",
                        instagram: "https://www.instagram.com/knalins/",
                    },
                },
                {
                    name: "Raunak Bansod",
                    role: "Head",
                    image: "/team/raunak.jpg",
                    socials: {
                        linkedin: "https://www.linkedin.com/in/raunak-bansod-718b30259",
                        instagram: "https://www.instagram.com/raunak_04_",
                        github: "https://github.com/RaunakBansod?tab=repositories",
                    },
                },
                {
                    name: "Manas Gupta",
                    role: "Head",
                    image: "/team/manas.jpg",
                    socials: {
                        linkedin: "www.linkedin.com/in/manas-gupta21",
                        instagram: "https://www.instagram.com/manas.gupta",
                        github: "https://github.com/ManasG2110/",
                    },
                },
                {
                    name: "Saumya Jain",
                    role: "Head",
                    image: "/team/saumya.jpg",
                    socials: {
                        linkedin: "https://www.linkedin.com/in/saumyajain11",
                        instagram: "https://www.instagram.com/_saumya._.jain",
                    },
                },
                {
                    name: "Kushal Agarwal",
                    role: "Head",
                    image: "/team/kushal.jpg",
                    socials: {
                        linkedin: "https://www.linkedin.com/in/kushal-agarwal-03868225a/",
                        github: "https://github.com/kushalag02",
                    },
                },
                {
                    name: "Aditya",
                    role: "Head",
                    image: "/team/aditya.JPG",
                    socials: {
                        linkedin: "https://www.linkedin.com/in/aditya-bajar-495028256",
                        instagram: "https://www.instagram.com/adityabajar27",
                    },
                },
            ],
        },
    ];


    return (
        <>

            <div
                className="fixed inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
                style={{ backgroundImage: "url('/main/background.png')" }}
            ></div>


            {loading ?
                <Loader /> :
                <section>
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-5xl font-bold text-center text-white">
                            Meet Our Team
                        </h1>

                        <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
                            A team of professionals dedicated to excellence.
                        </p>

                        {head_data.map((category, index) => (
                            <div key={index}>
                                <h3 className="text-xl font-semibold text-center text-white lg:text-2xl mt-6">
                                    {category.role}
                                </h3>
                                <div className="grid grid-cols-1 gap-6 mt-6 sm:gap-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-2">
                                    {category.data.map((member, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="group flex flex-col items-center p-6 transition-all duration-300 transform border border-gray-700 bg-gray-800 bg-opacity-90 rounded-xl hover:shadow-lg hover:scale-105"
                                        >
                                            <img
                                                className="object-cover w-36 h-36 rounded-full ring-4 ring-gray-600 group-hover:ring-[#D36D36] transition-all duration-300"
                                                src={member.image}
                                                alt={member.name}
                                            />
                                            <h1 className="mt-2 text-xl font-bold text-white">
                                                {member.name}
                                            </h1>
                                            <p className="mt-1 text-sm font-medium text-[#D36D36]">
                                                {member.role}
                                            </p>
                                            <div className="flex mt-4 space-x-4">
                                                {Object.entries(member.socials).map(([platform, link]) => (
                                                    <a
                                                        key={platform}
                                                        href={link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                                    >
                                                        {platform === "linkedin" && <FaLinkedinIn className="w-5 h-5" />}
                                                        {platform === "twitter" && <FaTwitter className="w-5 h-5" />}
                                                        {platform === "facebook" && <FaFacebookF className="w-5 h-5" />}
                                                        {platform === "instagram" && <FaInstagram className="w-5 h-5" />}
                                                        {platform === "github" && <FaGithub className="w-5 h-5" />}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


            }

        </>


    );
};

export default Team;
