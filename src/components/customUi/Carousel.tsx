"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CustomCarouselProps {
    items: JSX.Element[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = props => {
    const { items } = props;
    return (
        <Carousel className="w-full max-w-screen-sm mx-auto">
            <CarouselContent>
                {items.map((item, i) => (
                    <CarouselItem key={i}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    {/* eslint-disable-next-line spellcheck/spell-checker */}
                                    {item}
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
