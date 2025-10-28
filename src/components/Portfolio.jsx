import { useState, useEffect, useRef } from "react";
import buyerPersonaPdf from "../assets/Professional Marketing Buyer Persona A4 Document (1).pdf";
import businessPlanPdf from "../assets/PG.pdf";
import industrialPersona from "../assets/User Personas Presentation.pdf";
import eventLeadPdf from "../assets/Event leads lifecycle.pdf";
import postEventFlowChart from "../assets/Event Leads Lifecycle From Event to Engagement.pdf";

export default function Portfolio() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileWorksOpen, setMobileWorksOpen] = useState(false);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setActiveSubmenu(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Define dropdown menu structure with nested options
  const workCategories = {
    "LinkedIn Outreach": {
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      bgColor: "bg-blue-100",
      hoverBgColor: "group-hover:bg-blue-200",
      textColor: "text-blue-600",
      subcategories: [
        {
          name: "LinkedIn Marketing Strategy",
          url: "https://docs.google.com/document/d/1uA7pC3kF-IKRyERv0uuc8py7h7PexrZJI5D7WC3J-rA/edit?usp=sharing    ",
        },
        {
          name: "How to Enhance Your LinkedIn Page",
          url: "https://docs.google.com/document/d/14DQX5Go5LEX02ipjUPt8970b2FNugiFMhX9ZRK1RS6Q/edit?usp=sharing",
        },
        {
          name: "LinkedIn Course - Vaibhav Sisinty",
          url: "https://docs.google.com/document/d/1kdwHFkiJMyb-lR0KH_bvt_HfFHv-Xf1JPQuV5FrtrGo/edit?usp=sharing",
        },
      ],
    },
    "Market Research": {
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      bgColor: "bg-pink-100",
      hoverBgColor: "group-hover:bg-pink-200",
      textColor: "text-pink-600",
      subcategories: [
        {
          name: "Cosmetic and skincare brand Suggestions",
          url: "https://docs.google.com/spreadsheets/d/1-HSEP8EPO_Vna4MKsiAMkEv-gpngZlGVy4D7z1FdjLA/edit?usp=sharing",
        },
        {
          name: "Personal Care Growth hacks",
          url: "https://docs.google.com/spreadsheets/u/2/d/1a9nn4fDFpBKdXBVMEtWd_XG0KctjjLScIww3fsPNnA8/edit?usp=sharing",
        },
        {
          name: "Functionalities for a D2C Jewellery Store",
          url: "https://docs.google.com/document/d/1FaSEjfRH0uqR2wf4F1f5CFiNRLypYNPHyaugwWMqWiw/edit?usp=sharing",
        },
        {
          name: "Business Plan Document for the Upcoming Year",
          url: "https://docs.google.com/document/d/1M6UFJ-qoyHyithVumgco5YKfQeHauS9lQBzYz2C3slI/edit?usp=sharing",
        },
        {
          name: "Business Plan Template for an Established Business",
          url: businessPlanPdf,
        },
        {
          name: "Content Framework Template",
          url: "https://docs.google.com/spreadsheets/d/15KYfJgBCMdN6xasRhPgyoHKein0p2bFoxdwsr69dL04/edit?usp=sharing",
        },
        {
          name: "Quora Marketing Plan for ABC company",
          url: "https://docs.google.com/document/d/19AolS9hnQ53GgA3vThboX324c84aIRJYx_5iKUoxo9Q/edit?usp=sharing",
        },
        {
          name: "Direct Gift Marketing Campaign",
          url: "https://docs.google.com/presentation/d/11t_pes8vYTczSRb2z2cBtlTjW6lerbksbULhBLFzqEc/edit?usp=sharing",
        },
        {
          name: "ORM (Online Reputation Management)",
          url: "https://docs.google.com/document/d/11kvdozO65yImotxygUYNan8kZ6ZaLN0E9wIHq_R6V1A/edit?usp=sharing",
        },
      ],
    },
    "Lead Generation": {
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      bgColor: "bg-green-100",
      hoverBgColor: "group-hover:bg-green-200",
      textColor: "text-green-600",
      subcategories: [
        {
          name: "Outbound Process",
          url: "https://docs.google.com/document/d/1rDi2dh8VJ-r0fHJCAr-EdVEn4nLhV1dlVv7VP4_s0c4/edit?usp=sharing",
        },
        {
          name: "Apollo Outbound Process",
          url: "https://docs.google.com/document/d/1wNGdhMstvGotL65JRDWgX0_osKTYIlyyUdV-q0wEPzg/edit?usp=sharing",
        },

        {
          name: "Outbound Follow-Up Emails",
          url: "https://docs.google.com/document/d/14828VRfwj2wZmKO2U1wcGEK2htaNyzk-512sdXYnFzM/edit?usp=sharing",
        },
        {
          name: "Mail Templates (Platform change)",
          url: "https://docs.google.com/document/d/1adeiRqYQz-3-Lkuq8D9YmEDLXFioa-0c_m5EA8-4_ig/edit?usp=sharing",
        },
        {
          name: "White labelling Email template",
          url: "https://docs.google.com/document/d/1-c-tDsdJ9SgsKw2NBzceyEZX8UxfT1ELwBRKa4ikHS4/edit?usp=sharing",
        },
        {
          name: "Additional Contributions",
          url: "https://docs.google.com/document/d/14iWeVlvrdGLSolxubok76L2ZBd4b9f83GjgTAmRJots/edit?usp=sharing",
        },
      ],
    },
    "Account-Based Marketing": {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      bgColor: "bg-indigo-100",
      hoverBgColor: "group-hover:bg-indigo-200",
      textColor: "text-indigo-600",
      subcategories: [
        {
          name: "Event Lead Lifecycle",
          url: eventLeadPdf,
        },
        {
          name: "Post Event Wireframe",
          url: postEventFlowChart,
        },
        {
          name: "Buyer's Persona for Industrial Partnership",
          url: industrialPersona,
        },
        {
          name: "Buyer's Persona for Consultancy",
          url: buyerPersonaPdf,
        },
        {
          name: "Countries Business Culture",
          url: "https://docs.google.com/document/d/1LO46wPrM15zIE8WPpPWahJlUX3IxSdCL63RV_DS-Blw/edit?usp=sharing",
        },
        {
          name: "One pager-CRO Action Plan",
          url: "https://docs.google.com/presentation/d/15qEWEcjXVkJdgqPsB7pnaEKyE07_TtFneWtgCCQZrrQ/edit?usp=sharing",
        },
        {
          name: "Business Development: Outbound",
          url: "https://docs.google.com/presentation/d/1CQ6AVHrZIubkZ45jEU6oORRB9IPjZ3jFF-Zo6JG9aZI/edit?usp=sharing",
        },
        {
          name: "CRO Audit Template",
          url: "https://docs.google.com/presentation/d/1NoY9NDFuqIiZzFX58FCVI8b7pxdmuxn9x6zlZwuAB0g/edit?usp=sharing",
        },
        {
          name: "CRO Excel Template",
          url: "https://docs.google.com/spreadsheets/d/1r90kfRsW_Vv0NXJO6KI6k_cmcvaHLqUSMwlUn12yL-U/edit?usp=sharing",
        },
      ],
    },
    "Marketing Funnel": {
      icon: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z",
      bgColor: "bg-orange-100",
      hoverBgColor: "group-hover:bg-orange-200",
      textColor: "text-orange-600",
      subcategories: [
        {
          name: "LinkedIn Marketing Funnels",
          url: "https://docs.google.com/document/d/1fQ6n8P7aad9Czy29_0KwAiP7atfz92a8o4n1pZXMmD8/edit?usp=sharing",
        },
      ],
    },
    "Performance & SEO Marketing": {
      icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      bgColor: "bg-purple-100",
      hoverBgColor: "group-hover:bg-purple-200",
      textColor: "text-purple-600",
      subcategories: [
        {
          name: "Performance Marketing Expertise",
          url: "https://docs.google.com/document/d/1wi96QhPeDqUaFyPcJKykgqpcdkN2ZCoqTaUdiEaEHTg/edit?usp=sharing",
        },
        {
          name: "SEO & Backlinking Experience",
          url: "https://docs.google.com/document/d/1vT2A9rd-EHZnau1ZUeMpWQyiSxdk0AdzNQuDq7y58CE/edit?usp=sharing",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800 font-sans">
      {/* Enhanced Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl py-3 border-b border-gray-100"
            : "bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Priyanshi Gupta
                </span>
              </div>
            </div>

            {/* Enhanced Desktop Menu - Left-aligned */}
            <div className="hidden lg:flex items-center justify-start flex-1 ml-12">
              <div className="flex items-center space-x-8">
                <a
                  href="#home"
                  className="relative group text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>

                <div ref={dropdownRef} className="relative group">
                  <button
                    onClick={() => {
                      setIsServicesOpen(!isServicesOpen);
                      setActiveSubmenu(null);
                    }}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg group"
                  >
                    Works
                    <svg
                      className={`w-5 h-5 ml-2 transition-all duration-300 ${
                        isServicesOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </button>

                  {isServicesOpen && (
                    <div className="absolute left-0 mt-4 w-80 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl py-4 z-20 border border-gray-100 animate-in slide-in-from-top-4 duration-500 max-h-96 overflow-y-auto">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        My Work
                      </div>

                      {Object.entries(workCategories).map(
                        ([category, data]) => (
                          <div key={category} className="relative">
                            <button
                              onClick={() =>
                                setActiveSubmenu(
                                  activeSubmenu === category ? null : category
                                )
                              }
                              className="w-full flex items-center justify-between px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 rounded-lg mx-2 group"
                            >
                              <div className="flex items-center">
                                <div
                                  className={`w-8 h-8 ${data.bgColor} rounded-lg flex items-center justify-center mr-3 ${data.hoverBgColor} transition-colors flex-shrink-0`}
                                >
                                  <svg
                                    className={`w-4 h-4 ${data.textColor}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d={data.icon}
                                    />
                                  </svg>
                                </div>
                                <div className="text-left flex-1">
                                  <div className="font-semibold text-gray-900">
                                    {category}
                                  </div>
                                </div>
                              </div>
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  activeSubmenu === category ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>

                            {activeSubmenu === category && (
                              <div className="ml-6 mt-2 space-y-1 animate-in slide-in-from-left-2 duration-300">
                                {data.subcategories.map((subcategory) => (
                                  <a
                                    key={subcategory.name}
                                    href={subcategory.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                      setIsServicesOpen(false);
                                      setActiveSubmenu(null);
                                    }}
                                    className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group text-left"
                                  >
                                    <span className="flex-1 text-left leading-relaxed">
                                      {subcategory.name}
                                    </span>
                                    <svg
                                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2 flex-shrink-0"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                      />
                                    </svg>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="relative group text-gray-700 hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            </div>

            {/* CTA Button - Right Side */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg whitespace-nowrap"
              >
                Get Started
              </a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 mr-4"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 animate-in slide-in-from-top-4 duration-300 shadow-xl max-h-[80vh] overflow-y-auto overscroll-contain">
            <div className="container mx-auto px-2 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 max-w-xs sm:max-w-none min-h-0">
              <a
                href="#home"
                className="flex items-center py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 rounded-xl font-semibold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Home
              </a>

              {/* Mobile Works Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => {
                    setMobileWorksOpen(!mobileWorksOpen);
                    setMobileActiveSubmenu(null);
                  }}
                  className="w-full flex items-center justify-between py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 rounded-xl font-semibold text-base"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                    Works
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileWorksOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileWorksOpen && (
                  <div className="ml-2 space-y-2 animate-in slide-in-from-top-2 duration-300 max-h-[60vh] overflow-y-auto">
                    {Object.entries(workCategories).map(([category, data]) => (
                      <div key={category} className="space-y-1">
                        <button
                          onClick={() =>
                            setMobileActiveSubmenu(
                              mobileActiveSubmenu === category ? null : category
                            )
                          }
                          className="w-full flex items-center justify-between py-2 px-3 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 rounded-lg text-sm font-medium"
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-6 h-6 ${data.bgColor} rounded-md flex items-center justify-center mr-2 flex-shrink-0`}
                            >
                              <svg
                                className={`w-3 h-3 ${data.textColor}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d={data.icon}
                                />
                              </svg>
                            </div>
                            <span>{category}</span>
                          </div>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${
                              mobileActiveSubmenu === category
                                ? "rotate-90"
                                : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {mobileActiveSubmenu === category && (
                          <div className="ml-3 space-y-1 animate-in slide-in-from-left-2 duration-300 max-h-[40vh] overflow-y-auto">
                            {data.subcategories.map((subcategory) => (
                              <a
                                key={subcategory.name}
                                href={subcategory.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileWorksOpen(false);
                                  setMobileActiveSubmenu(null);
                                }}
                                className="flex items-center py-2 px-3 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 text-left"
                              >
                                <span className="flex-1 text-left leading-relaxed">
                                  {subcategory.name}
                                </span>
                                <svg
                                  className="w-2 h-2 opacity-60 ml-2 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                  />
                                </svg>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#contact"
                className="flex items-center py-3 px-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-200 rounded-xl font-semibold text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact
              </a>
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 sm:-bottom-8 left-8 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 container mx-auto px-1 sm:px-3 md:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 text-center">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                ✨ Associate Business Development Executive
              </span>
            </div>

            <h1 className="text-[13px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 sm:mb-8 text-gray-900 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent block px-1 sm:px-2 md:px-0 text-center leading-tight break-normal whitespace-normal word-spacing-normal">
                Driving Holistic Marketing Success Through Insight,
                Innovation, and Execution
              </span>
              {/* <span className="text-blue-600">Whatever it takes.</span> */}
            </h1>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              <p className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-700 font-light">
                Hi there, my name is{" "}
                <span className="font-semibold text-blue-600">
                  {" "}
                  Priyanshi Gupta
                </span>
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                I'm a results-oriented Associate Business Development Executive
                with hands-on experience in performance marketing, outbound
                campaigns, research & development, off-page, SEO, and
                outreach strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600 px-4">
              <a
                href="#projects"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block text-center text-sm sm:text-base"
              >
                <span className="flex items-center">
                  VIEW MY WORK
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="group border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block text-center text-sm sm:text-base"
              >
                <span className="flex items-center">
                  GET IN TOUCH
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section
        id="services"
        className="py-16 lg:py-20 bg-white relative overflow-hidden min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium mb-4">
              ✨ My Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                What I Do Best
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              My expertise lies in using data to optimize customer journeys,
              improve marketing ROI, and develop insights-driven
              campaigns that scale.
            </p>
          </div>

          {/* Services Grid - Optimized for screen fit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Service Card 1 */}
            <div className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">
                Conversion Rate Optimization(CRO)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Focus on Conversion Rate Optimization by analyzing user
                behavior, identifying friction points, and providing actionable
                insights to improve website performance and increase
                lead conversions.
              </p>
              {/* <div className="mt-4 lg:mt-6">
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div> */}
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">
                Outbound Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Gained hands-on experience in outbound marketing by managing
                LinkedIn and cold email outreach campaigns. Learned audience
                targeting, and messaging strategies to effectively engage
                C-suite prospects.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 lg:w-8 lg:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-900">
                Research & Development
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                Contribute to research and development by exploring market
                trends, analyzing competitor strategies, and identifying growth
                opportunities to support data-driven business decisions.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center mt-12 lg:mt-16">
            <p className="text-gray-600 mb-6 text-lg">
              Ready to transform your brand's voice?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </section>

      {/* Testimonial Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  What Clients Say
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
              <div className="text-8xl font-bold text-blue-200 mb-6 leading-none">
                "
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium mb-8 text-gray-800 leading-relaxed italic">
                Kim is a tone-of-voice genius. Clever, kind, and super great
                with words. She transformed our brand messaging completely.
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SG</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">Sophie Gray</p>
                  <p className="text-gray-600">Creative Designer</p>
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                25+
              </div>
              <p className="text-xl md:text-2xl font-light">
                Projects Executed
              </p>
              <p className="text-blue-100 mt-2">
                Completed across Outreach, Ads, CRO & Off Page SEO
              </p>
            </div>

            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-purple-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <p className="text-xl md:text-2xl font-light">Hands-On Tools</p>
              <p className="text-blue-100 mt-2">
                Meta, Google, Apollo.io, LinkedIn Sales Navigator, GA4, etc
              </p>
            </div>

            <div className="group">
              <div className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-br from-white to-pink-100 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                30%
              </div>
              <p className="text-xl md:text-2xl font-light">Response Rates</p>
              <p className="text-blue-100 mt-2">
                Achieved through strategic audience targeting and
                conversion-focused copy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Ready to transform your brand's voice? Get in touch and let's
              create something amazing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Contact Info
              </h3>
              <div className="space-y-3">
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-700">
                  <span className="font-semibold mr-2 mb-1 sm:mb-0">Name:</span>
                  <span>Priyanshi Gupta</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-700">
                  <span className="font-semibold mr-2 mb-1 sm:mb-0">
                    Email:
                  </span>
                  <a
                    href="mailto:guptapriyanshi1503@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors break-all sm:break-normal text-sm sm:text-base"
                  >
                    guptapriyanshi1503@gmail.com
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center text-gray-700">
                  <span className="font-semibold mr-2 mb-1 sm:mb-0">
                    Contact:
                  </span>
                  <span>7398498519</span>
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Education
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">B.Sc. Home Science</span>
                  <br />
                  <span className="text-gray-600">2021 – 2024</span>
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">
                    Diploma in Nutrition and Health Education SOCE IGNOU
                  </span>
                  <br />
                  <span className="text-gray-600">2023 – 2024</span>
                </p>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Competitor & Market Research
                  </span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-blue-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    A/B Testing
                  </span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Google Suite
                  </span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-purple-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Graphic Designing
                  </span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Meta Ads
                  </span>
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-3 py-2 rounded-lg border border-pink-200 text-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Off Page SEO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Projects Overview
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Delivered data-driven marketing initiatives including LinkedIn
              outreach, PPC optimization, SEO tactics, and R&D to inform
              decision-making and fuel growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                LinkedIn Outreach Campaigns
              </h4>
              <p className="text-gray-600">
                Executed targeted LinkedIn outreach campaigns to connect with
                C-suite executives and decision-makers across industries.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Competitor & Market Research{" "}
              </h4>
              <p className="text-gray-600">
                Performed in-depth market and competitor research to guide
                strategy for new product launches and market positioning.{" "}
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Marketing Funnel
              </h4>
              <p className="text-gray-600">
                Analyzed user behavior and optimized marketing funnels to boost
                conversion rates across multiple digital assets.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Account-Based Marketing
              </h4>
              <p className="text-gray-600">
                Executed personalized outreach strategies targeting high-value
                accounts across LinkedIn and email. Aligned messaging with
                decision-maker pain points to improve engagement.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Lead Generation Workflows(Outbound)
              </h4>
              <p className="text-gray-600">
                Designed multi-step Lead Generation Workflows(Outbound) to
                improve lead quality and response rates in cold
                outreach and ads.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Performance & SEO Marketing
              </h4>
              <p className="text-gray-600">
                Executed integrated SEO and performance marketing strategies to
                boost domain authority, drive organic traffic, and optimize paid
                campaigns for lead generation and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-2 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Priyanshi Gupta
                </span>
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Smart with research, sharp with outreach, and built for impact.
                Let's bring your brand's voice to life.
              </p>
              <div className="flex space-x-4 justify-center gap-6 sm:gap-10">
                {/* <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/priyanshi-gupta-157006202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors mx-auto sm:mx-0"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:guptapriyanshi1503@gmail.com"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors mx-auto sm:mx-0"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              {/* <h4 className="text-lg font-semibold mb-4">Works</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn Outreach Campaigns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Performance Marketing Campaigns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Competitor & Market Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Lead Generation Workflows(Outbound)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Off-Page SEO & Link-Building
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketing Funnel
                  </a>
                </li>
              </ul> */}
            </div>

            <div className="text-center">
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Quick Links
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Priyanshi Gupta. All rights reserved.
              |
              <span className="text-blue-400">
                {" "}
                Crafted with passion for words
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
