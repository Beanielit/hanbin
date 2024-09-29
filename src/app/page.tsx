"use client";

import Image from "next/image";

import CustomCarousel from "@/components/customUi/Carousel";
import { useConfig } from "@/provider/ConfigProvider";

const Page = () => {
    const { config } = useConfig();
    return (
        <div className="flex-col justify-center items-center w-full">
            <div className="max-md:pl-6 max-md:pr-6">
                <CustomCarousel
                    items={Array.from({ length: 13 }).map((_, i) => (
                        <Image
                            alt="profile"
                            height={500}
                            key={i}
                            src={`${config.imagePrefix}/profile/profile_${i + 1}.jpg`}
                            width={500}
                        />
                    ))}
                />
            </div>
            <div className="max-md:pl-6 max-md:pr-6">
                <CustomCarousel
                    items={[
                        <iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            frameBorder="0"
                            height="500"
                            key={0}
                            referrerPolicy="strict-origin-when-cross-origin"
                            src="https://www.youtube.com/embed/KJKXrYk4FhE"
                            title="[오뚜기 진비빔면] 비빔면이 부족해요? 그럼 채워야죠~ 120%! 초넉넉 초시원매콤 120% 만족! 진비빔면❤️ (30초)"
                            width="600"
                        />
                    ]}
                />
            </div>
        </div>
    );
};
export default Page;
