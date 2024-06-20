import { list } from "postcss";
import React from "react";

const Features = () => {
  const List = [
    {
      title: "Customizable",
      description:
        "You don't need to be an expert to customize this plugin. Our code is very readable and well documented.",
    },
    {
      title: "Fully Responsive",
      description:
        "With mobile, tablet & desktop support it doesn't matter what device you're using. This plugin is responsive in all browsers",
    },
    {
      title: "Developer Support",
      description:
        "Our plugins are supported by sponsors who provide community support. Sponsors will get email support on weekdays.",
    },
    {
      title: "Cross Browser",
      description:
        "We make sure our plugins are working perfectly with all modern browsers available such as Chrome, Firefox, Safari.",
    },
    {
      title: "Clean Code",
      description:
        "We strictly follow a set of guidelines along with unit tests to make sure your implementation as easy as possible.",
    },
    {
      title: "Well Maintained",
      description:
        "This templatte is actively maintained by the core plugin team. We are working on fixing each of the issues reported.",
    },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-4xl mx-auto px-8 py-8">
        {/* heading div */}
        <div className="flex flex-col text-center gap-3 max-w-[768px] mx-auto">
          <h1 className="font-semibold text-3xl">Features you'll love</h1>
          <p className="max-w-md mx-auto mt-2 text-gray-500">
            A responsive documentation template built for everyone who wants to
            create a plugin.
          </p>
        </div>
        {/* Features Div */}
        <div className="mt-10 ">
          <ul className="grid md:grid-cols-2 gap-6">
            {List.map((element, idx) => (
              <li key={idx} className="flex py-4 gap-4">
                {/* <span class="text-violet-600 bg-violet-500/10 p-3 rounded-full"> */}
                <span class="text-violet-600 p-3 rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                  >
                    <path
                      d="M0.849976 1.74998C0.849976 1.25292 1.25292 0.849976 1.74998 0.849976H3.24998C3.74703 0.849976 4.14998 1.25292 4.14998 1.74998V2.04998H10.85V1.74998C10.85 1.25292 11.2529 0.849976 11.75 0.849976H13.25C13.747 0.849976 14.15 1.25292 14.15 1.74998V3.24998C14.15 3.74703 13.747 4.14998 13.25 4.14998H12.95V10.85H13.25C13.747 10.85 14.15 11.2529 14.15 11.75V13.25C14.15 13.747 13.747 14.15 13.25 14.15H11.75C11.2529 14.15 10.85 13.747 10.85 13.25V12.95H4.14998V13.25C4.14998 13.747 3.74703 14.15 3.24998 14.15H1.74998C1.25292 14.15 0.849976 13.747 0.849976 13.25V11.75C0.849976 11.2529 1.25292 10.85 1.74998 10.85H2.04998V4.14998H1.74998C1.25292 4.14998 0.849976 3.74703 0.849976 3.24998V1.74998ZM2.94998 4.14998V10.85H3.24998C3.74703 10.85 4.14998 11.2529 4.14998 11.75V12.05H10.85V11.75C10.85 11.2529 11.2529 10.85 11.75 10.85H12.05V4.14998H11.75C11.2529 4.14998 10.85 3.74703 10.85 3.24998V2.94998H4.14998V3.24998C4.14998 3.74703 3.74703 4.14998 3.24998 4.14998H2.94998ZM2.34998 1.74998H1.74998V2.34998V2.64998V3.24998H2.34998H2.64998H3.24998V2.64998V2.34998V1.74998H2.64998H2.34998ZM5.09998 5.99998C5.09998 5.50292 5.50292 5.09998 5.99998 5.09998H6.99998C7.49703 5.09998 7.89998 5.50292 7.89998 5.99998V6.99998C7.89998 7.03591 7.89787 7.07134 7.89378 7.10618C7.92861 7.10208 7.96405 7.09998 7.99998 7.09998H8.99998C9.49703 7.09998 9.89998 7.50292 9.89998 7.99998V8.99998C9.89998 9.49703 9.49703 9.89998 8.99998 9.89998H7.99998C7.50292 9.89998 7.09998 9.49703 7.09998 8.99998V7.99998C7.09998 7.96405 7.10208 7.92861 7.10618 7.89378C7.07134 7.89787 7.03591 7.89998 6.99998 7.89998H5.99998C5.50292 7.89998 5.09998 7.49703 5.09998 6.99998V5.99998ZM6.09998 5.99998H5.99998V6.09998V6.89998V6.99998H6.09998H6.89998H6.99998V6.89998V6.09998V5.99998H6.89998H6.09998ZM7.99998 7.99998H8.09998H8.89998H8.99998V8.09998V8.89998V8.99998H8.89998H8.09998H7.99998V8.89998V8.09998V7.99998ZM2.64998 11.75H2.34998H1.74998V12.35V12.65V13.25H2.34998H2.64998H3.24998V12.65V12.35V11.75H2.64998ZM11.75 1.74998H12.35H12.65H13.25V2.34998V2.64998V3.24998H12.65H12.35H11.75V2.64998V2.34998V1.74998ZM12.65 11.75H12.35H11.75V12.35V12.65V13.25H12.35H12.65H13.25V12.65V12.35V11.75H12.65Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <div className="flex flex-col">
                  <h1 className="text-xl font-medium">{element.title}</h1>
                  <p className="mt-1 text-gray-500">{element.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
