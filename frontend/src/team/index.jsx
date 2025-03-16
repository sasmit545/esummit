import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Team = () => {
    const head_data = [
        {
            role: "Overall Heads",
            data: [
                {
                    name: "Arthur Melo",
                    role: "Design Director",
                    image:
                        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
                    socials: {
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                },
                {
                    name: "Jane Doe",
                    role: "Technical Head",
                    image:
                        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
                    socials: {
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                },
            ],
        },
        {
            role: "Spons Heads",
            data: [
                {
                    name: "John Doe",
                    role: "Sponsorship Director",
                    image:
                        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
                    socials: {
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                },
                {
                    name: "Sarah Smith",
                    role: "Marketing Head",
                    image:
                        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxwZW9wbGV8ZW58MHx8fHwxNjM0ODkwMTU0&auto=format&fit=crop&w=500&q=60",
                    socials: {
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                },
                {
                    name: "Sarah Smith",
                    role: "Marketing Head",
                    image:
                        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEzfHxwZW9wbGV8ZW58MHx8fHwxNjM0ODkwMTU0&auto=format&fit=crop&w=500&q=60",
                    socials: {
                        facebook: "#",
                        twitter: "#",
                        linkedin: "#",
                    },
                }
            ],
        },
    ];

    const advisory_data = [
        {
            name: "Arthur Melo",
            role: "Senior Advisor",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
            socials: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
            },
        },
        {
            name: "Pamela Anderson",
            role: "Lead Advisor",
            image:
                "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
            socials: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
            },
        },
       
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize dark:text-white">
                    Meet Our Team
                </h1>

                <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                    A team of professionals dedicated to excellence.
                </p>

                {/* Advisory Team Section */}
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mt-8">
                    Our Advisory Team
                </h2>
                <div className="grid grid-cols-1 gap-6 mt-6 sm:gap-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-3">
                    {advisory_data.map((advisor, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center p-6 transition-all duration-300 transform border bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg hover:scale-105 dark:border-gray-700"
                        >
                            <img
                                className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 dark:ring-gray-600  dark:group-hover:ring-[#D36D36] transition-all duration-300"
                                src={advisor.image}
                                alt={advisor.name}
                            />
                            <h1 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
                                {advisor.name}
                            </h1>
                            <p className="mt-1 text-sm font-medium text-blue-600 dark:text-[#D36D36]">
                                {advisor.role}
                            </p>
                            <div className="flex mt-4 space-x-4">
                                {Object.entries(advisor.socials).map(([platform, link]) => (
                                    <a key={platform} href={link} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                                        {platform === "linkedin" && <FaLinkedinIn className="w-5 h-5" />}
                                        {platform === "twitter" && <FaTwitter className="w-5 h-5" />}
                                        {platform === "facebook" && <FaFacebookF className="w-5 h-5" />}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Heads Team Section */}
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mt-8">
                    Our Heads
                </h2>
                {head_data.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-center text-gray-800 capitalize lg:text-2xl dark:text-white mt-6">
                            {category.role}
                        </h3>
                        <div className="grid grid-cols-1 gap-6 mt-6 sm:gap-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
                            {category.data.map((member, subIndex) => (
                                <div
                                    key={subIndex}
                                    className="group flex flex-col items-center p-6 transition-all duration-300 transform border bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg hover:scale-105 dark:border-gray-700"
                                >
                                    <img
                                        className="object-cover w-28 h-28 rounded-full ring-4 ring-gray-300 dark:ring-gray-600 group-hover:ring-[#D36D36] dark:group-hover:ring-[#D36D36] transition-all duration-300"
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <h1 className="mt-2 text-xl font-bold text-gray-800 dark:text-white">
                                        {member.name}
                                    </h1>
                                    <p className="mt-1 text-sm font-medium dark:text-[#D36D36]">
                                        {member.role}
                                    </p>
                                    <div className="flex mt-4 space-x-4">
                                        {Object.entries(member.socials).map(([platform, link]) => (
                                            <a key={platform} href={link} className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
                                                {platform === "linkedin" && <FaLinkedinIn className="w-5 h-5" />}
                                                {platform === "twitter" && <FaTwitter className="w-5 h-5" />}
                                                {platform === "facebook" && <FaFacebookF className="w-5 h-5" />}
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
    );
};

export default Team;
