"use client";

import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// interface CustomCarouselProps {
//   item: { src: string; alt: string };
// }

const CustomCarousel = () => {
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
                                        src={`/profile/profile_${i + 1}.jpg`}
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
