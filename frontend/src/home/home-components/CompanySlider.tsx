import React, { useEffect, useRef } from "react";
import apple from "../../images/apple.png";
import meta from "../../images/meta.png";
import google from "../../images/google.png";
import microsoft from "../../images/microsoft.png";
import netflix from "../../images/netflix.png";
import uber from "../../images/uber.png";
import infosys from "../../images/infosys.png";
import mahindra from "../../images/mahindra.png";
import wipro from "../../images/wipro.png";
import tcs from "../../images/tcs.png";
import mindtree from "../../images/mindtree.png";
import hcl from "../../images/hcl.png";
import infotech from "../../images/infotech.png";
import amazon from "../../images/amazon.png";

const CompanySlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval: number = setInterval(() => {
      if (scrollRef.current) {
        const { clientWidth, scrollWidth, scrollLeft } = scrollRef.current;
        if (clientWidth + scrollLeft >= scrollWidth-5) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="text-xl 600px:text-2xl 1000px:text-3xl pt-4 font-semibold text-gray-600">Our users</p>
      <div
        ref={scrollRef}
        className="w-full flex gap-4  overflow-x-scroll hide"
      >
        {companyArray?.map((company: companyArrayType): JSX.Element => {
          return (
            <img
              className=" h-16 w-16 600px:w-20  600px:h-20 1000px:w-24 1000px:h-28 object-contain "
              src={company.Logo}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanySlider;

interface companyArrayType {
  name: string;
  Logo: string;
}

const companyArray: companyArrayType[] = [
  { name: "Apple", Logo: apple },
  { name: "Meta", Logo: meta },
  { name: "Google", Logo: google },
  { name: "Microsoft", Logo: microsoft },
  { name: "Netflix", Logo: netflix },
  { name: "Uber", Logo: uber },
  { name: "infosys", Logo: infosys },
  { name: "mindtree", Logo: mindtree },
  { name: "tcs", Logo: tcs },
  { name: "hcl", Logo: hcl },
  { name: "wipro", Logo: wipro },
  { name: "mahindra", Logo: mahindra },
  { name: "infotech", Logo: infotech },
  { name: "amazon", Logo: amazon },
] as const;
