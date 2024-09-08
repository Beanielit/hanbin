"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useConfig } from "@/provider/ConfigProvider";

// interface CustomCarouselProps {
//   item: { src: string; alt: string };
// }

const CustomCarousel = () => {
    const { config } = useConfig();
    const imagePrefix = config.environment === "local" ? "" : "/hanbin";
    return (
        <Carousel className="w-full max-w-screen-sm mx-auto">
            <CarouselContent>
                {Array.from({ length: 13 }).map((_, i) => (
                    <CarouselItem key={i}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* eslint-disable-next-line spellcheck/spell-checker */}
                                    <Image
                                        alt="profile"
                                        height={500}
                                        src={`${imagePrefix}/profile/profile_${i + 1}.jpg`}
                                        width={500}
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CustomCarousel;
